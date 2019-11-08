import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ListItem = (item) => {
  return (
    <div className="ul-list-item">
      {
        (() => {
          if (item.link && item.text) {
            return (
              <Link href={item.link}>
                <li>
                  <a>{item.text}</a>
                </li>
              </Link>
            )
          } else {
            console.log('link false, item: ', item);
            return (
              <li>{item.text}</li>
            )
          }
        })()
      }
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object
}

ListItem.defaultProps = {
  item: {},
}

export default ListItem;