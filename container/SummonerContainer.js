import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import {inject,observer} from 'mobx-react';
import Image from '../components/atom/image';

const SummonerContainer = (props) => {
  const router = useRouter();
  const {summonerStore} = props.store;

  useEffect(() => {
    router.query = queryString.parse(router.asPath.split(/\?/)[1]);

    summonerStore.getSummonerByName(router.query.summoner);
  },[])
  
  const summoner = summonerStore.summoner;

  return (
    <div>
      <Image
        className="icon"
        src={`http://ddragon.leagueoflegends.com/cdn/9.22.1/img/profileicon/${summoner.profileIconId}.png`}/>
      <h1>{summoner.summonerLevel}</h1>
      <p>{summoner.name}</p>
    </div>
  );
};

export default inject('store')(observer(SummonerContainer));