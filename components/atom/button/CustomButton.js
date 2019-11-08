import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const CustomButton = (props) => {
  const {type, size , children, onClick, className} = props;

  const classProps = classnames(
    type,
    size,
    className
  );

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classProps}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(['button','submit','reset']),
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  type: ButtonType.BUTTON,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  children: '',
  className: '',
}


export default CustomButton;