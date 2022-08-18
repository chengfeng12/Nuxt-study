export const state = () => ({
  count: 0
})

export const mutations = {
  increment(state) {
    state.count++;
  },
} 

export const actions = {
  nuxtServerInit(store, context) {
    console.log("nuxtServerInit");
  },
} 