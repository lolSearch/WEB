import { observable, action} from 'mobx';
import ChampionRepository from './ChampionRepository';

class ChampionStore {
  @observable lotationChampionIdx = [];
  @observable lotationChampion = [];
  @observable champions = [];
  @observable champion = [];
  @observable loading = false;

  @action
  async getLotationChampion() {
    try{
      const {data} = await ChampionRepository.getLotation();
      this.lotationChampionIdx = data.freeChampionIds;
    } catch(err) {
      console.log(err);
    }
  }

  @action
  async getChampion(name) {
    try{
      let id = this.getChampionId(name);
      const {data} = await ChampionRepository.getChampion(id);
      console.log(data.data[id]);
      this.champion = data.data[id];
    } catch(err) {
      console.log(err);
    }
  }

  @action
  setLotation(data) {
    this.lotationChampion = data;
  }

  getChampionId(championName){
    this.champions.forEach(champion => {
      if(champion.name == championName)
        championName = champion.id;
    });

    return championName;
  }


  getObjectToArray(data) {
    return Object.values(data)
  }

  @action
  async getChampions() {
    try{
      const {data} = await ChampionRepository.getChampions();
      this.champions = this.getObjectToArray(data.data);
    } catch (err) {
      console.log(err);
    }
  }
}

export default ChampionStore;