import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  height: auto;
  margin: 4rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > *{
    margin: 1rem;
  }
`

const CustomForm = (props) => {
  const {children, onSubmit} = props;
  return (
    <Form 
      onSubmit={onSubmit}>
      {children}
    </Form>
  );
};

export default CustomForm;