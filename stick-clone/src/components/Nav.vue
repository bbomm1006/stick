<template>
    <div
    class="nav grid-xl page_productNav"
    :style="{ transform: getTransform() }"
    >
        <div class="page_progressBar" :style="{ width: scrollPercent + '%' }"></div>
        <div class="page_productDropdown">
            <div class="page_productNavHeader">상쾌환<span>스틱</span></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" fill="#EBEBEB" rx="12"></rect><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 10-5 5-5-5"></path></svg>
        </div>
        <div class="page_mobileProductNavMenu">
          <div class="page_mobileNavHeader" @click="toggleDropdown">
            제품소개 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
              :class="{ 'rotated': isDropdownOpen }"
            >
              <rect width="24" height="24" fill="#EBEBEB" rx="12"></rect>
              <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 10-5 5-5-5"></path>
            </svg>
          </div>
          <div 
            class="page_dropdownLists" 
            :class="{ 'open': isDropdownOpen }"
            ref="dropdownRef"
          >
            <div class="page_dropdownList">상쾌환 스틱</div>
            <div class="page_dropdownList">제품소개</div>
            <div class="page_dropdownList">포인트</div>
            <div class="page_dropdownList">원료정보</div>
            <div class="page_dropdownList">제품기본정보</div>
          </div>
        </div>
        <ul class="page_productNavMenu">
            <li :class="['page_scrollToTop page_active', { page_active: activeSection === 'top' }]">상쾌환 스틱</li>
            <li :class="['page_scrollToIntroduction', { page_active: activeSection === 'introduction' }]">제품소개</li>
            <li :class="['page_scrollToHorizontalScroll', { page_active: activeSection === 'horizontalScroll' }]">포인트</li>
            <li :class="['page_scrollToCards', { page_active: activeSection === 'cards' }]">원료정보</li>
            <li :class="['page_scrollToSpecs', { page_active: activeSection === 'specs' }]">제품기본정보</li>
        </ul>

        <a class="button page_productNavButton" target="_blank" href="https://gift.kakao.com/product/11169321"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#371D1E" d="M11.994 4C7.015 4 3 7.212 3 11.111c0 2.531 1.67 4.748 4.176 6.013l-.848 3.167a.27.27 0 0 0 .064.276c.051.046.118.07.186.071a.27.27 0 0 0 .154-.064l3.65-2.46a12 12 0 0 0 1.624.115c4.973 0 8.994-3.212 8.994-7.118C21 7.206 16.966 4 11.994 4"></path><path fill="#FAE100" d="M6.147 9.987h-.982a.64.64 0 0 1-.347-.09.4.4 0 0 1-.18-.264.6.6 0 0 1 0-.102.4.4 0 0 1 .154-.334.64.64 0 0 1 .385-.122H8.14a.6.6 0 0 1 .347.096.37.37 0 0 1 .18.263.5.5 0 0 1 0 .097.41.41 0 0 1-.155.34.6.6 0 0 1-.379.116h-.95v3.379a.52.52 0 0 1-.319.505.5.5 0 0 1-.202.034.52.52 0 0 1-.334-.109.48.48 0 0 1-.173-.289.5.5 0 0 1 0-.141zM8.95 9.325a.44.44 0 0 1 .186-.257.6.6 0 0 1 .32-.077h.245a.64.64 0 0 1 .34.083c.11.074.188.186.219.315l1.284 3.63q.051.14.084.289.003.06 0 .122a.43.43 0 0 1-.141.334.47.47 0 0 1-.347.141.444.444 0 0 1-.463-.295l-.27-.79H8.719l-.27.79a.44.44 0 0 1-.469.295.443.443 0 0 1-.463-.366.6.6 0 0 1 0-.11.6.6 0 0 1 0-.192c0-.07.046-.148.071-.218zm.642.841-.61 1.928h1.213zM11.775 9.53a.55.55 0 0 1 .141-.391.5.5 0 0 1 .38-.148.55.55 0 0 1 .334.109c.089.075.148.18.166.295a.5.5 0 0 1 0 .135v3.38h1.767a.64.64 0 0 1 .347.096.4.4 0 0 1 .18.263v.097a.4.4 0 0 1-.154.334.64.64 0 0 1-.386.122H12.38a.64.64 0 0 1-.392-.103.5.5 0 0 1-.193-.321 2 2 0 0 1 0-.212zM15.206 9.532a.57.57 0 0 1 .141-.392.566.566 0 0 1 .713-.039c.091.075.153.18.174.296a1 1 0 0 1 0 .135v1.574l1.625-1.876q.094-.096.199-.18a.4.4 0 0 1 .218-.058c.113 0 .222.033.315.097a.4.4 0 0 1 .167.257.1.1 0 0 1 0 .038.1.1 0 0 0 0 .045.4.4 0 0 1-.051.193 1 1 0 0 1-.122.173l-1.067 1.17 1.285 1.99v.065q.101.139.154.302v.032a.46.46 0 0 1-.16.399.6.6 0 0 1-.373.122.5.5 0 0 1-.257-.058.64.64 0 0 1-.206-.225l-1.194-1.927-.572.597v1.073a.57.57 0 0 1-.141.392.52.52 0 0 1-.386.148.5.5 0 0 1-.327-.11.48.48 0 0 1-.174-.289.5.5 0 0 1 0-.141z"></path></svg>카카오톡 선물하기</a>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const scrollPercent = ref(0)
const isFooterVisible = ref(false)
const isInitialHidden = ref(true)
const activeSection = ref('page_scrollToTop')

