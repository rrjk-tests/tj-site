import React from 'react';

import './style.scss';

interface IProps {
  title: string,
  description: string,
}

export default function FooterColumn({ title, description }: IProps){
  return (
    <div className="footer-column">
      <h4 className="footer-column__title">
        { title }
      </h4>
      <p className="footer-column__description">
        { description }
      </p>
    </div>
  );
}