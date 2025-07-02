<template>
  <div>
    <div class="page_specButtons">
        <button class="button page_tasteButton page_activeApple" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M16.267 8.1h-.22l1.694-1.702a.74.74 0 0 0-.529-1.217.73.73 0 0 0-.505.177l-2.411 2.44V4.415a.74.74 0 0 0-.733-.737.74.74 0 0 0-.733.737v4.04a5.8 5.8 0 0 0-1.972-.353c-4.15 0-6.825 2.654-6.825 6.77 0 4.372 2.984 9.453 6.825 9.453a5.8 5.8 0 0 0 2.463-.554.58.58 0 0 1 .49 0c.772.363 1.613.551 2.464.554 3.834 0 6.817-5.081 6.817-9.454 0-4.114-2.675-6.77-6.824-6.77m-5.41 4.425c-2.132 0-2.426 1.128-2.426 2.345a.74.74 0 0 1-.214.522.73.73 0 0 1-1.252-.522c0-3.156 2.119-3.82 3.893-3.82a.73.73 0 0 1 .733.738.731.731 0 0 1-.733.737"></path></svg>청사과맛
        </button>
        <button class="button page_tasteButton false" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M21.212 11.776c-.98-1.68-3-3.528-7.085-3.017a5.3 5.3 0 0 0-.09-1.161c.527.144 1.09.217 1.661.217.939 0 1.9-.195 2.764-.584 1.23-.555 2.053-1.428 2.32-2.458a.49.49 0 0 0-.19-.52c-.947-.68-2.696-.765-4.455-.218-1.226.381-2.192.99-2.782 1.733a11 11 0 0 0-.626-1.008.5.5 0 0 0-.69-.125.49.49 0 0 0-.126.684c.892 1.279 1.264 2.325 1.221 3.46a11 11 0 0 0-1.47-.107c-3.202 0-4.882 1.619-5.749 3.105-1.755 3.01-1.34 7.688.924 10.428 1.404 1.699 3.31 2.393 5.451 2.018-2.414-1.7-3.51-4.548-3.717-6.835-.228-2.499.505-4.629 1.962-5.698a.5.5 0 0 1 .694.103.49.49 0 0 1-.104.688c-1.158.85-1.758 2.697-1.565 4.82.212 2.322 1.426 5.283 4.195 6.649 2.577.853 4.896.235 6.532-1.746 2.265-2.74 2.68-7.418.925-10.428"></path></svg>납작복숭아맛
        </button>
    </div>
    <div class="row grid-m page_specs" data-section="specs">
        <div class="col page_swiperWrapper">
            <swiper
              :modules="[Navigation, Pagination, Autoplay]"
              :pagination="{
                  clickable: true,
                  renderBullet: function (index, className) {
                  return '<span class=\'' + className + ' custom-bullet\'><span class=\'bullet-progress\'></span></span>';
                  },
              }"
              :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
              }"
              :speed="800"
              class="mySwiper page_mySwiper"
              @slideChange="onSlideChange"
              @swiper="onSwiper"
              >
              <swiper-slide>
                  <img src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_1.jpg&w=750&q=75"/>
              </swiper-slide>
              <swiper-slide>
                  <img src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_2.jpg&w=750&q=75"/>
              </swiper-slide>
              <swiper-slide>
                  <img src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_3.jpg&w=750&q=75"/>
              </swiper-slide>
              <swiper-slide>
                  <img src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_4.jpg&w=750&q=75"/>
              </swiper-slide>
              <swiper-slide>
                  <img src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_5.jpg&w=750&q=75"/>
              </swiper-slide>
          </swiper>
        </div>
        <div class="col product-b2 page_spec">
            <div class="row page_specWrapper">
                <div class="col page_specName">제품명</div>
                <div class="col page_specValue">상쾌환 스틱 ZERO 청사과맛</div>
            </div>
            <div class="row page_specWrapper">
                <div class="col page_specName">주요원료</div>
                <div class="col page_specValue">효모추출물(글루타치온 함유), 밀크씨슬추출분말, 아티초크추출분말 등</div>
            </div>
            <div class="row page_specWrapper">
                <div class="col page_specName">섭취방법</div>
                <div class="col page_specValue">음주 전 1포를 드시고, 음주 후 1포 더 드시면 좋습니다.</div>
            </div>
            <div class="row page_specWrapper">
                <div class="col page_specName">내용량</div>
                <div class="col page_specValue">18g</div>
            </div>
            <div class="row page_specWrapper">
                <div class="col page_specName">식품유형</div>
                <div class="col page_specValue">캔디류</div>
            </div><div class="row page_specWrapper">
                <div class="col page_specName">소비기한</div>
                <div class="col page_specValue">제조일로부터 18개월</div>
            </div>
            <div class="row page_specWrapper">
                <div class="col page_specName">유통전문판매원</div>
                <div class="col page_specValue">(주)삼양사</div>
            </div>
            <div class="row page_specWrapper">
                <div class="col page_specName">제조원</div>
                <div class="col page_specValue">(주)네추럴웨이 포천제2공장</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const swiperRef = ref(null)

const onSwiper = (swiper) => {
  swiperRef.value = swiper
  startProgressAnimation(0)
}

const onSlideChange = (swiper) => {
  // 모든 진행바 리셋
  const bullets = document.querySelectorAll('.custom-bullet .bullet-progress')
  bullets.forEach(bullet => {
    bullet.style.animation = 'none'
  })
  
  // 현재 활성 슬라이드의 진행바 애니메이션 시작
  setTimeout(() => {
    startProgressAnimation(swiper.activeIndex)
  }, 50)
}

const startProgressAnimation = (activeIndex) => {
  const activeBullet = document.querySelector(`.swiper-pagination-bullet:nth-child(${activeIndex + 1}) .bullet-progress`)
  if (activeBullet) {
    activeBullet.style.animation = 'progress 3s linear forwards'
  }
}

onMounted(() => {
  // CSS 애니메이션 추가
  const style = document.createElement('style')
  style.textContent = `
    @keyframes progress {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }
  `
  document.head.appendChild(style)
})
</script>


<style lang="scss" scoped>
@use '@/styles/contents3' as *;
</style>