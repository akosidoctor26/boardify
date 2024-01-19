'use client';
import React from 'react';

import { createBoard } from '@/actions/create-board/index';
import { useAction } from '@/hooks/use-action';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'SUCCESS!');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    console.log(title);

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput label="Board Title" id="title" errors={fieldErrors} />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};

export default Form;
