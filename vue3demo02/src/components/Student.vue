<template>
  <div>学生</div>
  <div>姓名：{{name}}</div>
  <div>班级：{{classname}}</div>
</template>

<script>
  import {inject} from 'vue'
  export default{
    setup(props, content) {
      const student = inject('student')
      return {...student}
    },
  }


</script>