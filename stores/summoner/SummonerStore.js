import { observable, action} from 'mobx';
import SummonerRepository from './SummonerRepository';

class SummonerStore {
  @observable summoner = [];

  @action
  async getSummonerByName(summonerName) {
    try{
      const data = await SummonerRepository.getSummonerByName(summonerName)
      this.summoner = data.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default SummonerStore;