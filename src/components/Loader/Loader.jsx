import cls from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={cls.backdrop}>
      <span class={cls.loader}>Loading</span>
    </div>
  );
};

export const SmallLoader = () => {
  return <span class={cls.smallLoader}></span>;
};
