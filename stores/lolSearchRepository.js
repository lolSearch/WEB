import config from '../config/config.json'
import axios from 'axios';

class lolSearchRepository {
  async getLotation() {
    try {
      return await axios.get(`${config.RIOT_URL}/lol/platform/v3/champion-rotations?api_key=${config.RIOT_API_KEY}`);
    } catch (err) {
      console.log(err);
    }
  }

  async getSummonerByName(summonerName) {
    try {
      let summonerUrl = `${config.RIOT_URL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${config.RIOT_API_KEY}`
      return await axios.get(summonerUrl);
      // let summonerUrl= `http://localhost:8000/summoner?api_key=${config.RIOT_API_KEY}`;
      // return await axios.get(summonerUrl);
    } catch (err) {
      console.log(err);
    }
  }

  async getChampion() {
    try{
      let championUrl= `http://ddragon.leagueoflegends.com/cdn/9.22.1/data/ko_KR/champion.json`;
      return await axios.get(championUrl);
    } catch (err) {
      console.log(err);
    }
  }

}

export default new lolSearchRepository();