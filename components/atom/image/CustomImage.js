import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CustomImage = (props) => (
  <img src={props.src} alt={props.alt} className={props.className}/>
);

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

CustomImage.defaultProps = {
  alt: null,
  className: null,
}

export default CustomImage;