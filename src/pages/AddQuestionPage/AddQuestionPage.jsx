import { Button } from '../../components/Button';
import cls from './AddQuestionPage.module.css';

export const AddQuestionPage = () => {
  return (
    <>
      <h1 className={cls.formTitle}>Add new question</h1>

      <div className={cls.formContainer}>
        <form action="" className={cls.form}>
          <div className={cls.formControl}>
            <label htmlFor="questionField">Question:</label>
            <textarea
              defaultValue={'defaultValue'}
              name="question"
              id="questionField"
              cols="30"
              rows="2"
              placeholder="please enter a question"
              required
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="answerField">Short Answer:</label>
            <textarea
              defaultValue={'defaultValue'}
              name="answer"
              id="answerField"
              cols="30"
              rows="2"
              placeholder="please enter a answer"
              required
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="descriptionField">Description:</label>
            <textarea
              defaultValue={'defaultValue'}
              name="description"
              id="descriptionField"
              cols="30"
              rows="5"
              placeholder="please enter a full description"
              required
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="resourcesField">Resources:</label>
            <textarea
              defaultValue={'defaultValue'}
              name="resources"
              id="resourcesField"
              cols="30"
              rows="2"
              placeholder="please enter resources separated by commas"
              required
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="levelField">Level:</label>
            <select name="level" id="levelField" defaultValue={'defaultValue'}>
              <option disabled>Question level</option>
              <hr />
              <option value="1">1 - easiest</option>
              <option value="2">2 - medium</option>
              <option value="3">3 - hardest</option>
            </select>
          </div>

          <label htmlFor="clearFormField" className={cls.clearFormControl}>
            <input
              className={cls.checkbox}
              type="checkbox"
              name="clearForm"
              id="clearFormField"
              defaultValue={true}
            />
            <span>clear form after submitting?</span>
          </label>

          <Button>Add question</Button>
        </form>
      </div>
    </>
  );
};
