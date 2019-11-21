import React from 'react';
import styled from 'styled-components';
import { StatefulToolTip } from 'react-portal-tooltip';

const LotationChampion = styled.div`
  display: inline-block;
  margin-left: 12px;
  margin-top: 15px;
`
const ChampionName = styled.div`
  cursor: pointer;
`

const lotationChampion = (props) => {

  const ChampionImage = styled.div`
  height: 125px;
  width: 125px;
  background-size: cover;
  background-image: url("/static/champion/${props.name}.png");
`

  const Image = <ChampionImage
    id={`champion-${props.name}`}
    onMouseEnter={() => { props.onMouseEnter(props.name) }}
    onMouseLeave={props.onMouseLeave}
    alt={props.name}
  />

  return (
    <LotationChampion>
      <StatefulToolTip
        active={props.isTooltipActive}
        position="bottom"
        arrow="right"
        parent={Image}>
        <div>
          <h3>{props.championStore.champion.title}</h3>
          <p>{props.name}</p>
          <p>타입: {props.championStore.champion.partype}</p>
          <p>포지션: {props.championStore.champion.tags}</p>
          <p>{props.championStore.champion.lore}</p>
        </div>
      </StatefulToolTip>
      <ChampionName>
        {props.name}
      </ChampionName>
    </LotationChampion>
  );
};

export default lotationChampion;