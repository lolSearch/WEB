import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import './style.scss';

const Ul = ({ items }) => {
  return (
    <ul className="ul-list">
      {items !== '' && items.map((item, index) => {
        return item.link ?
          <ListItem key={index} text={item.text} link={item.link}/>
          : <ListItem key={index} text={item.text}/>
      })}
    </ul>
  );
};

Ul.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

Ul.defaultTypes = {
  items: '',
}

export default Ul;