import React from 'react';
import Dot from '../Dot';

interface IProps {
  number?: number,
}

export default function Dots({ number = 0 }:IProps){
  const dots = [];
  const colors = ['secondary', 'primary', 'white', 'tertiary'];
  for(let i = 0;i < number; i+=1) {
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const type = colors[Math.round(Math.random() * 3)];
    const key = `${type}${left}${top}`;
    dots.push(<Dot key={key} left={left} top={top} type={type} />);
  }

  return (
    <React.Fragment>
      { dots }
    </React.Fragment>
  );
}