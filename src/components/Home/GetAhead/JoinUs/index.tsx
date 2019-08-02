import React from 'react';
import useForm from 'react-hook-form';
import { usePost } from 'use-http'

import Button from '../../../shared-components/Button'
import './style.scss';

import { sections } from '../../../../locale/en';

const { getAhead: { subscribe: { placeholder, button } } } = sections;

export default function JoinUs(){
  const { register, handleSubmit, errors } = useForm();

  const [data, loading, error, post] = usePost({url:'https://theatrejs.com/'})

  const emailPattern = /^.+@.+\..+$/

  const afterSubmit = ({ email }: { [key: string]: string }) => {
    post('/subscribe', {
      email,
    });
  }

  const buttonText = data ? 'Thanks for subscribing' : button;
  const isDisabled = Boolean(data);
  
  return (
    <div className="join-us">
      <form onSubmit={handleSubmit(afterSubmit)} className="join-us__form">
        <input
          className="join-us__input"
          name="email"
          type="text"
          placeholder={placeholder}
          ref={register({required: true, pattern: { value: emailPattern }})}
        />
        <Button
          className={`join-us__button`}
          type="submit"
          isDisabled={isDisabled}
          loading={loading}
          text={buttonText}
        />
      </form>
      <div className="join-us__error">
        { (errors.email && 'Email is not valid!') || (error && 'Error subscribing!') }
      </div>
    </div>
  );
}