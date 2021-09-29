<template>
  <!-- <HelloWorld /> -->
  <div>
    <div v-for="(item, i) in store.state.heroList" :key="i">
      <div>{{ item.cname }} ===> {{ item.title }}</div>
    </div>
    <div>
      <h1>{{ store.state.message }}</h1>
    </div>
  </div>
</template>

<script>
import store from './store'
import axios from 'axios'

export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  // },
  provide: {
    store,
  },
  setup() {
    // let api = 'https://api.apiopen.top/getJoke?page=2&count=10&type=video'
    // 遇到跨域问题可以配置代理来解决
    // let api = '/api/web201605/js/herolist.json'

    let api = '/user/userinfo'

    // fetch(api)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     store.setJokeList(result.result)
    //     console.log(result)
    //   })
    // axios.get(api).then((result) => {
    //   store.setHeroList(result.data)
    //   console.log(result.data[0])
    // })
    axios.get(api).then((result) => {
      store.setMessage(result.data.username)
    })

    axios.get('/account?name=laocheng&password=123456').then((result) => {
      console.log(result.data)
    })

    return {
      store,
    }
  },
}
</script>
