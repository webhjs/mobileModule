const SET_HOME_DATA = "set_home_data";
const SET_HOME_CURRENT_DATA = "set_home_current_data";

const home = {
  namespaced: true,
  state: {
    homeData: [],
    homeCurrentData: {}
  },
  mutations: {
    [SET_HOME_DATA](state, homeData) {
      state.homeData = homeData;
    },
    [SET_HOME_CURRENT_DATA](state, homeCurrentData) {
      state.homeCurrentData = homeCurrentData;
    },
  },
  actions: {
    // 拉取用户信息
    async pullFileInfo({ commit }, filePath) {
      console.log(filePath)
      const finlytxt = await fetch(filePath).then((res) => {
        return res.status === 200 ? res.text() : "";
      });
      const matchArr = finlytxt.match(/.*/g);
      const keys = matchArr[0].split(/\s+/g);
      const result = matchArr
        .filter((f) => f)
        .reduce((pre, cur, index) => {
          if (index) {
            const curSplit = cur.split(/\s+/g);
            const obj = keys.reduce((pr, cu, inx) => {
              pr[cu] = curSplit[inx];
              return pr;
            }, {});
            pre.push(obj);
          }
          return pre;
        }, []);
      commit(SET_HOME_DATA, result)
    }
  },
  getters: {
    homeData: state => state.homeData,
    homeCurrentData: state => state.homeCurrentData,
  }
};

export default home;
