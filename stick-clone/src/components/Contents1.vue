<template>
    <div class="page_stickyItem">
        <div class="product-h2 page_keyVisualContainer">
            <div class="page_masking">
                <div class="masking-text" style="">MY UNIQUE<br><span> ROUTINE</span></div>
            </div>
        </div>        
        <div class="product-h2 page_clipPathContainer" style="">
            <div class="masking-text">MY UNIQUE<br><span> ROUTINE</span></div>
        </div>

        <div class="page_blueBox" ></div>

        <div class="page_packetView" ref="packetView">
            <div ref="packetWrap">
                <img src="/images/stick_01.png" class="stick_01" ref="stick01" />
                <img src="/images/stick_02.png" class="stick_02" />
                <img src="/images/stick_03.png" class="stick_03" />
                <img src="/images/stick_04.png" class="stick_04" ref="stick04" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

// 요소 참조용
const packetView = ref(null)
const packetWrap = ref(null)
const stick01 = ref(null)
const stick04 = ref(null)

onMounted(() => {
  // 스크롤 애니메이션 설정 함수를 먼저 정의
  function setupScrollAnimations() {
    console.log('setupScrollAnimations 함수 실행됨!') // 디버깅용
    
    // ScrollTrigger 새로고침
    ScrollTrigger.refresh()
    
    // 페이지에 충분한 높이 확보 (스크롤할 수 있도록)
    document.body.style.height = '300vh'
    
    // 초기 상태 설정
    gsap.set('.page_blueBox', {
      opacity: 0,
      scale: 1,
      right: '0',
      width: '50%',
      height: '100%',
      borderRadius: '0%'
    })
    
    // 1단계: clipPathContainer 스크롤 애니메이션
    ScrollTrigger.create({
      trigger: '.page_stickyItem',
      start: 'bottom center',
      end: 'bottom+=300px center',
      scrub: 1,
      markers: true,
      id: '1단계',
      onUpdate: (self) => {
        console.log('1단계 progress:', self.progress)
      },
      animation: gsap.timeline()
        .to('.page_clipPathContainer', {
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
          ease: 'none'
        })
        .to('.page_clipPathContainer .masking-text', {
          opacity: 0,
          ease: 'none'
        }, 0)
        
    })

    // 2단계: 스크롤 중간에 즉시 전환
    ScrollTrigger.create({
      trigger: '.page_stickyItem',
      start: 'bottom+=300px center',
      end: 'bottom+=500px center',
      scrub: 1,
      markers: true,
      id: '2단계-즉시전환',
      onUpdate: (self) => {
        console.log('2단계 progress:', self.progress)
        
        // 스크롤 진행도가 50%를 넘으면 즉시 전환
        if (self.progress > 0.5) {
          gsap.set('.page_clipPathContainer', { opacity: 0 })
          gsap.set('.page_packetView', { opacity: 0 })
          gsap.set('.page_blueBox', { 
            opacity: 1,
            scale: 1,
            right: '0',
            width: '50%',
            height: '100%',
            borderRadius: '0%'
          })
        } else {
          gsap.set('.page_clipPathContainer', { opacity: 1 })
          gsap.set('.page_packetView', { opacity: 1 })
          gsap.set('.page_blueBox', { opacity: 0 })
        }
      }
    })

    // 3단계: blueBox 최종 형태로 변환
    ScrollTrigger.create({
      trigger: '.page_stickyItem',
      start: 'bottom+=500px center',
      end: 'bottom+=800px center',
      scrub: 1,
      markers: true,
      id: '3단계',
      onUpdate: (self) => {
        console.log('3단계 progress:', self.progress)
      },
      animation: gsap.to('.page_blueBox', {
        scale: 0.65,
        right: '1%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        ease: 'none'
      })
    })

    
  }

  // ▶ 스크롤 막기
  document.documentElement.classList.add('no-scroll')
  document.body.classList.add('no-scroll')

  // Lenis 스무스 스크롤
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
  })

  const raf = (time) => {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // 기존 애니메이션 타임라인
  const tl = gsap.timeline({
    onComplete: () => {
      console.log('기본 애니메이션 완료! 스크롤 애니메이션 시작') // 디버깅용
      
      // ▶ 애니메이션 끝나면 스크롤 허용
      document.documentElement.classList.remove('no-scroll')
      document.body.classList.remove('no-scroll')
      
      // 약간의 지연 후 스크롤 애니메이션 설정
      setTimeout(() => {
        setupScrollAnimations()
      }, 100)
    }
  })

  // 1단계: .page_masking 등장
  tl.to('.page_masking .masking-text', {
    y: 0,
    duration: 1,
    ease: 'power2.out',
  })

  // 2단계: clipPath 열림
  tl.to('.page_clipPathContainer', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 1,
    ease: 'power2.out',
  }, '+=0.3')  

  // 3단계: masking-text 아래로 사라짐
  tl.to('.page_masking .masking-text', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut',
  }, '+=0.3')

  // 4단계: packetWrap 등장
  tl.to(packetWrap.value, {
    y: 0,
    duration: 1,
    ease: 'power3.out',
  })

  // 5단계: 스틱 이미지 회전 + 위치 이동
  tl.to(stick01.value, {
    rotate: -20,
    right: '-5%',
    duration: 1,
    ease: 'power2.out',
  }, '+=0.1')

  tl.to(stick04.value, {
    rotate: 20,
    left: '-5%',
    duration: 1,
    ease: 'power2.out',
  }, '<')
})
</script>

<style lang="scss" scoped>
@use '@/styles/contents1' as *;
</style>