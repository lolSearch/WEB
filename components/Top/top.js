import React from 'react';
import './top.scss';
import topData from '../../data/data';
import Link from 'next/link';

const top = () => {
  return (
    <div className="top">
      <ul className="top-menu">
        {topData.items.map((item) => {
          return (
            <li className="top-menu-item" key={item.text}>
              <Link href={item.link}>
                <a>
                  {item.text}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default top;