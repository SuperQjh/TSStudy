import Mock from 'mockjs'

// 设置一下模拟返回数据的事件

Mock.setup({
  timeout: '200-600'
})
Mock.mock(
  "/user/userinfo",
  'get',
  (req, res) => {
    console.log(req);
    console.log(res);
    return {
      username: "老陈",
      type: '帅'
    }
  }
)

Mock.mock(
  /\/account.*/,
  'get',
  (req, res) => {
    console.log(req);
    console.log(res);
    return {
      info: '登陆成功'
    }
  }
)