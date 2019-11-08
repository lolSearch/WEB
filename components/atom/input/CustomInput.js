import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './input.scss';

const CustomInput = (props) => {
  const { type, value, name, onChange, id, className, placeholder, onKeyDown, readOnly} = props;

  return (
    <input type={type}
      value={value}
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={classNames(type, 'input', className)}
      placeholder={placeholder}
      id={id}
      readOnly={readOnly}/>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object)]),
  id: PropTypes.string,
}

CustomInput.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
  onChange: () => { },
  onKeyDown: () => { },
  name: '',
  value: '',
  readOnly:false,
  id: '',
}

export default CustomInput;