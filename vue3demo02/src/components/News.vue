<template>
  <div>
    <h1>新闻页({{$route.params.id}})</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.getSum(4,6)

    console.log(this.$route);
  },
  methods: {
    getSum(a,b) {
      while(b!==0) {
        const carry = (a&b) << 1;
        a = a ^ b;
        b = carry
      }
      return a
    }
  }
}
</script>