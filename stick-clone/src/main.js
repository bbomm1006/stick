import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// 가로 리사이징 감지 후 새로고침
let previousWidth = window.innerWidth
let resizeTimeout

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth

  if (previousWidth !== currentWidth) {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      location.reload()
    }, 500) // 0.5초 후 새로고침
  }

  previousWidth = currentWidth
})
