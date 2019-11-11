import SummonerStore from './summoner';
import ChampionStore from './champion';

const stores = {
  championStore: new ChampionStore(),
  summonerStore: new SummonerStore(),
}

export default stores;