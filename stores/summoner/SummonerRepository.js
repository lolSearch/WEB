import config from '../../config/config.json'
import axios from 'axios';

class SummonerRepository {
  async getSummonerByName(summonerName) {
    try {
      let summonerUrl = `${config.RIOT_URL}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${config.RIOT_API_KEY}`;
      return await axios.get(summonerUrl);
    } catch (err) {
      console.log(err);
    }
  }

  async getSummonerLank(summonerId) {
    try {
      let summonerUrl = `${config.RIOT_URL}/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${config.RIOT_API_KEY}`;
      return await axios.get(summonerUrl);
    } catch (err) {
      console.log(err);
    }
  }

  async getSummonerMatches(summonerAccountId) {
    try {
      let summonerUrl = `${config.RIOT_URL}/lol/match/v4/matchlists/by-account/${summonerAccountId}?api_key=${config.RIOT_API_KEY}`;
      return await axios.get(summonerUrl);
    } catch (err) {
      console.log(err);
    }
  }

  async getSummonerMatchesStat(gameId){
    try {
      let summonerUrl = `${config.RIOT_URL}/lol/match/v4/matches/${gameId}?api_key=${config.RIOT_API_KEY}`;
      return await axios.get(summonerUrl);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new SummonerRepository();