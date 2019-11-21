import React from 'react';
import styled from 'styled-components';
import LotationChampion from './lotationChampion';

const LotationTable = styled.div`
  display: inline-block;
  max-width: 960px;
  font-size: 15px;
`

const lotationTable = ({ props }) => {

  return (
    <LotationTable>
      {props.championStore.lotationChampion !== undefined &&
        props.championStore.lotationChampion.map((name) => {
          return (
            <LotationChampion
              key={name}
              name={name}
              isTooltipActive={props.isTooltipActive}
              onMouseEnter={props.toggleTooltip}
              onMouseLeave={props.toggleTooltip}
              championStore={props.championStore} />
          )
        })}
    </LotationTable>
  );
};

export default lotationTable;