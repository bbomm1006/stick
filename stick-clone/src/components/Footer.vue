<template>
    <div 
        class="floating-button-container floating-button-container--product"
        :class="{ 
            'floating-button-container--hide': isFooterVisible || scrollY < 1 
        }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <div class="floating-button">
            <div 
                class="text-balloon" 
                :style="{ 
                translate: 'none', 
                rotate: 'none', 
                scale: 'none', 
                opacity: isHovered ? 0 : 1, 
                transform: isHovered ? 'scale(0.5, 0.5)' : 'translate(0px, 0px)' 
                }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" class="text-balloon-triangle"><path fill="#FE3BAB" d="M10.232 15c-.77 1.333-2.694 1.333-3.464 0L.273 3.75c-.77-1.333.192-3 1.732-3h12.99c1.54 0 2.502 1.667 1.732 3z"></path></svg>
                <div class="text-balloon-text">상쾌환 쇼핑하러<br/>갈래?</div>
            </div>
            <div class="shopping">
                <a 
                    target="_blank" 
                    class="mall-link" 
                    href="#"
                    :style="{ 
                        translate: 'none', 
                        rotate: 'none', 
                        scale: 'none', 
                        transform: 'translate(0px, 0px)', 
                        opacity: isHovered ? 1 : 0 
                    }"
                    >
                    온라인 쇼핑몰
                </a>
                <a 
                    target="_blank" 
                    class="mall-link" 
                    href="#"
                    :style="{ 
                        translate: 'none', 
                        rotate: 'none', 
                        scale: 'none', 
                        transform: 'translate(0px, 0px)', 
                        opacity: isHovered ? 1 : 0 
                    }"
                    >
                    오프라인 쇼핑몰
                </a>
            </div>
            <div class="lf-player-container">
                <div 
                class="lottie-icon" 
                :class="{ 'lottie-icon--active': !isHovered }" 
                ref="lottieContainer1"
                ></div>
            </div>
            
            <div class="lf-player-container">
                <div 
                class="lottie-icon" 
                :class="{ 'lottie-icon--active': isHovered }" 
                ref="lottieContainer2"
                ></div>
            </div>
        </div>
        <div class="shopping-cart-container">
            <button class="icon-button shopping-cart"></button>
            <div class="shopping">
                <a class="mall-link contact-btn" href="/kr/contact/customer">문의하기</a>
                <a target="_blank" class="mall-link" href="https://smartstore.naver.com/qoneshop/products/10981677762">온라인 쇼핑몰</a>
                <a class="mall-link" href="https://map.naver.com/p/search/%ED%8E%B8%EC%9D%98%EC%A0%90">오프라인 쇼핑몰</a>
            </div>
        </div>
        <button class="icon-button top-btn" @click="scrollToTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.74 12 7m0 0 5 4.74M12 7v10"></path>
            </svg>
        </button>
    </div>
    <footer id="footer" class="grid-xl" ref="footer">
    <ul class="link-items">
        <li class="link-item"><div>개인정보처리방침</div></li><li class="link-item"><div>이용약관</div></li>
        <li class="link-item"><div>이메일무단수집거부</div></li>
        <li class="link-item"><a href="/kr/sitemap">사이트맵</a></li>
    </ul>
    <div class="footer-divider"></div>
    <div class="row footer-info-container">
        <div class="footer-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 177 55" class="footer-logo"><g clip-path="url(#logo_svg__a)"><path fill="#666464" d="M2.625 0c1.542.343 3.278.436 4.59 1.584.591.508 1.124 1.177 1.373 2.024-.156.036-.427-.15-.636-.134-2.058-.147-3.196-.755-3.95-2.044C3.594.853 3.46.692 3.337.555 3.08.273 2.628 0 2.628 0M13.12 10.225a2.067 2.067 0 0 0 2.074-2.066 2.07 2.07 0 0 0-2.075-2.067 2.066 2.066 0 1 0 0 4.132M5.447 19.578a2.577 2.577 0 0 0 2.37-2.763 2.573 2.573 0 0 0-2.77-2.363 2.58 2.58 0 0 0-2.371 2.763 2.58 2.58 0 0 0 2.773 2.364"></path><path fill="#666464" d="M17.459 13.08a8.6 8.6 0 0 0-1.068-4.172 3.36 3.36 0 0 1-6.63-.749c0-1.453.925-2.686 2.222-3.151a8.7 8.7 0 0 0-3.248-.625c-1.545 0-2.994.4-4.256 1.099h3.354v6.35H6.512V9.255H2.621V8.172h3.891V6.558H2.956A8.66 8.66 0 0 0 0 13.081c0 1.745.514 3.367 1.397 4.726a6 6 0 0 1-.067-.491c-.171-2.156 1.447-4.039 3.615-4.21a3.93 3.93 0 0 1 4.22 3.607A3.9 3.9 0 0 1 7.97 19.84l1.645.673-.643 1.033-2.112-.963c-.4.186-.842.3-1.314.334a3.3 3.3 0 0 1-.618-.004 8.7 8.7 0 0 0 3.804.867 8.73 8.73 0 0 0 4.454-1.215v-5.607l-1.794 1.143v-1.326l2.064-1.337h1.227v6.003a8.66 8.66 0 0 0 2.774-6.363M31.741 12.79h-2.254c.387-.513.711-1.262.975-2.257q.392-1.494.44-2.682a.8.8 0 0 0-.087-.423q-.099-.179-.395-.194h-7.237l-.616-.004h-1.345c0 .044.018.083.035.117l.53.595c.102.092.18.156.243.177q.087.037.32.037h6.432q0 .391-.02.806-.026.405-.051.828a3.4 3.4 0 0 1-1.186.247q-.616.025-1.962.024h-3.13c-.117 0-.227 0-.32-.006h-1.13q.01.073.068.162l.542.636q.074.077.153.107.077.044.237.05h3.916c.702 0 1.255-.038 1.675-.118a3.8 3.8 0 0 0 1.067-.356q-.081.752-.185 1.364-.092.61-.167.887h-8.463c.008.04.03.085.053.131l.366.52a.7.7 0 0 0 .219.205c.067.045.19.072.342.072h2.274v5.48c0 .128.029.213.082.273q.09.076.271.076h.326c.28 0 .521-.123.706-.364.183-.24.285-.508.285-.81v-4.657h2.497v5.48c0 .129.024.213.082.273q.087.075.274.076h.292c.28 0 .513-.122.71-.363q.278-.358.277-.81v-4.657h2.86q.64.052.64-.435c0-.324-.213-.493-.64-.493M34.892 11.052c.591.423 1.324.635 2.18.635q1.284-.001 2.179-.643c.599-.426.893-.982.893-1.653 0-.672-.294-1.24-.893-1.662-.597-.423-1.327-.633-2.179-.633s-1.589.207-2.18.616c-.599.422-.896.976-.896 1.679 0 .702.297 1.239.896 1.661m1.25-2.692c.281-.268.59-.398.93-.398s.65.131.938.398c.285.262.428.608.428 1.029s-.143.767-.428 1.028c-.29.26-.597.385-.938.385s-.649-.13-.93-.399q-.428-.392-.426-1.014c0-.415.141-.768.425-1.029M35.984 15.003c0 .133.013.22.043.273q.054.075.235.074h.72c.282 0 .49-.079.634-.249q.212-.248.213-.704v-1.221h.467c.931 0 1.66-.07 2.194-.2q.797-.204 1.26-.493c.165-.107.226-.218.202-.342-.031-.12-.14-.155-.351-.104a6.7 6.7 0 0 1-1.212.189c-.432.027-1.186.04-2.252.04h-3.681q-.189 0-.337-.003h-1.37a.4.4 0 0 0 .045.12l.427.534c.085.085.163.147.243.192.09.045.237.067.456.067h2.06v1.829z"></path><path fill="#666464" d="M40.162 14.049h-1.091v.02a.46.46 0 0 0 .102.227l.41.508c.056.065.101.108.147.125a.5.5 0 0 0 .16.024h2.475v1.091a.6.6 0 0 0 .044.271c.035.054.109.077.231.077h.624c.281 0 .491-.107.64-.323.143-.219.209-.476.209-.775v-8.01c0-.03-.01-.078-.028-.154q-.029-.106-.254-.135h-1.188c-.149.02-.232.062-.253.135a.7.7 0 0 0-.024.153v6.772h-2.09c-.038 0-.08 0-.112-.005M43.803 18.744h-5.137c-.367 0-.602-.067-.694-.2-.097-.137-.145-.364-.155-.677V16.22q-.001-.23-.268-.332h-1.31c-.178.07-.263.177-.263.327l-.007 1.987q.001.805.505 1.066.511.257.889.258h6.439c.354 0 .533-.125.533-.386q-.002-.392-.533-.393"></path><path fill="#003C8A" d="M105.786 28.382h5.696V6.464H91.517v5.083h14.269v5.204h-14.27v4.728h14.27zM124.519 22.129h-2.85V5.797h-5.495v37.138h5.495V27.287h2.85v15.648h5.304V5.797h-5.304z"></path><path fill="#003C8A" d="M102.225 26.611h-5.89v8.568h-8.196v4.985h25.877v-4.985h-11.791zM160.972 35.043h-10.725v-3.208c4.383-1.159 7.315-4.61 7.315-8.639 0-2.422-1.063-4.714-2.995-6.45-1.916-1.725-4.43-2.675-7.079-2.675-5.607 0-10.17 4.094-10.17 9.125 0 3.929 2.819 7.378 7.034 8.633v3.213h-10.138V40.2h26.755v-5.157zm-13.483-15.81c2.31 0 4.189 1.779 4.189 3.963s-1.879 3.88-4.189 3.88-4.283-1.704-4.283-3.88c0-2.175 1.921-3.962 4.283-3.962M159.291 7.462h-8.672V1.876h-6.452v5.586h-8.33v5.245h23.454zM169.826 22.136V6.313h-5.886v36.711h5.886v-15.73h6.852v-5.158zM150.919 43.01h-5.884v10.916h24.602v-5.158h-18.718zM82.344 6.372h-5.9v27.789h5.9V21.963h5.568v-5.155h-5.568zM70.148 29.524l4.577-3.59L60.228 5.93 45.696 25.919l4.578 3.599 9.938-13.257zM70.65 35.186c-6.07 0-11.01 4.439-11.01 9.895S64.578 55 70.65 55c6.07 0 11.009-4.45 11.009-9.92 0-5.471-4.938-9.896-11.01-9.896m0 14.74c-2.979 0-5.312-2.128-5.312-4.847s2.333-4.826 5.311-4.826c2.979 0 5.226 2.076 5.226 4.826s-2.247 4.847-5.226 4.847"></path></g><defs><clipPath id="logo_svg__a"><path fill="#fff" d="M0 0h176.678v55H0z"></path></clipPath></defs></svg>
            <ul class="footer-address">
                <li class="address-item">
                    (주) 삼양사: 경기도 성남시 분당구 판교로 295<span class="address-divider"></span><span>사업자 등록번호: 781-85-00412</span><span class="address-divider"></span><span>고객문의 전화번호 : 080-023-3399</span><span class="address-divider"></span>상쾌환 유통전문판매원:㈜삼양사, 제조원:㈜네추럴웨이, 이앤에스㈜<span class="address-divider"></span>상쾌환 스틱 샤인머스캣맛, 망고맛 / 상쾌환 스틱 ZERO 청사과맛, 납작복숭아맛 유통전문판매원 ㈜삼양사, 제조원 ㈜네추럴웨이 포천제2공장<span class="address-divider"></span>상쾌환 BOOSTER / 상쾌환 BOOSTER ZERO 유통전문판매원:㈜삼양사, 제조원:㈜네추럴웨이 포천제2공장
                </li>
                <li>
                    <div>* 본 제품은 건강기능식품이 아닙니다.</div>
                    <div>* 과도한 음주는 건강을 해칩니다.</div>
                </li>
                <li class="footer-copyright">COPYRIGHT (C) 2024 SAMYANG CORPORATION. ALL RIGHTS RESERVED.</li>
            </ul>
        </div>
        <div class="footer-socials-wrapper">
            <div class="footer-socials">
                <button class="icon-button footer-social footer-instagram"><a target="_blank" href="https://www.instagram.com/sangkwaehwan/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M7.2 5A2.2 2.2 0 0 0 5 7.2v9.6A2.2 2.2 0 0 0 7.2 19h9.6a2.2 2.2 0 0 0 2.2-2.2V7.2A2.2 2.2 0 0 0 16.8 5zM3 7.2A4.2 4.2 0 0 1 7.2 3h9.6A4.2 4.2 0 0 1 21 7.2v9.6a4.2 4.2 0 0 1-4.2 4.2H7.2A4.2 4.2 0 0 1 3 16.8z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M12 9.444a2.556 2.556 0 1 0 0 5.111 2.556 2.556 0 0 0 0-5.111m-4.555 2.555a4.556 4.556 0 1 1 9.111 0 4.556 4.556 0 0 1-9.11 0M16.8 6.2a1 1 0 0 1 1 1v.017a1 1 0 1 1-2 0V7.2a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg></a></button>
                <button class="icon-button footer-social footer-youtube"><a target="_blank" href="https://www.youtube.com/channel/UCMqZKRBemgZ0_1uLT2yAF9w?view_as=subscriber"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M21.019 5.73c.312.321.534.72.643 1.155.29 1.612.431 3.248.421 4.886a26.6 26.6 0 0 1-.421 4.812 2.55 2.55 0 0 1-1.779 1.834c-1.576.421-7.883.421-7.883.421s-6.307 0-7.883-.421a2.55 2.55 0 0 1-1.779-1.76 26.6 26.6 0 0 1-.421-4.886c-.008-1.626.133-3.25.421-4.85a2.55 2.55 0 0 1 1.779-1.833C5.693 4.667 12 4.667 12 4.667s6.307 0 7.883.385c.432.122.823.356 1.136.677m-5.81 6.04-5.272 2.998V8.773z" clip-rule="evenodd"></path></svg></a></button>
                <button class="icon-button footer-social footer-twitter"><a target="_blank" href="https://x.com/hitthebone"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#000" stroke="#000" stroke-width="0.035" d="m11.08 14.573-4.97 5.68H3.39l6.425-7.343.01-.01-.01-.012-6.78-8.87h5.651l3.926 5.19.013.018.014-.016 4.544-5.192h2.714l-6.005 6.862-.01.011.009.011 7.074 9.352h-5.51l-4.348-5.68-.013-.018zm5.11 4.058.006.007h1.573l-.021-.028L7.876 5.554l-.005-.007H6.183l.022.028z"></path></svg></a></button>
            </div>
            <div>
                <div class="dropdown footer-dropdown">
                    <div class="dropdown-header ">
                        <span>Family site</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 10-5 5-5-5"></path></svg>
                    </div>
                    <div class="dropdown-list " data-lenis-prevent="true">
                        <a target="_blank" href="https://www.samyangcorp.com/kr/index"><div class="dropdown-item ">삼양사</div></a>
                        <a target="_blank" href="https://www.samyang.com/kr/index"><div class="dropdown-item ">삼양홀딩스</div></a>
                        <a target="_blank" href="https://www.samyangcorp.com/kr/food-business/consumption-goods"><div class="dropdown-item ">큐원</div></a>
                        <a target="_blank" href="https://www.serveq.co.kr"><div class="dropdown-item ">서브큐</div></a>
                        <a target="_blank" href="https://www.aboutmeshop.com"><div class="dropdown-item ">어바웃미</div></a>
                        <a target="_blank" href="https://smartstore.naver.com/qoneshop"><div class="dropdown-item ">큐원 스마트 스토어</div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
