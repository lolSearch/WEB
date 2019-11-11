import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../components/atom/button';
import Input from '../components/atom/input';
import Router from 'next/router'
import {StatefulToolTip } from 'react-portal-tooltip';
import Card from '../components/atom/card';
import Text from '../components/atom/text';
import Subtitle from '../components/atom/subtitle';
import logo from '../components/images/opgg.png';
import Image from '../components/atom/image';
import './mainContainer.scss';


//시간나면 챔피언 이름 idx로 바꿀것.
const mainContainer = (props) => {
  const { championStore } = props.store;

  useEffect(() => {
    getChampions()
      .then(() => {
        getLotation()
          .then(() => {
            let lotationChampions = championStore.lotationChampionIdx.map((item) => {
              championStore.champions.forEach((element) => {
                if (element.key == item) {
                  item = element.name;
                }
              });
              return item;
            })
            championStore.setLotation(lotationChampions);
          })
      })
  }, [])
  //로딩 구현 하기?

  const [summonerName, setSummonerName] = useState('');
  const [isTooltipActive, setIsTooltipActive] = useState(false);

  const toggleTooltip = (name) => {
    if(typeof name === 'string'){
      getChampion(name);
    }
    setIsTooltipActive(!isTooltipActive);
  }

  const getLotation = async () => {
    await championStore.getLotationChampion();
  }

  const getChampions = async () => {
    await championStore.getChampions();
  }

  const getChampion = async (championName) => {
    await championStore.getChampion(championName);
  }

  const handleSearch = () => {
    Router.push({
      pathname: '/summoner',
      query: { summoner: summonerName }
    });
  }

  const handleChange = (e) => {
    setSummonerName(e.target.value);
  }

  return (
    <div>
      <Card className="flex middle align-center column blue">
        <Image className="logo ptop32" src={logo} />
        <div className="summoner-form">
          <input
            className="summoner-form-input"
            onChange={handleChange}
            value={summonerName}
            placeholder="소환사명"/>
          <button
            className="summoner-form-button"
            onClick={handleSearch}>
            .GG
          </button>
        </div>
      </Card>
      <div className="champion">
        <div className="champion-subtitle">
          <h2>이번주 로테이션</h2>
        </div>
        <div className="champion-list">
          {championStore.lotationChampion !== undefined &&
            championStore.lotationChampion.map((name) => {
              const Img = <img
                          id={`champion-${name}`}
                          src={`/static/champion/${name}.png`}
                          onMouseEnter={() => {toggleTooltip(name)}}
                          onMouseLeave={toggleTooltip}
                          alt={name}
                        />; 
              return (
                <div className="champion-list-index" key={name}>                 
                  <StatefulToolTip
                    active={isTooltipActive} 
                    position="bottom" 
                    arrow="right" 
                    parent={Img}>
                      <div>
                        <p>{championStore.champion.title}</p>
                        <p>{name}</p>
                        <p>타입: {championStore.champion.partype}</p>
                        <p>포지션: {championStore.champion.tags}</p>
                        <p>{championStore.champion.lore}</p>
                      </div>
                  </StatefulToolTip>
                  <Text>
                    {name}
                  </Text>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default inject('store')(observer(mainContainer));