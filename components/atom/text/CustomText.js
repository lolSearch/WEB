import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

//a 태그를 써서 text가 아님

const CustomText = (props) => {
  const { className, style, children, onClick } = props;

  return (
    <div className={classNames('box', className)}>
      <a onClick={onClick}>
        <span className={style}>{children}</span>
      </a>
    </div>
  );
};

CustomText.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.node,
}

CustomText.defaultProps = {
  className: '',
  style: '',
  children: '',
}

export default CustomText;