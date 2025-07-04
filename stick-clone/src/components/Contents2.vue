<template>
    <div class="page_pinContainer">

        <div class="page_packetBoxsWrap inWrap">
          <div class="grid-m page_packetBoxs">
            <div class="page_packetBox" >
              <div class="packetBox">
                <img src="/images/stick_box.jpg" alt="" class="box"/>
              </div>
            </div>
          </div>
        </div>

        <div>
            <div class="page_horizontalScroll" ref="horizontalScroll">
                <div class="page_horizontalSticky" ref="horizontalSticky">
                    <div class="page_horizontalItems page_stickZero" ref="horizontalItems">
                        <div class="page_horizontalItem">
                            <div class="grid-m page_keywords">
                                <div class="product-h1 page_keyword1" ref="keyword1_0">Simply</div>
                                <div class="product-h1 page_keyword2" ref="keyword2_0">Zero</div>
                            </div>
                            <div class="grid-m page_horizontalDescriptions">
                                <div class="product-t3 page_horizontalTitle">제로칼로리로 <br/>더 가볍게, 새롭게</div>
                                <div class="product-b1 page_horizontalDescription">#설탕ZERO #칼로리50%DOWN</div>
                            </div>

                            <div class="page_springYellow page_emoji">
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/spring.png" alt=""/> 
                                </div>
                            </div>
                            
                            <div class="page_star page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/star.png" alt=""/> 
                                </div>
                            </div>
                            
                            <div class="page_zero page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/zero.png" alt=""/> 
                                </div>
                            </div>

                            <div class="page_cloud page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/cloud.png" alt=""/> 
                                </div>
                            </div>

                        </div>
                        <div class="page_horizontalItem">
                            <div class="grid-m page_keywords">
                                <div class="product-h1 page_keyword1">Squeeze</div>
                                <div class="product-h1 page_keyword2">& Go</div>
                            </div>
                            <div class="grid-m page_horizontalDescriptions">
                                <div class="product-t3 page_horizontalTitle">자연의 신선함을 <br/>그대로 담았습니다</div>
                                <div class="product-b1 page_horizontalDescription">#천연재료 #무첨가</div>
                            </div>
                            
                            <div class="page_springYellow page_emoji">
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/spring.png" alt=""/> 
                                </div>
                            </div>
                            
                            <div class="page_sunglass page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/sun.png" alt=""/> 
                                </div>
                            </div>
                            
                            <div class="page_star page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/star.png" alt=""/> 
                                </div>
                            </div>

                            <div class="page_handbag page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/bag.png" alt=""/> 
                                </div>
                            </div>

                        </div>
                        <div class="page_horizontalItem">
                            <div class="grid-m page_keywords">
                                <div class="product-h1 page_keyword1">Sweet &</div>
                                <div class="product-h1 page_keyword2">Tasty</div>
                            </div>
                            <div class="grid-m page_horizontalDescriptions">
                                <div class="product-t3 page_horizontalTitle">건강한 라이프스타일의 <br/>새로운 시작</div>
                                <div class="product-b1 page_horizontalDescription">#건강음료 #라이프스타일</div>
                            </div>

                             <div class="page_springBlue page_emoji">
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/spring2.png" alt=""/> 
                                </div>
                            </div>

                            <div class="page_mango page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/mango.png" alt=""/> 
                                </div>
                            </div>

                            <div class="page_smile page_emoji" >
                                <div class="lf-player-container">
                                    <img src="/images/aniimg/smile.png" alt=""/> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stickWrapping" ref="stickWrapping" :class="{ fixed: isStickFixed }">
                      <div class="stickWrap">
                        <img src="/images/stick.png" alt="" class="stick" ref="stickImage"/>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid-m page_ingredientsCtn">
            <div class="page_ingredientDescriptions" ref="ingredientDescriptions">
                <div class="product-t2-b page_ingredientTextTitle">인체적용시험으로 확인된 <br/>과학적 숙취해소 효과​</div>
                <div class="product-b1 page_ingredientDescription">식품의약품안전처 가이드라인을 준수한 인체적용시험 실시 결과, <br/>유효성분 글루타치온이 숙취원인물질인 혈중 아세트알데히드의 효과적 감소를 도와줍니다. <br/>밀크씨슬추출분말, 아티초크추출분말 등 엄선한 원료를 했습니다.</div>
            </div>

            <div class="page_ingredients" ref="ingredients">
                <div>
                    <div class="page_ingredientInner">
                        <div class="page_ingredientImg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 115"><rect width="24.807" height="12.049" x="40.214" y="52.057" stroke="#fff" stroke-width="2.3" rx="6.024" transform="rotate(-50.19 40.214 52.057)"></rect><path stroke="#fff" stroke-linecap="round" stroke-width="2.3" d="m51.013 49.063 4.538-5.445"></path><rect width="24.807" height="12.049" x="57.934" y="57.834" stroke="#fff" stroke-width="2.3" rx="6.024" transform="rotate(-4.98 57.934 57.834)"></rect><path stroke="#fff" stroke-linecap="round" stroke-width="2.3" d="m67.667 63.389 7.06-.615"></path><rect width="24.807" height="12.049" x="36.697" y="59.934" stroke="#fff" stroke-width="2.3" rx="6.024" transform="rotate(28.22 36.697 59.934)"></rect><path stroke="#fff" stroke-linecap="round" stroke-width="2.3" d="m41.8 69.91 6.246 3.352"></path></svg>
                        </div>
                    </div>
                    <div class="product-caption2 page_ingredientText">효모 추출물</div>
                </div>
                <div>
                    <div class="page_ingredientInner">
                        <div class="page_ingredientImg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 115"><path fill="#0FAAED" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="m34 59 10-1h24.5L80 60l-12 3 9 7.5L64.5 69v8.5l-8-7-8.5 7 2-11-13.5 4 10-7.5z"></path><rect width="23.7" height="29.7" x="45.65" y="39.15" fill="#0FAAED" stroke="#fff" stroke-width="2.3" rx="11.85"></rect><path fill="#0FAAED" d="M51.5 34.5H44V39l-5.5 4 5.5 4 1 4.5h5l6.5 4.5 5.5-4.5h7l.5-4.5 5-4-5.5-4 .5-4.5H62L56.5 31z"></path><path fill="#fff" d="M44 34.5v-1.15a1.15 1.15 0 0 0-1.15 1.15zm7.5 0v1.15c.236 0 .466-.073.66-.208zm5-3.5.617-.97a1.15 1.15 0 0 0-1.276.028zm5.5 3.5-.617.97c.184.118.398.18.617.18zm7.5 0 1.143.127A1.15 1.15 0 0 0 69.5 33.35zM69 39l-1.143-.127c-.046.41.133.814.467 1.057zm5.5 4 .718.898a1.15 1.15 0 0 0-.042-1.828zm-5 4-.718-.898a1.15 1.15 0 0 0-.425.771zm-.5 4.5v1.15a1.15 1.15 0 0 0 1.143-1.023zm-7 0v-1.15a1.15 1.15 0 0 0-.728.26zM56.5 56l-.655.946c.422.291.986.269 1.383-.056zM50 51.5l.655-.946A1.15 1.15 0 0 0 50 50.35zm-5 0-1.123.25c.117.526.584.9 1.123.9zM44 47l1.123-.25a1.15 1.15 0 0 0-.447-.68zm-5.5-4-.676-.93a1.15 1.15 0 0 0 0 1.86zm5.5-4 .676.93a1.15 1.15 0 0 0 .474-.93zm0-3.35h7.5v-2.3H44zm8.16-.208 5-3.5-1.32-1.884-5 3.5zm3.723-3.472 5.5 3.5 1.234-1.94-5.5-3.5zM62 35.65h7.5v-2.3H62zm6.357-1.277-.5 4.5 2.286.254.5-4.5zm-.033 5.557 5.5 4 1.352-1.86-5.5-4zm5.458 2.172-5 4 1.436 1.796 5-4zm-5.425 4.771-.5 4.5 2.286.254.5-4.5zM69 50.35h-7v2.3h7zm-7.728.26-5.5 4.5 1.456 1.78 5.5-4.5zm-4.117 4.444-6.5-4.5-1.31 1.892 6.5 4.5zM50 50.35h-5v2.3h5zm-3.877.9-1-4.5-2.246.5 1 4.5zm-1.447-5.18-5.5-4-1.352 1.86 5.5 4zm-5.5-2.14 5.5-4-1.352-1.86-5.5 4zM45.15 39v-4.5h-2.3V39z"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="M57 70v14"></path></svg>
                        </div>
                    </div>
                    <div class="product-caption2 page_ingredientText">밀크씨슬 추출분말</div>
                </div>
                <div>
                    <div class="page_ingredientInner">
                        <div class="page_ingredientImg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 115"><path stroke="#fff" stroke-linecap="round" stroke-width="2.3" d="M57.219 58.516V80.85"></path><path fill="#10AAEC" stroke="#fff" stroke-width="2.3" d="M61.782 66.889c0 3.655-2.286 6.122-4.564 6.122s-4.563-2.467-4.563-6.122 2.286-6.122 4.563-6.122c2.278 0 4.564 2.467 4.564 6.122ZM69.666 69.135c-.957 1.546-2.205 2.647-3.396 3.208-1.202.566-2.198.528-2.868.114s-1.148-1.29-1.177-2.618c-.03-1.317.4-2.924 1.357-4.47.957-1.547 2.205-2.648 3.396-3.209 1.203-.566 2.198-.528 2.868-.114s1.148 1.29 1.177 2.618c.03 1.316-.4 2.924-1.357 4.47ZM50.59 65.174c1.044 1.47 1.546 3.056 1.562 4.394.016 1.344-.446 2.322-1.185 2.847s-1.814.64-3.078.181c-1.259-.456-2.59-1.452-3.634-2.923-1.044-1.47-1.547-3.055-1.563-4.394-.016-1.344.447-2.322 1.185-2.846.74-.525 1.815-.64 3.079-.182 1.258.456 2.59 1.453 3.634 2.923Z"></path><path fill="#10AAEC" stroke="#fff" stroke-width="2.3" d="M61.782 58.467c0 3.655-2.286 6.122-4.564 6.122s-4.563-2.467-4.563-6.122 2.286-6.122 4.563-6.122c2.278 0 4.564 2.467 4.564 6.122ZM71.343 61.748c-1.924 3.108-5.166 4.002-7.103 2.804-1.936-1.2-2.581-4.5-.658-7.608s5.166-4.002 7.103-2.803 2.582 4.5.658 7.607ZM50.59 56.751c2.116 2.98 1.68 6.315-.176 7.634-1.857 1.319-5.15.631-7.266-2.349s-1.68-6.315.176-7.633c1.857-1.319 5.15-.631 7.266 2.348Z"></path><path fill="#10AAEC" stroke="#fff" stroke-width="2.3" d="M61.782 51.196c0 3.654-2.286 6.121-4.564 6.121s-4.563-2.467-4.563-6.121 2.286-6.122 4.563-6.122c2.278 0 4.564 2.467 4.564 6.122ZM71.343 54.477c-1.924 3.108-5.166 4.002-7.103 2.803s-2.582-4.5-.658-7.607 5.166-4.002 7.102-2.803c1.937 1.199 2.582 4.5.659 7.607ZM50.59 49.48c2.116 2.98 1.68 6.315-.176 7.634-1.857 1.318-5.15.63-7.266-2.35s-1.68-6.314.176-7.633c1.857-1.319 5.15-.63 7.266 2.349ZM60.743 39.714c0 2.747-1.783 4.563-3.524 4.563s-3.525-1.816-3.525-4.563 1.783-4.564 3.525-4.564 3.524 1.817 3.524 4.564Z"></path><path fill="#10AAEC" stroke="#fff" stroke-width="2.3" d="M67.416 41.952c1.862 2.706 1.402 5.646-.224 6.766-1.627 1.119-4.537.497-6.4-2.209-1.861-2.706-1.402-5.646.225-6.765 1.627-1.12 4.537-.498 6.399 2.208ZM52.99 46.443c-1.784 2.788-4.709 3.517-6.406 2.431s-2.26-4.048-.475-6.836c1.784-2.787 4.709-3.517 6.406-2.43 1.697 1.085 2.26 4.047.475 6.835Z"></path></svg>
                        </div>
                    </div>
                    <div class="product-caption2 page_ingredientText">아티초크 추출분말</div>
                </div>
                <div>
                    <div class="page_ingredientInner">
                        <div class="page_ingredientImg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 115"><path stroke="#fff" stroke-linecap="round" stroke-width="2.3" d="m31.051 53.668 5.657 3.394 10.183-5.091 11.314 3.394m0 0 6.223-5.092m-6.223 5.092 3.394 10.182m0 0h11.314m-11.314 0-5.091 6.789m16.405-6.789 3.96-10.182-6.223-5.092m2.263 15.274 5.091 6.789"></path><path fill="#fff" d="M22 51.895v-5.504h1.212v2.28h2.538v-2.28h1.22v5.504h-1.22v-2.28h-2.538v2.28zM33.314 49.143c0 1.798-1.184 2.828-2.732 2.828-1.56 0-2.74-1.037-2.74-2.828 0-1.798 1.18-2.828 2.74-2.828 1.548 0 2.732 1.03 2.732 2.828m-4.235 0c0 1.175.594 1.813 1.503 1.817.902-.004 1.5-.642 1.496-1.817.004-1.179-.594-1.813-1.496-1.817-.909.004-1.503.638-1.503 1.817M41.234 40.581v-5.505h1.212v2.281h2.538v-2.281h1.22v5.505h-1.22V38.3h-2.538v2.281zM52.548 37.829c0 1.798-1.184 2.828-2.732 2.828-1.56 0-2.74-1.038-2.74-2.828 0-1.799 1.18-2.829 2.74-2.829 1.548 0 2.732 1.03 2.732 2.828m-4.235 0c0 1.174.594 1.813 1.503 1.817.901-.004 1.5-.643 1.495-1.818.005-1.178-.593-1.813-1.495-1.817-.909.004-1.503.639-1.503 1.817"></path><path stroke="#fff" stroke-linecap="round" d="M45.76 42.92h2.262m-2.262 2.263h2.262M57.074 45.184h2.262m-2.262 2.262h2.262M45.76 47.445h2.262m-2.262 2.263h2.262M57.074 49.709h2.262m-2.262 2.263h2.262"></path><path fill="#fff" d="M45.76 80.179v-5.505h1.212v2.28h2.538v-2.28h1.22v5.505h-1.22v-2.281h-2.538v2.28zM57.074 77.426c0 1.798-1.184 2.829-2.732 2.829-1.56 0-2.74-1.038-2.74-2.829 0-1.798 1.18-2.828 2.74-2.828 1.548 0 2.732 1.03 2.732 2.828m-4.235 0c0 1.175.594 1.814 1.503 1.817.901-.003 1.5-.642 1.495-1.817.004-1.178-.594-1.813-1.495-1.817-.909.004-1.503.639-1.503 1.817M55.942 42.92v-5.656h1.172v2.344h2.454v-2.344h1.18v5.657h-1.18v-2.344h-2.454v2.344zM92.1 51.407c0 1.798-1.214 2.828-2.8 2.828-1.6 0-2.81-1.038-2.81-2.828 0-1.799 1.21-2.829 2.81-2.829 1.586 0 2.8 1.03 2.8 2.829m-4.342 0c0 1.174.61 1.813 1.541 1.817.924-.004 1.538-.643 1.533-1.817.005-1.179-.609-1.814-1.533-1.818-.932.004-1.54.64-1.54 1.818M70.141 45.748c0 1.799-1.114 2.829-2.57 2.829-1.468 0-2.578-1.038-2.578-2.829 0-1.798 1.11-2.828 2.578-2.828 1.456 0 2.57 1.03 2.57 2.828m-3.984 0c0 1.175.559 1.814 1.414 1.818.848-.004 1.41-.643 1.407-1.818.004-1.178-.56-1.813-1.407-1.817-.855.004-1.414.639-1.414 1.817M83.718 76.295c0 1.799-1.114 2.829-2.57 2.829-1.468 0-2.578-1.038-2.578-2.829 0-1.798 1.11-2.828 2.578-2.828 1.456 0 2.57 1.03 2.57 2.828m-3.985 0c0 1.175.56 1.814 1.415 1.817.848-.003 1.41-.642 1.406-1.817.004-1.178-.558-1.813-1.406-1.817-.856.004-1.415.639-1.415 1.817M84.539 79.048v-5.505h1.14v2.28h2.388v-2.28h1.148v5.505h-1.148v-2.281h-2.388v2.28z"></path><path stroke="#fff" stroke-linecap="round" stroke-width="2" d="m77.439 55.364 6.788-2.262"></path></svg>
                        </div>
                    </div>
                    <div class="product-caption2 page_ingredientText">비타민 C</div>
                </div>
                <div>
                    <div class="page_ingredientInner">
                        <div class="page_ingredientImg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 115"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="M33.537 69.528h6.232m7.735-10.315h12.033l6.232-11.388h9.669M47.504 59.214l-3.653-6.662m3.653 6.662-4.512 8.33m39.107-25.09-2.922 3.652M39.769 69.528h2.148l1.075-1.984m-3.223 1.984 4.082 7.09m-.86-9.074 3.654 6.71m28.793-26.429h2.364l1.375-1.719m-3.74 1.719 4.513 7.306m-.773-9.025 4.512 7.413"></path><path fill="#fff" d="M28 48.6V42h1.17v2.799h3.034V42h1.18v6.6h-1.18v-2.807H29.17V48.6zM34.264 49.736v-.639l1.53-1.285c.387-.328.617-.542.621-.848-.004-.337-.306-.538-.693-.538-.405 0-.675.219-.675.593H34.2c.004-.798.643-1.295 1.539-1.295.91 0 1.508.534 1.503 1.222.005.556-.32.953-1.053 1.504l-.666.529v.027h1.791v.73zM43.471 42v6.6h-1.044l-3.088-4.512h-.054V48.6h-1.17V42h1.062l3.07 4.513h.063V42zM18 72.784v-6.692h1.185v2.838h3.07v-2.838h1.194v6.692h-1.194v-2.847h-3.07v2.847zM30.463 69.438c.004 2.163-1.299 3.438-3.025 3.438-1.736 0-3.03-1.28-3.025-3.438C24.408 67.275 25.702 66 27.438 66c1.726 0 3.03 1.275 3.025 3.438m-4.857 0c-.004 1.53.756 2.357 1.832 2.357 1.08 0 1.836-.827 1.831-2.357.005-1.53-.752-2.357-1.831-2.357-1.075 0-1.836.828-1.832 2.357M51.587 81.438c.004 2.163-1.2 3.438-2.794 3.438-1.602 0-2.797-1.28-2.793-3.438C45.996 79.275 47.19 78 48.793 78c1.595 0 2.798 1.275 2.794 3.438m-4.485 0c-.004 1.53.699 2.357 1.691 2.357.997 0 1.696-.827 1.692-2.357.004-1.53-.695-2.357-1.692-2.357-.992 0-1.695.828-1.69 2.357M88.446 60.438c.005 2.163-1.383 3.438-3.223 3.438-1.85 0-3.228-1.28-3.223-3.438C81.995 58.275 83.374 57 85.223 57c1.84 0 3.228 1.275 3.223 3.438m-5.174 0c-.005 1.53.806 2.357 1.951 2.357 1.15 0 1.956-.827 1.951-2.357.005-1.53-.8-2.357-1.95-2.357-1.146 0-1.957.827-1.952 2.357M87.25 31v6.6h-1.024L83.2 33.088h-.053V37.6H82V31h1.041l3.009 4.513h.062V31zM88.342 37.6V31h1.147v2.799h2.973V31h1.156v6.6h-1.156v-2.807h-2.974V37.6zM94.48 38.736v-.639l1.5-1.285c.38-.328.604-.542.609-.848-.005-.337-.3-.538-.68-.538-.397 0-.661.219-.661.593h-.83c.005-.798.631-1.295 1.51-1.295.89 0 1.477.534 1.472 1.222.005.556-.313.953-1.032 1.504l-.653.529v.027h1.756v.73z"></path></svg>
                        </div>
                    </div>
                    <div class="product-caption2 page_ingredientText">글루타민</div>
                </div>
                <div>
                    <div class="page_ingredientInner">
                        <div class="page_ingredientImg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 115"><path fill="#fff" d="M100.855 62c.003 1.887-1.042 3-2.428 3-1.393 0-2.43-1.117-2.427-3-.004-1.887 1.034-3 2.427-3 1.386 0 2.431 1.113 2.428 3m-3.897 0c-.004 1.335.607 2.057 1.47 2.057.866 0 1.472-.722 1.469-2.057.003-1.335-.603-2.056-1.47-2.056-.862 0-1.473.721-1.47 2.056M101.628 64.92v-5.84h.95v2.477h2.464V59.08H106v5.838h-.958v-2.483h-2.464v2.483zM89.855 40c.003 1.887-1.042 3-2.428 3-1.393 0-2.43-1.117-2.427-3-.004-1.887 1.034-3 2.427-3 1.386 0 2.431 1.113 2.428 3m-3.897 0c-.004 1.335.607 2.057 1.47 2.057.866 0 1.472-.722 1.469-2.057.003-1.335-.603-2.056-1.47-2.056-.862 0-1.473.721-1.47 2.056"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="m40.964 57.391 6.444-3.989 10.126 5.422 9.82-5.422 10.025 5.422m0 0v8.694m0-8.694L85 54.499m9.768 2.892L90 54.5m-5 0 2.607-1.097L90 54.5m-5 0V45.73m5 8.769V45.73M24.5 54.5V45.73m6 8.769V45.73M20.71 57.292l6.751-3.683 6.24 3.683"></path><path fill="#fff" d="M26.519 38v5h-.881l-2.605-3.419h-.046V43H22v-5h.896l2.59 3.419h.053V38zM27.459 43v-5h.987v2.12h2.56V38H32v5h-.995v-2.127h-2.56V43zM36.067 60v6h-.793l-2.344-4.102h-.041V66H32v-6h.806l2.331 4.102h.048V60zM36.913 66v-6h.888v2.544h2.304V60H41v6h-.895v-2.553H37.8V66zM76.411 71v5.12h-.86l-2.543-3.5h-.044v3.5H72V71h.875l2.528 3.5h.052V71zM77.329 76.12V71h.963v2.17h2.499V71h.971v5.12h-.971v-2.178h-2.499v2.178zM82.487 77v-.495l1.26-.997c.319-.255.508-.42.512-.658-.004-.261-.252-.417-.571-.417-.334 0-.556.17-.556.46h-.697c.004-.619.53-1.004 1.268-1.004.748 0 1.241.413 1.238.947.003.431-.264.74-.868 1.167l-.548.41v.021H85V77zM8 65.973V60h.983v2.533h2.55V60h.99v5.973h-.99v-2.541h-2.55v2.54zM13.263 67v-.578l1.286-1.163c.325-.297.518-.49.522-.767-.004-.305-.257-.487-.582-.487-.34 0-.568.198-.568.537h-.71c.003-.722.54-1.172 1.293-1.172.764 0 1.267.483 1.263 1.105.004.504-.268.863-.885 1.362l-.56.478v.025h1.506V67zM21 60v5.973h-.878l-2.594-4.084h-.046v4.084H16.5V60h.893l2.58 4.084h.052V60z"></path></svg>
                        </div>
                    </div>
                    <div class="product-caption2 page_ingredientText">아르지닌</div>
                </div>
            </div>
        </div>

        <div class="page_packetBoxsWrap coverWrap">
          <div class="grid-m page_packetBoxs">
            <div class="page_packetBox" >
              <div class="packetBox">
                <img src="/images/stick_box_cover.png" alt="" class="cover"/>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const horizontalScroll = ref(null)
