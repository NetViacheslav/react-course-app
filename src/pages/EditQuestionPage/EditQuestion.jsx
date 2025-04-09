import { useNavigate } from 'react-router-dom';
import { useActionState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader';
import { QuestionForm } from '../../components/QuestionForm';
import { dateFormat } from '../../helpers/dateFormat';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants';
import { delayFn } from '../../helpers/delayFn';
import cls from './EditQuestionPage.module.css';

const editCardAction = async (_prevState, formData) => {
  try {
    await delayFn();

    const newQuestion = Object.fromEntries(formData);
    const resources = newQuestion.resources.trim();
    const questionId = newQuestion.questionId;
    const isClearForm = newQuestion.clearForm;

    const response = await fetch(`${API_URL}/react/${questionId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        resources: resources.length ? resources.split(',') : [],
        level: Number(newQuestion.level),
        completed: false,
        editDate: dateFormat(new Date()),
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const question = response.json();
    toast.success('New question is edited successfully!');

    return isClearForm ? {} : question;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
};

export const EditQuestion = ({ initialState = {} }) => {
  const navigate = useNavigate();
  const [formState, formAction, isPending] = useActionState(editCardAction, {
    ...initialState,
    clearForm: false,
  });

  const [removeQuestion, isQuestionRemoving] = useFetch(async () => {
    await fetch(`${API_URL}/react/${initialState.id}`, {
      method: 'DELETE',
    });

    toast.success('New question has been successfully remover!');
    navigate('/');
  });

  const onRemoveQuestionHandler = () => {
    const isRemove = confirm('Are you sure?');

    isRemove && removeQuestion;
  };

  return (
    <>
      {(isPending || isQuestionRemoving) && <Loader />}

      <h1 className={cls.formTitle}>Edit question</h1>

      <div className={cls.formContainer}>
        <button
          className={cls.removeBtn}
          disabled={isPending || isQuestionRemoving}
          onClick={onRemoveQuestionHandler}
        >
          X
        </button>

        <QuestionForm
          formAction={formAction}
          state={formState}
          isPending={isPending || isQuestionRemoving}
          submitBtnText="Edit Question"
        />
      </div>
    </>
  );
};
