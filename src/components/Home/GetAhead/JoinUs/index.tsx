import React from 'react';
// import { useFetch } from 'react-hooks-fetch';

import Button from '../../../shared-components/Button'
import './style.scss';

import { sections } from '../../../../locale/en';

const { getAhead: { subscribe: { placeholder, button } } } = sections;

export default function JoinUs(){

  return (
    <form className="join-us">
      <input
        className="join-us__input"
        type="text"
        placeholder={placeholder}
      />
      <Button
        className="join-us__button"
        type="submit"
        text={button}
      />
    </form>
  );
}