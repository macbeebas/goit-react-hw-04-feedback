import css from './section.module.css';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section className={css.main}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
