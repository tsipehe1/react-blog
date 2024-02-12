import './styles.css';
import P from 'prop-types';

export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProp = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
