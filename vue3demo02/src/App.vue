<template>
  <div @click="addCount">{{count}}</div>
  <div>{{`姓名${per.name}, 年纪${per.age}, 性别${per.sex}`}}</div>
  <student/>
</template>

<script>
import {ref, reactive, provide} from 'vue';
import Student from './components/Student.vue'

export default {
  components: {
    Student
  },
  setup() {
  const count = ref(1)
  function addCount() {
  count.value++
}
const per = reactive({
  name: '张三',
  age: 23,
  sex: '男'
})
const student = reactive({
  name: '小米',
  classname: '三年级一班'
})
provide('student', student)
  return {per}
}
}


</script>
