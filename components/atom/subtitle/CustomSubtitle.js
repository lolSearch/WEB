import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const CustomSubtitle = (props) => {
  return (
    <h2 className={classNames('subTitle', props.className)}>{props.children}</h2>
  );
};

CustomSubtitle.proptypes = {
  subTitle: PropTypes.string,
  className: PropTypes.string,
}

CustomSubtitle.defaultProps = {
  subTitle: '',
  className: ''
}

export default CustomSubtitle;