import { observable, action} from 'mobx';
import lolSearchRepository from './lolSearchRepository';

//lotation Store,summoner store로 나눔
class lolSearchStore {
  @observable.ref lotationChampionIdx = [];
  @observable lotationChampion = [];
  @observable.ref summoner = [];
  @observable.ref champions = [];
  @observable loading = false;

  @action
  async getLotationChampion() {
    try{
      const {data} = await lolSearchRepository.getLotation();
      this.lotationChampionIdx = data.freeChampionIds;
    } catch(err) {
      console.log(err);
    }
  }

  @action
  setLotation(data) {
    this.lotationChampion = data;
  }

  getObjectToArray(data) {
    return Object.values(data)
  }

  @action
  async getChampion() {
    try{
      const {data} = await lolSearchRepository.getChampion();
      this.champions = this.getObjectToArray(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  //404는 닉네임의 소환사가 존재하지 않음
  @action
  async getSummonerByName(summonerName) {
    try{
      const data = await lolSearchRepository.getSummonerByName(summonerName)
      this.summoner = data.data;
    } catch (err) {
      console.log(err);
    }
  }

  @action
  isLoading() {
    this.loading = !this.loading;
  }
}

export default lolSearchStore;