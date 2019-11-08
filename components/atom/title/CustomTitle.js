import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const CustomTitle = (props) => {
  return (
      <h1 className={classNames('title', props.className)}>{props.children}</h1>
  );
};

CustomTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

CustomTitle.defaultProps = {
  className: '',
  children: '',
}

export default CustomTitle;