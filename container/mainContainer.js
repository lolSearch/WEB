import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../components/atom/button';
import Input from '../components/atom/input';
import Router from 'next/router'
import Card from '../components/atom/card';
import Text from '../components/atom/text';
import Subtitle from '../components/atom/subtitle';
import logo from '../components/images/opgg.png';
import Image from '../components/atom/image';
import './mainContainer.scss';


//시간나면 챔피언 이름 idx로 바꿀것.
const mainContainer = (props) => {
  const { lolSearch } = props.store;

  useEffect(() => {
    getChampion()
      .then(() => {
        getLotation()
          .then(() => {
            let lotationChampions = lolSearch.lotationChampionIdx.map((item) => {
              lolSearch.champions.forEach((element) => {
                if (element.key == item) {
                  item = element.name;
                }
              });
              return item;
            })
            lolSearch.setLotation(lotationChampions);
          })
      })
  }, [])
  //로딩 구현 하기?

  const [summonerName, setSummonerName] = useState('');

  const getLotation = async () => {
    await lolSearch.getLotationChampion();
  }

  const getChampion = async () => {
    await lolSearch.getChampion();
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
          {lolSearch.lotationChampion !== undefined &&
            lolSearch.lotationChampion.map((name) => {
              return (
                <div className="champion-list-index" key={name}>
                  <Image
                    src={`/static/champion/${name}.png`}
                    alt={name}
                  />
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