const horizontalSticky = ref(null)
const horizontalItems = ref(null)
const keyword1_0 = ref(null)
const keyword2_0 = ref(null)
const ingredients = ref(null)

// 스틱 관련 ref 추가
const stickWrapping = ref(null)
const stickImage = ref(null)
const isStickFixed = ref(false)

let scrollTriggerInstance = null
let keywordAnimations = []
let emojiScrollTriggers = []
let floatingAnimations = []
let stickScrollTrigger = null // 스틱 스크롤 트리거 추가
let stickObserver = null // 스틱 관찰자 추가
let isDesktop = true

const checkScreenSize = () => {
  isDesktop = window.innerWidth > 1024
}

const killAllAnimations = () => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
  if (stickScrollTrigger) stickScrollTrigger.kill() // 스틱 트리거 정리
  if (stickObserver) stickObserver.disconnect() // 스틱 관찰자 정리
  keywordAnimations.forEach(animation => animation.kill())
  emojiScrollTriggers.forEach(trigger => trigger.kill())
  floatingAnimations.forEach(animation => animation.kill())
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars?.trigger === horizontalScroll.value) {
      trigger.kill()
    }
  })
  keywordAnimations = []
  emojiScrollTriggers = []
  floatingAnimations = []
  scrollTriggerInstance = null
  stickScrollTrigger = null
  stickObserver = null
}

