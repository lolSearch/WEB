import config from '../../config/config.json'
import axios from 'axios';

class SummonerRepository {
  async getSummonerByName(summonerName) {
    try {
      let summonerUrl = `${config.RIOT_URL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${config.RIOT_API_KEY}`
      return await axios.get(summonerUrl);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new SummonerRepository();