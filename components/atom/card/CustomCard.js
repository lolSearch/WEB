import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const CustomCard = (props) => {
  const { className, children} = props;
  return (
    <div className={classNames('card', props.className)}>{props.children}</div>
  );
}

CustomCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

CustomCard.defaultProps = {
  className: '',
  children: '',
}

export default CustomCard;