// 드롭다운 상태
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

const getTransform = () => {
  if (isInitialHidden.value) {
    return 'translate(0px, 100%)'
  }
  return isFooterVisible.value ? 'translate(0px, 100%)' : 'translate(0px, 0%)'
}

// 드롭다운 토글
const toggleDropdown = async () => {
  isDropdownOpen.value = !isDropdownOpen.value

  await nextTick()

  const headerEl = document.querySelector('.page_mobileNavHeader')

  if (dropdownRef.value) {
    if (isDropdownOpen.value) {
      // 드롭다운 열기
      dropdownRef.value.style.height = 'auto'
      const height = dropdownRef.value.scrollHeight
      dropdownRef.value.style.height = '0px'

      requestAnimationFrame(() => {
        dropdownRef.value.style.height = height + 'px'
      })

      // 클래스 추가
      if (headerEl) headerEl.classList.add('dropdown--open')
    } else {
      // 드롭다운 닫기
      const height = dropdownRef.value.scrollHeight
      dropdownRef.value.style.height = height + 'px'

      requestAnimationFrame(() => {
        dropdownRef.value.style.height = '0px'
      })

      // 클래스 제거
      if (headerEl) headerEl.classList.remove('dropdown--open')
    }
  }
}

const updateScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const percent = (scrollTop / docHeight) * 100
  scrollPercent.value = Math.min(100, Math.max(0, percent))

  updateActiveSection()
}

const updateActiveSection = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const percent = (scrollTop / docHeight) * 100

  const horizontalScrollEl = document.querySelector('.page_horizontalScroll')
  const ingredientsCtnEl = document.querySelector('.page_ingredientsCtn')
  const specButtonsEl = document.querySelector('.page_specButtons')

  let newActiveSection = 'page_scrollToTop'

  if (percent >= 9.04) {
    if (horizontalScrollEl) {
      const horizontalScrollTop = horizontalScrollEl.getBoundingClientRect().top + scrollTop
      const horizontalScrollPercent = (horizontalScrollTop / docHeight) * 100

      if (percent >= horizontalScrollPercent) {
        if (ingredientsCtnEl) {
          const ingredientsCtnTop = ingredientsCtnEl.getBoundingClientRect().top + scrollTop
          const ingredientsCtnPercent = (ingredientsCtnTop / docHeight) * 100

          if (percent >= ingredientsCtnPercent) {
            if (specButtonsEl) {
              const specButtonsTop = specButtonsEl.getBoundingClientRect().top + scrollTop
              const specButtonsPercent = (specButtonsTop / docHeight) * 100

              if (percent >= specButtonsPercent) {
                newActiveSection = 'page_scrollToSpecs'
              } else {
                newActiveSection = 'page_scrollToCards'
              }
            } else {
              newActiveSection = 'page_scrollToCards'
            }
          } else {
            newActiveSection = 'page_scrollToHorizontalScroll'
          }
        } else {
          newActiveSection = 'page_scrollToHorizontalScroll'
        }
      } else {
        newActiveSection = 'page_scrollToIntroduction'
      }
    } else {
      newActiveSection = 'page_scrollToIntroduction'
    }
  }

  if (activeSection.value !== newActiveSection) {
    activeSection.value = newActiveSection
    updateNavMenu()
  }
}

const updateNavMenu = () => {
  const navItems = document.querySelectorAll('.page_productNavMenu li')
  navItems.forEach(item => {
    item.classList.remove('page_active')
  })

  const activeItem = document.querySelector(`.page_productNavMenu .${activeSection.value}`)
  if (activeItem) {
    activeItem.classList.add('page_active')
  }
}

const scrollToSection = (sectionClass) => {
  let targetPosition = 0

  switch (sectionClass) {
    case 'page_scrollToTop':
      targetPosition = 0
      break
    case 'page_scrollToIntroduction':
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      targetPosition = docHeight * 0.100569
      break
    case 'page_scrollToHorizontalScroll':
      const horizontalScrollEl = document.querySelector('.page_horizontalScroll')
      if (horizontalScrollEl) {
        const rect = horizontalScrollEl.getBoundingClientRect()
        targetPosition = rect.top + window.scrollY + 10
      }
      break
    case 'page_scrollToCards':
      const ingredientsCtnEl = document.querySelector('.page_ingredientsCtn')
      if (ingredientsCtnEl) {
        const rect = ingredientsCtnEl.getBoundingClientRect()
        targetPosition = rect.top + window.scrollY + 10
      }
      break
    case 'page_scrollToSpecs':
      const specButtonsEl = document.querySelector('.page_specButtons')
      if (specButtonsEl) {
        const rect = specButtonsEl.getBoundingClientRect()
        targetPosition = rect.top + window.scrollY + 60
      }
      break
  }

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}

const setupNavigation = () => {
  const navItems = document.querySelectorAll('.page_productNavMenu li')
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const classList = Array.from(item.classList)
      const sectionClass = classList.find(cls => cls.startsWith('page_scrollTo'))
      if (sectionClass) {
        scrollToSection(sectionClass)
      }
    })
  })
}

let observer = null

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  updateScroll()

  setupNavigation()

  setTimeout(() => {
    isInitialHidden.value = false
  }, 1500)

  const footer = document.querySelector('footer')
  if (footer) {
    observer = new IntersectionObserver(
      ([entry]) => {
        isFooterVisible.value = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(footer)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  if (observer) observer.disconnect()
})
</script>


<style lang="scss" scoped>
@use '@/styles/nav' as *;
</style>