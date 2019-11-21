import React from 'react';
import styled from 'styled-components';
import LotationTable from './lotationTable';

const LotationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Century Gothic, sans-serif;
`

const LotationSubtitle = styled.div`
  border-bottom: 1px solid #ccc;
`


const lotationBox = ({subtitle, ...props}) => {
  return (
    <LotationBox>
      <LotationSubtitle>
        <h2>{subtitle}</h2>
      </LotationSubtitle>
      <LotationTable
        props={props}/>
    </LotationBox>
  );
};

export default lotationBox;