// 스틱 관련 애니메이션 초기화 (수정된 버전)
const initStickAnimation = () => {
  if (!stickWrapping.value || !stickImage.value) return

  // IntersectionObserver로 stickWrapping 가시성 감지
  stickObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        isStickFixed.value = entry.isIntersecting
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -90% 0px'
    }
  )
  
  stickObserver.observe(stickWrapping.value)

  
  // 스크롤에 따른 스틱 회전 + 이동 애니메이션
  stickScrollTrigger = ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress
      const rotationValue = progress * 360 * 3 // *번 회전
      
      // Y축 이동 계산
      let yMove = 0
      let finalRotation = rotationValue // 기본적으로는 회전 유지
      let finalScale = 1 // 기본 스케일
      
      // 화면 크기 확인
      const isMobile = window.innerWidth < 1024
      let xMove = 0
      
      // 모바일과 데스크톱 분기 처리
      if (isMobile) {
        // 모바일: 전체 스크롤 진행도 기준으로 처리
        if (progress > 0.6) { // 60% 이후부터 떨어지기 시작
          const fallProgress = Math.min(((progress - 0.6) / 0.4) * 2.5, 1) // 모바일에서 N배 빠르게
          yMove = fallProgress * window.innerHeight * 1.8
          xMove = yMove * -0.08 // y 이동량의 -10%만큼 x축으로 이동
          finalRotation = 0
          finalScale = 1 - (fallProgress * 0.3)
        }
      } else {
        // 데스크톱: 기존 로직 유지
        if (scrollTriggerInstance) {
          const horizontalProgress = scrollTriggerInstance.progress || 0
          
          // horizontalItems의 현재 xPercent 값을 직접 확인
          const currentXPercent = gsap.getProperty(horizontalItems.value, "xPercent")
          
          // -66% 근처에 도달했는지 확인하고, 그 이후 전체 스크롤 진행도에 따라 이동
          if (currentXPercent <= -60) {
            // horizontalScroll 섹션이 끝난 후의 전체 스크롤 진행도 계산
            const horizontalScrollEnd = scrollTriggerInstance.end
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
            
            if (currentScrollY > horizontalScrollEnd) {
              // horizontalScroll 섹션 이후의 스크롤 거리 계산
              const scrollAfterHorizontal = currentScrollY - horizontalScrollEnd
              const totalDocumentHeight = document.documentElement.scrollHeight - window.innerHeight
              const remainingScrollDistance = totalDocumentHeight - horizontalScrollEnd
              
              // 남은 스크롤 거리 대비 현재 스크롤 진행도 (속도 3배 증가)
              const remainingProgress = Math.min((scrollAfterHorizontal / remainingScrollDistance) * 4, 1)
              yMove = remainingProgress * window.innerHeight * 1.3 // 100vh 아래로 빠르게 이동
              xMove = yMove * 0.11 // y 이동량의 10%만큼 x축으로 이동
              finalRotation = 0 // 떨어질 때는 회전 멈춤
              finalScale = 1 - (remainingProgress * 0.3) // 점진적으로 0.7까지 축소
            }
          }
        }
      }
      
      gsap.set(stickImage.value, {
        rotation: finalRotation,
        scale: finalScale,
        y: yMove,
        x: xMove,
        transformOrigin: "center center",
        force3D: true
      })
    }
  })

  // 리사이즈 이벤트 추가 (선택사항)
  const handleResize = () => {
    if (stickScrollTrigger) {
      stickScrollTrigger.refresh()
    }
  }

  window.addEventListener('resize', handleResize)

}

