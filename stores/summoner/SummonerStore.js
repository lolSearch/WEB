import { observable, action } from 'mobx';
import SummonerRepository from './SummonerRepository';

//matchStore 만드는게 낫지 않을까.
class SummonerStore {
  @observable.ref summoner = [];
  @observable.ref summonerLank = [];
  @observable.ref matches = [];
  // @observable.ref matchesStat = [];
  @observable loading = false;

  @action
  async getSummonerByName(summonerName) {
    try {
      const data = await SummonerRepository.getSummonerByName(summonerName);
      console.log(data.data);
      this.summoner = data.data;
    } catch (err) {
      console.log(err);
    }
  }

  @action
  async getSummonerLank(summonerId) {
    try {
      const data = await SummonerRepository.getSummonerLank(summonerId);

      data.data.forEach((lank, index, array) => {
        if (lank.queueType === "RANKED_TFT") {
          array.splice(index, 1);
        }
      })

      if (data.data.length === 0) {
        data.data = [{ tier: "UNRANKED" },
        { tier: "UNRANKED" }];
      } else if (data.data.length === 1) {
        data.data = [
          ...data.data,
          { tier: "UNRANKED" }];
      }

      this.summonerLank = data.data;
      this.loading = true;
    } catch (err) {
      console.log(err);
    }
  }

  @action
  async getSummonerMatches(summonerAccountId) {
    try {
      const data = await SummonerRepository.getSummonerMatches(summonerAccountId)
      let matches = data.data.matches.splice(0, 5);

        let match = matches.map(async (match) => {
            const data =  await SummonerRepository.getSummonerMatchesStat(match.gameId);
            data.data = {
              ...data.data,
              gameDuration : this.getMiniute(data.data.gameDuration)
            };

            return({
              ...match, ...data.data
            });
          });

          Promise.all(match).then((completed) => {
            this.matches = completed;
          })
    } catch (err) {
      console.log(err);
    }
  }

  async getSummonerMatchesStat(gameId) {
    try {
      const data = await SummonerRepository.getSummonerMatchesStat(gameId);

      return data.data;
    } catch (err) {
      console.log(err);
    }
  }

  getMiniute = (second) => {
    return Math.floor(second / 60);
  }

  getWinRatio(value1, value2) {
    return Math.floor(value1 / (value1 + value2) * 100);
  }
}

export default SummonerStore;