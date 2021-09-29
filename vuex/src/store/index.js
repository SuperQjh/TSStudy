import { reactive } from 'vue'

const store = {
  state: reactive({
    message: 'helloWorld!',
    jokeList: [],
    heroList: []
  }),
  setMessage(value) {
    this.state.message = value
  },
  setJokeList(list) {
    this.state.jokeList = list
  },
  setHeroList(list) {
    this.state.heroList = list
  }
}

export default store