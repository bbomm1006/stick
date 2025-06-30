<template>
    <div class="page_moreProducts">
        <div class="grid-m page_moreProductsTitle">
            <span class="product-t2-b">상쾌환 </span>
            <span class="product-t2-sb page_title">제품 보러가기</span>
        </div>

        <div class="page_moreProductsSwiper">            
            <swiper
                :modules="[Navigation, Pagination]"
                :spaceBetween="30"
                :breakpoints="{
                0: {
                    slidesPerView: 1.5
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
                }"
                class="mySwiper"
            >
                <swiper-slide>
                    <div class="figure-controller">
                        <a 
                            class="figure" 
                            href="/kr/product/sangkwaehwan"
                            @mouseenter="() => setHoverState(0, true)"
                            @mouseleave="() => handleMouseLeave(0)"
                            @mousemove="(e) => handleMouseMove(e, 0)"
                        >
                            <div 
                                class="figure-img-card page_figureImageCard " 
                                :style="{ 
                                    background: hoverStates[0] ? 'rgb(21,178,245)' : 'rgb(255, 255, 255)',
                                    transition: 'background 0.3s ease'
                                }"
                            >
                                <div 
                                    class="figure-parallax-container" 
                                    :style="{ 
                                        translate: 'none', 
                                        rotate: 'none', 
                                        scale: 'none', 
                                        transform: getParallaxTransform(0),
                                        transition: hoverStates[0] ? 'none' : 'transform 0.3s ease-out'
                                    }"
                                >
                                    <img alt="more products" loading="lazy" width="854" height="848" decoding="async" data-nimg="1" class="figure-img" src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fmore_products_1.png&w=1080&q=75" style="color: transparent;">
                                </div>
                                <div 
                                    class="figure-bg" 
                                    :style="{ 
                                        translate: 'none', 
                                        rotate: 'none', 
                                        scale: 'none', 
                                        transform: hoverStates[0] ? 'translate(0px, 30%)' : 'translate(0px, 100%)',
                                        transition: 'transform 0.3s ease'
                                    }"
                                ></div>
                            </div>
                            <div class="figure-caption product-caption1">상쾌환</div>
                        </a>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="figure-controller">
                        <a 
                            class="figure" 
                            href="/kr/product/sangkwaehwan"
                            @mouseenter="() => setHoverState(1, true)"
                            @mouseleave="() => handleMouseLeave(1)"
                            @mousemove="(e) => handleMouseMove(e, 1)"
                        >
                            <div 
                                class="figure-img-card page_figureImageCard new" 
                                :style="{ 
                                    background: hoverStates[1] ? 'rgb(21,178,245)' : 'rgb(255, 255, 255)',
                                    transition: 'background 0.3s ease'
                                }"
                            >
                                <div 
                                    class="figure-parallax-container" 
                                    :style="{ 
                                        translate: 'none', 
                                        rotate: 'none', 
                                        scale: 'none', 
                                        transform: getParallaxTransform(1),
                                        transition: hoverStates[1] ? 'none' : 'transform 0.3s ease-out'
                                    }"
                                >
                                    <img alt="more products" loading="lazy" width="854" height="848" decoding="async" data-nimg="1" class="figure-img" src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fmore_products_2.png&w=1080&q=75" style="color: transparent;">
                                </div>
                                <div 
                                    class="figure-bg" 
                                    :style="{ 
                                        translate: 'none', 
                                        rotate: 'none', 
                                        scale: 'none', 
                                        transform: hoverStates[1] ? 'translate(0px, 30%)' : 'translate(0px, 100%)',
                                        transition: 'transform 0.3s ease'
                                    }"
                                ></div>
                            </div>
                            <div class="figure-caption product-caption1">상쾌환 스틱</div>
                        </a>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="figure-controller">
                        <a 
                            class="figure" 
                            href="/kr/product/sangkwaehwan"
                            @mouseenter="() => setHoverState(2, true)"
                            @mouseleave="() => handleMouseLeave(2)"
                            @mousemove="(e) => handleMouseMove(e, 2)"
                        >
                            <div 
                                class="figure-img-card page_figureImageCard" 
                                :style="{ 
                                    background: hoverStates[2] ? 'rgb(21,178,245)' : 'rgb(255, 255, 255)',
                                    transition: 'background 0.3s ease'
                                }"
                            >
                                <div 
                                    class="figure-parallax-container" 
                                    :style="{ 
                                        translate: 'none', 
                                        rotate: 'none', 
                                        scale: 'none', 
                                        transform: getParallaxTransform(2),
                                        transition: hoverStates[2] ? 'none' : 'transform 0.3s ease-out'
                                    }"
                                >
                                    <img alt="more products" loading="lazy" width="854" height="848" decoding="async" data-nimg="1" class="figure-img" src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fmore_products_3.png&w=1080&q=75" style="color: transparent;">
                                </div>
                                <div 
                                    class="figure-bg" 
                                    :style="{ 
                                        translate: 'none', 
                                        rotate: 'none', 
                                        scale: 'none', 
                                        transform: hoverStates[2] ? 'translate(0px, 30%)' : 'translate(0px, 100%)',
                                        transition: 'transform 0.3s ease'
                                    }"
                                ></div>
                            </div>
                            <div class="figure-caption product-caption1">상쾌환 BOOSTER</div>
                        </a>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'

// 각 슬라이드의 호버 상태를 관리
const hoverStates = ref([false, false, false])

// 각 슬라이드의 마우스 위치를 관리
const mousePositions = ref([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
])

// 특정 인덱스의 호버 상태를 설정하는 함수
const setHoverState = (index, isHovered) => {
    hoverStates.value[index] = isHovered
}

// 마우스 움직임 추적 함수
const handleMouseMove = (event, index) => {
    if (!hoverStates.value[index]) return // 호버 상태가 아니면 실행하지 않음
    
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // 마우스 위치를 중심점 기준으로 계산 (-1 ~ 1 범위로 정규화)
    const x = (event.clientX - centerX) / (rect.width / 2)
    const y = (event.clientY - centerY) / (rect.height / 2)
    
    mousePositions.value[index] = { x, y }
}

// 패럴랙스 변형값 계산 함수
const getParallaxTransform = (index) => {
    const { x, y } = mousePositions.value[index]
    const moveX = x * 20 // 최대 20px 이동 (더 강하게)
    const moveY = y * 20 // 최대 20px 이동 (더 강하게)
    
    return `translate(${moveX}px, ${moveY}px)`
}

// 마우스가 떠날 때 위치 초기화
const handleMouseLeave = (index) => {
    setHoverState(index, false)
    mousePositions.value[index] = { x: 0, y: 0 }
}
</script>

<style lang="scss" scoped>
@use '@/styles/contents4' as *;
</style>