</template>

<script>
import lottie from 'lottie-web'
import charAnimation from '@/assets/char.json'
import charOnAnimation from '@/assets/char_on.json'

export default {
  data() {
    return {
      isFooterVisible: false,
      observer: null,
      shouldLoadLottie: false,
      lottieAnimation1: null,
      lottieAnimation2: null,
      scrollY: 0,
      isHovered: false // 마우스 오버 상태 추가
    };
  },
  mounted() {
    this.setupFooterObserver();
    this.setupScrollListener();
    
    // DOM 완전 렌더링 후 Lottie 로드
    this.$nextTick(() => {
      this.shouldLoadLottie = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.loadLottieAnimations();
        }, 100);
      });
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.lottieAnimation1) {
      this.lottieAnimation1.destroy();
    }
    if (this.lottieAnimation2) {
      this.lottieAnimation2.destroy();
    }
    // 스크롤 리스너 제거
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // 마우스 오버 이벤트 핸들러 추가
    handleMouseEnter() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    setupFooterObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isFooterVisible = entry.isIntersecting;
          });
        },
        {
          threshold: 0.1
        }
      );
      if (this.$refs.footer) {
        this.observer.observe(this.$refs.footer);
      }
    },
    setupScrollListener() {
      this.handleScroll = () => {
        this.scrollY = window.scrollY;
      };
      window.addEventListener('scroll', this.handleScroll);
    },
    loadLottieAnimations() {
      console.log('Lottie 애니메이션들 로드 시작');
      console.log('lottieContainer1 ref:', this.$refs.lottieContainer1);
      console.log('lottieContainer2 ref:', this.$refs.lottieContainer2);
      
      // 첫 번째 애니메이션 로드
      this.createLottieAnimation(
        this.$refs.lottieContainer1, 
        charAnimation, 
        'lottieAnimation1'
      );
      
      // 두 번째 애니메이션 로드
      this.createLottieAnimation(
        this.$refs.lottieContainer2, 
        charOnAnimation, 
        'lottieAnimation2'
      );
    },
    createLottieAnimation(container, animationData, propertyName) {
      try {
        // 기존 애니메이션이 있다면 제거
        if (this[propertyName]) {
          this[propertyName].destroy();
        }
        
        this[propertyName] = lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData
        });
        
        console.log(`${propertyName} 로드 완료`);
      } catch (error) {
        console.error(`${propertyName} 초기화 에러:`, error);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@use '@/styles/footer' as *;
</style>