// 이모지 요소들에 GPU 가속 적용
const enableGPUAcceleration = (elements) => {
  elements.forEach(element => {
    if (element) {
      element.style.willChange = 'transform'
      element.style.transform = 'translate3d(0, 0, 0)'
      element.style.backfaceVisibility = 'hidden'
      element.style.perspective = '1000px'
    }
  })
}

// 애니메이션 정리 시 GPU 가속 해제
const disableGPUAcceleration = (elements) => {
  elements.forEach(element => {
    if (element) {
      element.style.willChange = 'auto'
      element.style.transform = ''
      element.style.backfaceVisibility = ''
      element.style.perspective = ''
    }
  })
}

const initAnimations = async () => {
  await nextTick()
  gsap.registerPlugin(ScrollTrigger)

  // 스틱 애니메이션 초기화 추가
  initStickAnimation()

  if (!horizontalScroll.value || !horizontalSticky.value || !horizontalItems.value) {
    console.error('Required elements not found')
    return
  }

  checkScreenSize()
  
  if (window.innerWidth > 1024) {
    // 초기 위치
    gsap.set(keyword1_0.value, { xPercent: -30 })
    gsap.set(keyword2_0.value, { xPercent: 30 })

    // 키워드 등장 (lens 느낌)    
    keywordAnimations.push(
      gsap.to(keyword1_0.value, {
        xPercent: 0,
        ease: "power2.out",
        duration: 2,
        scrollTrigger: {
          trigger: keyword1_0.value,
          start: "top 80%",
          end: "top 40%",
          scrub: 1
        }
      }),
      gsap.to(keyword2_0.value, {
        xPercent: 0,
        ease: "power2.out",
        duration: 2,
        scrollTrigger: {
          trigger: keyword2_0.value,
          start: "top 80%",
          end: "top 40%",
          scrub: 1
        }
      })
    )
  }

  // 각 섹션의 이모지 요소들 가져오기
  const horizontalItemElements = horizontalItems.value.querySelectorAll('.page_horizontalItem')
  const firstSectionEmojis = horizontalItemElements[0]?.querySelectorAll('.page_emoji') || []
  const secondSectionEmojis = horizontalItemElements[1]?.querySelectorAll('.page_emoji') || []
  const thirdSectionEmojis = horizontalItemElements[2]?.querySelectorAll('.page_emoji') || []

  // 모든 이모지에 GPU 가속 적용
  const allEmojis = [...firstSectionEmojis, ...secondSectionEmojis, ...thirdSectionEmojis]
  enableGPUAcceleration(allEmojis)

  // 메인 스크롤 타임라인
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: horizontalScroll.value,
      pin: horizontalSticky.value,
      scrub: 1,
      start: "top top",
      end: "+=250%",
      anticipatePin: 1,
      pinSpacing: isDesktop, // 모바일에서는 pinSpacing false로 설정
      refreshPriority: 1
    }
  })

  if (isDesktop) {
    // 데스크톱: 가로 스크롤
    tl.to({}, { duration: 0.3 })
      .to(horizontalItems.value, {
        xPercent: -33.33,
        ease: "power2.inOut",
        duration: 0.4,
        force3D: true
      })
      .to({}, { duration: 0.3 })
      .to(horizontalItems.value, {
        xPercent: -66.66,
        ease: "power2.inOut",
        duration: 0.4,
        force3D: true
      })
      .to({}, { duration: 0.2 })
  } else {
    // 모바일: 세로 스크롤 - 각 섹션에서 더 오래 머물기, 부드러운 전환
    tl.to({}, { duration: 0.15 })  // 시작 여백 더 감소
      .to(horizontalItems.value, {
        yPercent: -33.33,
        ease: "power1.inOut",  // 더 부드러운 easing
        duration: 0.6,  // 이동 시간 더 감소
        force3D: true
      })
      .to({}, { duration: 1 })  // 첫 번째 섹션 머무는 시간 더 증가
      .to(horizontalItems.value, {
        yPercent: -66.66,
        ease: "power1.inOut",  // 더 부드러운 easing
        duration: 0.6,  // 이동 시간 더 감소
        force3D: true
      })
      .to({}, { duration: 1 })  // 두 번째 섹션 머무는 시간 더 증가
  }

  scrollTriggerInstance = tl.scrollTrigger

  // 이모지 parallax 효과 (수정된 버전)
  if (isDesktop) {
    // 첫 번째 섹션 이모지들
    firstSectionEmojis.forEach((emoji, index) => {
      // 초기 위치 설정
      gsap.set(emoji, { x: 0, force3D: true })
      
      const parallaxTrigger = ScrollTrigger.create({
        trigger: horizontalScroll.value,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        refreshPriority: 0,
        onUpdate: (self) => {
          const progress = self.progress
          let moveX = 0
          
          if (progress <= 0.4) {
            // 1->2 전환 구간: 첫 번째 섹션 이모지가 왼쪽으로 나감
            const localProgress = progress / 0.4
            moveX = localProgress * -(100 + index * 30)
          } else {
            // 완전히 왼쪽으로 이동한 상태 유지
            moveX = -(500 + index * 80)
          }
          
          gsap.set(emoji, { 
            x: moveX,
            force3D: true
          })
        }
      })
      emojiScrollTriggers.push(parallaxTrigger)
    })

    // 두 번째 섹션 이모지들
    secondSectionEmojis.forEach((emoji, index) => {
      // 초기 위치: 오른쪽에서 시작
      gsap.set(emoji, { x: 100 + index * 20, force3D: true })
      
      const parallaxTrigger = ScrollTrigger.create({
        trigger: horizontalScroll.value,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        refreshPriority: 0,
        onUpdate: (self) => {
          const progress = self.progress
          let moveX = 100 + index * 20 // 초기 오른쪽 위치
          
          if (progress >= 0.1 && progress <= 0.4) {
            // 1->2 전환 구간: 오른쪽에서 중앙으로 들어옴
            const localProgress = (progress - 0.1) / 0.3
            moveX = (100 + index * 20) - (localProgress * (100 + index * 20))
          } else if (progress > 0.4 && progress <= 0.7) {
            // 2번 섹션 활성화 구간: 중앙에 위치
            moveX = 0
          } else if (progress > 0.7) {
            // 2->3 전환 구간: 중앙에서 왼쪽으로 나감
            const localProgress = (progress - 0.7) / 0.3
            moveX = localProgress * -(80 + index * 25)
          }
          
          gsap.set(emoji, { 
            x: moveX,
            force3D: true
          })
        }
      })
      emojiScrollTriggers.push(parallaxTrigger)
    })

    // 세 번째 섹션 이모지들
    thirdSectionEmojis.forEach((emoji, index) => {
      // 초기 위치: 오른쪽에서 시작
      gsap.set(emoji, { x: 120 + index * 25, force3D: true })
      
      const parallaxTrigger = ScrollTrigger.create({
        trigger: horizontalScroll.value,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        refreshPriority: 0,
        onUpdate: (self) => {
          const progress = self.progress
          let moveX = 120 + index * 25 // 초기 오른쪽 위치
          
          if (progress >= 0.6 && progress <= 0.9) {
            // 2->3 전환 구간: 오른쪽에서 중앙으로 들어옴
            const localProgress = (progress - 0.6) / 0.3
            moveX = (120 + index * 25) - (localProgress * (120 + index * 25))
          } else if (progress > 0.9) {
            // 3번 섹션 활성화 구간: 중앙에 위치
            moveX = 0
          }
          
          gsap.set(emoji, { 
            x: moveX,
            force3D: true
          })
        }
      })
      emojiScrollTriggers.push(parallaxTrigger)
    })
  } else {
    // 모바일: 각 섹션 머무는 시간 증가에 맞춰 타이밍 조정
    
    // 첫 번째 섹션 - 더 오래 머물기
    if (firstSectionEmojis.length > 0) {
      gsap.set(firstSectionEmojis, { 
        y: 50,
        force3D: true
      })
      
      const firstTrigger = ScrollTrigger.create({
        trigger: horizontalScroll.value,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        refreshPriority: 0,
        onUpdate: (self) => {
          const progress = self.progress
          let yPos = 50
          
          if (progress <= 0.25) {
            // 첫 번째 섹션 활성화 구간 (더 오래 머물기)
            const localProgress = progress / 0.25
            yPos = 50 - (localProgress * 50)
          } else {
            yPos = 0
          }
          
          gsap.set(firstSectionEmojis, { 
            y: yPos,
            force3D: true
          })
        }
      })
      emojiScrollTriggers.push(firstTrigger)
    }

    // 두 번째 섹션 - 더 오래 머물기
    if (secondSectionEmojis.length > 0) {
      gsap.set(secondSectionEmojis, { 
        y: 50,
        force3D: true
      })
      
      const secondTrigger = ScrollTrigger.create({
        trigger: horizontalScroll.value,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        refreshPriority: 0,
        onUpdate: (self) => {
          const progress = self.progress
          let yPos = 50
          
          if (progress >= 0.2 && progress <= 0.65) {
            // 두 번째 섹션 등장 및 활성화 구간 (더 오래 머물기)
            const localProgress = (progress - 0.2) / 0.45
            yPos = 50 - (localProgress * 50)
          } else if (progress > 0.65) {
            yPos = 0
          }
          
          gsap.set(secondSectionEmojis, { 
            y: yPos,
            force3D: true
          })
        }
      })
      emojiScrollTriggers.push(secondTrigger)
    }

    // 세 번째 섹션 - 더 오래 머물기
    if (thirdSectionEmojis.length > 0) {
      gsap.set(thirdSectionEmojis, { 
        y: 50,
        force3D: true
      })
      
      const thirdTrigger = ScrollTrigger.create({
        trigger: horizontalScroll.value,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        refreshPriority: 0,
        onUpdate: (self) => {
          const progress = self.progress
          let yPos = 50
          
          if (progress >= 0.5) {
            // 세 번째 섹션 등장 구간 (더 오래 머물기)
            const localProgress = Math.min((progress - 0.5) / 0.4, 1)
            yPos = 50 - (localProgress * 50)
          }
          
          gsap.set(thirdSectionEmojis, { 
            y: yPos,
            force3D: true
          })
        }
      })
      emojiScrollTriggers.push(thirdTrigger)
    }
  }

  // 아래 섹션 등장 애니메이션 - 모바일에서 더 자연스러운 전환
  gsap.set([".page_ingredientDescriptions", ".page_ingredients"], {
    opacity: 0,
    y: isDesktop ? 100 : 50, // 모바일에서 더 부드러운 시작
    force3D: true
  })

  const ingredientsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".page_ingredientsCtn",
      start: isDesktop ? "top 80%" : "top 90%", // 모바일에서 더 늦게 시작
      toggleActions: "play none none none",
      once: true
    }
  })

  ingredientsTimeline
    .to(".page_ingredientDescriptions", {
      opacity: 1,
      y: 0,
      duration: isDesktop ? 0.8 : 1.2, // 모바일에서 더 길게
      ease: "power1.out", // 더 부드러운 easing
      force3D: true
    }, 0)
    .to(".page_ingredients", {
      opacity: 1,
      y: 0,
      duration: isDesktop ? 0.8 : 1.2, // 모바일에서 더 길게
      ease: "power1.out", // 더 부드러운 easing
      force3D: true
    }, 0.2)

  // 모바일 스크롤 기반 슬라이드 애니메이션 (최적화됨)
  if (window.innerWidth < 1024 && ingredients.value) {
    const container = ingredients.value.parentElement
    const containerWidth = container.offsetWidth
    
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize)
    const itemWidth = 5.75 * remToPx
    const gapWidth = 1.6 * remToPx
    const totalContentWidth = (itemWidth * 6) + (gapWidth * 5)
    const additionalMargin = itemWidth * 1.6
    
    if (totalContentWidth > containerWidth) {
      const moveDistance = -(totalContentWidth - containerWidth + additionalMargin)
      
      // GPU 가속 활성화
      ingredients.value.style.willChange = 'transform'
      
      ScrollTrigger.create({
        trigger: ".page_ingredientsCtn",
        start: "top 30%",
        end: "bottom 10%",
        scrub: 0.5,
        refreshPriority: 0,
        onUpdate: (self) => {
          const progress = self.progress
          const xPos = progress * moveDistance
          gsap.set(ingredients.value, { 
            x: xPos,
            y: 0,
            force3D: true
          })
        }
      })
    }
  }

  // 새로고침 지연 시간 단축
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 100)
}

onMounted(async () => {
  await initAnimations()

  // 디바운스된 리사이즈 핸들러
  let resizeTimeout
  const handleResize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      const newIsDesktop = window.innerWidth > 1024
      if (newIsDesktop !== isDesktop) {
        // 기존 이모지들의 GPU 가속 해제
        const allEmojis = document.querySelectorAll('.page_emoji')
        disableGPUAcceleration([...allEmojis])
        
        killAllAnimations()
        initAnimations()
      }
    }, 250)
  }

  window.addEventListener('resize', handleResize, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    
    // 모든 이모지들의 GPU 가속 해제
    const allEmojis = document.querySelectorAll('.page_emoji')
    disableGPUAcceleration([...allEmojis])
    
    killAllAnimations()
  })
})

onUnmounted(() => {
  // 모든 이모지들의 GPU 가속 해제
  const allEmojis = document.querySelectorAll('.page_emoji')
  disableGPUAcceleration([...allEmojis])
  
  killAllAnimations()
})
</script>


<style lang="scss" scoped>
@use '@/styles/contents2' as *;
</style>