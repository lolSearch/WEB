import config from '../../config/config.json'
import axios from 'axios';

class ChampionRepository {
  async getLotation() {
    try {
      return await axios.get(`${config.RIOT_URL}/lol/platform/v3/champion-rotations?api_key=${config.RIOT_API_KEY}`);
    } catch (err) {
      console.log(err);
    }
  }

  async getChampions() {
    try {
      let championUrl = `http://ddragon.leagueoflegends.com/cdn/9.22.1/data/ko_KR/champion.json`;
      return await axios.get(championUrl);
    } catch (err) {
      console.log(err);
    }
  }

  async getChampion(championName) {
    try {
      let championUrl = `http://ddragon.leagueoflegends.com/cdn/9.22.1/data/ko_KR/champion/${championName}.json`;
      return await axios.get(championUrl);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ChampionRepository();