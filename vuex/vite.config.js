module.exports = {
    proxy: {
      '/api': {
        target: 'https://pvp.qq.com/',
        changeOrigin: true, // 配置是否允许跨域
        rewrite:path => path.replace(/^\/api/, '')
      }
    }
}