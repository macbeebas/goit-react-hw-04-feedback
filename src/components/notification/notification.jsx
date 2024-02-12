import css from '../notification/notification.module.css';

export const Notification = m => {
  return <p className={css.info}>{m.message}</p>;
};
