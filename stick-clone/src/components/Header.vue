<template>
<div class="navbar">
    <header class="header">
        <div class="header-inner navbar-gnb">
            <div class="navbar-logo"><a href="/kr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 177 55" class="logo--sub"><g clip-path="url(#logo_svg__a)"><path fill="#666464" d="M2.625 0c1.542.343 3.278.436 4.59 1.584.591.508 1.124 1.177 1.373 2.024-.156.036-.427-.15-.636-.134-2.058-.147-3.196-.755-3.95-2.044C3.594.853 3.46.692 3.337.555 3.08.273 2.628 0 2.628 0M13.12 10.225a2.067 2.067 0 0 0 2.074-2.066 2.07 2.07 0 0 0-2.075-2.067 2.066 2.066 0 1 0 0 4.132M5.447 19.578a2.577 2.577 0 0 0 2.37-2.763 2.573 2.573 0 0 0-2.77-2.363 2.58 2.58 0 0 0-2.371 2.763 2.58 2.58 0 0 0 2.773 2.364"></path><path fill="#666464" d="M17.459 13.08a8.6 8.6 0 0 0-1.068-4.172 3.36 3.36 0 0 1-6.63-.749c0-1.453.925-2.686 2.222-3.151a8.7 8.7 0 0 0-3.248-.625c-1.545 0-2.994.4-4.256 1.099h3.354v6.35H6.512V9.255H2.621V8.172h3.891V6.558H2.956A8.66 8.66 0 0 0 0 13.081c0 1.745.514 3.367 1.397 4.726a6 6 0 0 1-.067-.491c-.171-2.156 1.447-4.039 3.615-4.21a3.93 3.93 0 0 1 4.22 3.607A3.9 3.9 0 0 1 7.97 19.84l1.645.673-.643 1.033-2.112-.963c-.4.186-.842.3-1.314.334a3.3 3.3 0 0 1-.618-.004 8.7 8.7 0 0 0 3.804.867 8.73 8.73 0 0 0 4.454-1.215v-5.607l-1.794 1.143v-1.326l2.064-1.337h1.227v6.003a8.66 8.66 0 0 0 2.774-6.363M31.741 12.79h-2.254c.387-.513.711-1.262.975-2.257q.392-1.494.44-2.682a.8.8 0 0 0-.087-.423q-.099-.179-.395-.194h-7.237l-.616-.004h-1.345c0 .044.018.083.035.117l.53.595c.102.092.18.156.243.177q.087.037.32.037h6.432q0 .391-.02.806-.026.405-.051.828a3.4 3.4 0 0 1-1.186.247q-.616.025-1.962.024h-3.13c-.117 0-.227 0-.32-.006h-1.13q.01.073.068.162l.542.636q.074.077.153.107.077.044.237.05h3.916c.702 0 1.255-.038 1.675-.118a3.8 3.8 0 0 0 1.067-.356q-.081.752-.185 1.364-.092.61-.167.887h-8.463c.008.04.03.085.053.131l.366.52a.7.7 0 0 0 .219.205c.067.045.19.072.342.072h2.274v5.48c0 .128.029.213.082.273q.09.076.271.076h.326c.28 0 .521-.123.706-.364.183-.24.285-.508.285-.81v-4.657h2.497v5.48c0 .129.024.213.082.273q.087.075.274.076h.292c.28 0 .513-.122.71-.363q.278-.358.277-.81v-4.657h2.86q.64.052.64-.435c0-.324-.213-.493-.64-.493M34.892 11.052c.591.423 1.324.635 2.18.635q1.284-.001 2.179-.643c.599-.426.893-.982.893-1.653 0-.672-.294-1.24-.893-1.662-.597-.423-1.327-.633-2.179-.633s-1.589.207-2.18.616c-.599.422-.896.976-.896 1.679 0 .702.297 1.239.896 1.661m1.25-2.692c.281-.268.59-.398.93-.398s.65.131.938.398c.285.262.428.608.428 1.029s-.143.767-.428 1.028c-.29.26-.597.385-.938.385s-.649-.13-.93-.399q-.428-.392-.426-1.014c0-.415.141-.768.425-1.029M35.984 15.003c0 .133.013.22.043.273q.054.075.235.074h.72c.282 0 .49-.079.634-.249q.212-.248.213-.704v-1.221h.467c.931 0 1.66-.07 2.194-.2q.797-.204 1.26-.493c.165-.107.226-.218.202-.342-.031-.12-.14-.155-.351-.104a6.7 6.7 0 0 1-1.212.189c-.432.027-1.186.04-2.252.04h-3.681q-.189 0-.337-.003h-1.37a.4.4 0 0 0 .045.12l.427.534c.085.085.163.147.243.192.09.045.237.067.456.067h2.06v1.829z"></path><path fill="#666464" d="M40.162 14.049h-1.091v.02a.46.46 0 0 0 .102.227l.41.508c.056.065.101.108.147.125a.5.5 0 0 0 .16.024h2.475v1.091a.6.6 0 0 0 .044.271c.035.054.109.077.231.077h.624c.281 0 .491-.107.64-.323.143-.219.209-.476.209-.775v-8.01c0-.03-.01-.078-.028-.154q-.029-.106-.254-.135h-1.188c-.149.02-.232.062-.253.135a.7.7 0 0 0-.024.153v6.772h-2.09c-.038 0-.08 0-.112-.005M43.803 18.744h-5.137c-.367 0-.602-.067-.694-.2-.097-.137-.145-.364-.155-.677V16.22q-.001-.23-.268-.332h-1.31c-.178.07-.263.177-.263.327l-.007 1.987q.001.805.505 1.066.511.257.889.258h6.439c.354 0 .533-.125.533-.386q-.002-.392-.533-.393"></path><path fill="#003C8A" d="M105.786 28.382h5.696V6.464H91.517v5.083h14.269v5.204h-14.27v4.728h14.27zM124.519 22.129h-2.85V5.797h-5.495v37.138h5.495V27.287h2.85v15.648h5.304V5.797h-5.304z"></path><path fill="#003C8A" d="M102.225 26.611h-5.89v8.568h-8.196v4.985h25.877v-4.985h-11.791zM160.972 35.043h-10.725v-3.208c4.383-1.159 7.315-4.61 7.315-8.639 0-2.422-1.063-4.714-2.995-6.45-1.916-1.725-4.43-2.675-7.079-2.675-5.607 0-10.17 4.094-10.17 9.125 0 3.929 2.819 7.378 7.034 8.633v3.213h-10.138V40.2h26.755v-5.157zm-13.483-15.81c2.31 0 4.189 1.779 4.189 3.963s-1.879 3.88-4.189 3.88-4.283-1.704-4.283-3.88c0-2.175 1.921-3.962 4.283-3.962M159.291 7.462h-8.672V1.876h-6.452v5.586h-8.33v5.245h23.454zM169.826 22.136V6.313h-5.886v36.711h5.886v-15.73h6.852v-5.158zM150.919 43.01h-5.884v10.916h24.602v-5.158h-18.718zM82.344 6.372h-5.9v27.789h5.9V21.963h5.568v-5.155h-5.568zM70.148 29.524l4.577-3.59L60.228 5.93 45.696 25.919l4.578 3.599 9.938-13.257zM70.65 35.186c-6.07 0-11.01 4.439-11.01 9.895S64.578 55 70.65 55c6.07 0 11.009-4.45 11.009-9.92 0-5.471-4.938-9.896-11.01-9.896m0 14.74c-2.979 0-5.312-2.128-5.312-4.847s2.333-4.826 5.311-4.826c2.979 0 5.226 2.076 5.226 4.826s-2.247 4.847-5.226 4.847"></path></g><defs><clipPath id="logo_svg__a"><path fill="#fff" d="M0 0h176.678v55H0z"></path></clipPath></defs></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 45" class="logo-mobile--sub"><g fill="#666464" clip-path="url(#logo_mobile_svg__a)"><path d="M24.66 0c.936.21 1.99.267 2.786.968.359.31.682.719.833 1.237-.095.021-.26-.092-.386-.082-1.249-.09-1.94-.462-2.397-1.25a6 6 0 0 0-.405-.534C24.936.166 24.662 0 24.662 0M31.029 6.247c.697 0 1.259-.564 1.259-1.261a1.26 1.26 0 1 0-2.518 0c0 .698.56 1.261 1.259 1.261M26.374 11.96a1.571 1.571 0 0 0-.243-3.13 1.572 1.572 0 0 0 .244 3.132"></path><path d="M33.663 7.992c0-.923-.232-1.792-.648-2.55A2.04 2.04 0 0 1 31.03 7.03a2.04 2.04 0 0 1-2.038-2.045c0-.888.562-1.641 1.349-1.925a5.287 5.287 0 0 0-4.555.29h2.036v3.88h-.802V5.654h-2.362v-.66h2.362v-.987h-2.158a5.3 5.3 0 0 0-1.795 3.985c0 1.066.312 2.057.848 2.888a2.39 2.39 0 0 1 2.154-2.872 2.39 2.39 0 0 1 2.562 2.203 2.39 2.39 0 0 1-.726 1.91l.999.412-.39.632-1.282-.59a2.3 2.3 0 0 1-.799.205q-.188.016-.375-.002c.696.34 1.48.53 2.31.53.985 0 1.912-.272 2.703-.743V9.139l-1.089.698v-.81l1.253-.817h.745v3.668a5.3 5.3 0 0 0 1.684-3.888M42.334 7.815h-1.369c.235-.314.432-.771.592-1.379q.238-.913.268-1.639a.5.5 0 0 0-.054-.258q-.06-.11-.24-.118H37.14l-.374-.003h-.816c0 .027.01.05.021.072l.321.363a.5.5 0 0 0 .148.108q.053.024.194.023h3.904q0 .239-.012.492-.016.248-.03.506-.343.14-.72.151-.375.015-1.192.015h-1.9q-.107.001-.193-.004h-.686q.006.045.04.1l.33.388q.044.046.093.065a.3.3 0 0 0 .143.031h2.378q.636 0 1.016-.073.383-.075.648-.217-.05.46-.112.833-.056.374-.102.542h-5.136c.004.025.018.052.031.08l.223.318q.066.09.132.126a.4.4 0 0 0 .208.043h1.38v3.348c0 .079.018.13.05.167q.053.045.165.046h.198c.17 0 .316-.074.428-.222a.8.8 0 0 0 .173-.494V8.379h1.516v3.349c0 .078.014.13.05.166q.052.046.166.046h.177q.254 0 .43-.221a.8.8 0 0 0 .169-.495V8.378h1.736q.388.032.388-.265 0-.3-.388-.301M44.243 6.753c.36.259.804.388 1.324.388q.78 0 1.322-.393c.363-.26.542-.6.542-1.01s-.179-.758-.542-1.015q-.546-.388-1.322-.387c-.517 0-.965.126-1.324.377q-.544.383-.544 1.025c0 .43.181.757.544 1.015m.759-1.645a.8.8 0 0 1 .565-.243q.307 0 .57.243a.82.82 0 0 1 .258.63.82.82 0 0 1-.259.627.83.83 0 0 1-.57.236.8.8 0 0 1-.564-.244.8.8 0 0 1-.259-.62c0-.254.086-.47.259-.629M44.909 9.166q0 .12.026.166.032.046.143.046h.437q.254.002.384-.152.13-.152.13-.43V8.05h.283q.846-.002 1.332-.122.483-.125.764-.302c.1-.065.138-.133.123-.209-.019-.073-.085-.094-.213-.064a4 4 0 0 1-.736.116q-.395.025-1.367.025h-2.234q-.115 0-.204-.002h-.832q.007.031.027.073l.26.326q.075.077.147.118a.7.7 0 0 0 .277.04h1.25v1.118z"></path><path d="M47.444 8.583h-.663v.013a.3.3 0 0 0 .063.138l.248.31c.035.04.062.067.09.077a.3.3 0 0 0 .096.015h1.503v.667q0 .117.027.165.03.048.14.047h.379a.44.44 0 0 0 .388-.197.85.85 0 0 0 .127-.474V4.45a.5.5 0 0 0-.017-.094q-.018-.064-.154-.083h-.721q-.135.018-.154.083a.5.5 0 0 0-.014.094v4.137h-1.27c-.022 0-.047 0-.067-.003M49.654 11.452h-3.119c-.222 0-.365-.04-.42-.122-.06-.084-.089-.223-.095-.414V9.91q0-.14-.163-.203h-.795q-.16.063-.159.2l-.005 1.214q0 .492.307.651.311.158.54.158h3.908q.323.001.323-.236-.001-.24-.323-.24"></path></g><path fill="#003C8A" d="M33.82 29.774h3.206V17.236H25.79v2.908h8.031v2.977h-8.03v2.705h8.03zM44.365 26.196h-1.604v-9.343h-3.093v21.245h3.093v-8.951h1.604v8.95h2.986V16.855h-2.986z"></path><path fill="#003C8A" d="M31.819 28.76h-3.316v4.901h-4.612v2.851h14.564v-2.85H31.82zM64.881 33.584h-6.036V31.75c2.467-.663 4.117-2.638 4.117-4.942 0-1.386-.599-2.697-1.686-3.69a5.88 5.88 0 0 0-3.984-1.53c-3.156 0-5.724 2.342-5.724 5.22 0 2.247 1.587 4.22 3.959 4.938v1.838H49.82v2.95h15.06v-2.95zm-7.588-9.043c1.3 0 2.357 1.017 2.357 2.267s-1.057 2.22-2.357 2.22-2.411-.975-2.411-2.22c0-1.244 1.081-2.267 2.41-2.267M63.936 17.807h-4.881V14.61h-3.632v3.196h-4.689v3h13.201zM69.868 26.2v-9.052h-3.313V38.15h3.313v-8.998h3.856v-2.95zM59.226 38.143h-3.312v6.244h13.847v-2.951H59.226zM20.626 17.184h-3.321V33.08h3.32v-6.978h3.134v-2.949h-3.134zM13.763 30.426l2.576-2.053L8.18 16.93 0 28.364l2.577 2.059L8.17 22.84zM14.044 33.666c-3.416 0-6.196 2.54-6.196 5.66 0 3.122 2.779 5.676 6.196 5.676s6.197-2.546 6.197-5.675-2.78-5.661-6.197-5.661m0 8.432c-1.676 0-2.99-1.217-2.99-2.772 0-1.556 1.314-2.761 2.99-2.761s2.941 1.187 2.941 2.76c0 1.574-1.264 2.773-2.94 2.773"></path><defs><clipPath id="logo_mobile_svg__a"><path fill="#fff" d="M23.066 0H50.38v13.442H23.066z"></path></clipPath></defs></svg>
            </a></div>

            <div class="navbar-util">
                <button class="icon-button qa-btn"><a href="/kr/contact/customer"><div class="qa-btn__text"><p>문의하기</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.663 17.62a7.95 7.95 0 0 1-5.815 2.336C8.998 19.895 4 19.94 4 19.94s.044-5.058.042-7.957a7.982 7.982 0 0 1 13.622-5.648 7.98 7.98 0 0 1 0 11.285" clip-rule="evenodd"></path><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8.813 12.309h-.086M12.042 12.309h-.085M15.272 12.309h-.085"></path></svg></div></a></button>

                <button class="icon-button offcanvas-open" @click="openPanel"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><g filter="url(#util_ham_svg__a)"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" clip-path="url(#util_ham_svg__b)"><path d="M13 23.9h22M13 14h22M13 33.8h22"></path></g></g><defs><clipPath id="util_ham_svg__b"><rect width="48" height="48" fill="#fff" rx="10"></rect></clipPath><filter id="util_ham_svg__a" width="186.125" height="186.125" x="-69.063" y="-69.063" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="34.531"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_94_3649"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_94_3649" result="shape"></feBlend></filter></defs></svg></button>
            </div>
        </div>
    </header>
    <div class="offcanvas" ref="offcanvasRef" >
        <div class="offcanvas-header ">
            <a href="https://100.samyang.com/kr" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 793 107" class="offcanvas-header-content"><path fill="#181878" d="M749.2 39.3v17.3h23.2v10.5l-.2.1c-5.7 2.5-14.6 3.9-23.7 3.9-18.1 0-30.2-10.5-30.2-26.2 0-15.5 12.1-25.9 30.2-25.9 9.4 0 21 2.8 33.6 8l7.3-17c-13.9-6.3-28.1-9.7-41-9.7-29.8 0-50.7 18.3-50.7 44.6 0 26.4 20.8 44.9 50.7 44.9 16.2 0 34.6-4.3 44-10.2V39.3zM653.5 2.3v55.8L605.4 2.3h-20.2v85.4h20.1V31.9l48 55.8h20.2V2.3zM528.8 2.3h-36.3l-31.3 71.2v14.3h20.1v-8.6l2-4.9h54.8l2 5v8.5h20.1V73.5zm-38.2 54.1 14.9-36h10.3l14.9 36zM435.4 2.3l-20 47.1H402l-.1-.2-20.3-46.9h-22.2l28.7 65.3h18.6l-17.3 39.2h22.3l46-104.5zM308.4 2.3l-22.5 42.5-22.4-42.5h-31v85.4h20.1V21.8l24.7 45.6h17.1l24.8-45.5v65.8h20.1V2.3zM176.2 2.3h-36.3l-31.3 71.2v14.3h20.1v-8.6l2-4.9h54.8l2 5v8.5h20.1V73.5zM138 56.4l14.9-36h10.3l14.9 36zM43.4 34.8c-13-1.2-23.2-2.4-23.2-8.3 0-3.9 3.9-8.5 22.6-8.5 12.7 0 23.9 2.4 35.3 7.6l7.1-16.3C72.1 3 58.4 0 43.3 0 29.7 0 19 2.4 11.7 7.3 4.5 12.1.8 18.9.8 27.6.8 49.5 25.6 52.1 45.6 54c12.9 1.2 23.1 2.2 23.1 8.2 0 6.1-8.6 9.5-24.2 9.5-13.6 0-24.5-2.5-37.4-8.6L0 79.3c13.5 7.1 27.5 10.4 44 10.4 28.8 0 45.2-10.4 45.2-28.5.2-22.1-25.3-24.5-45.8-26.4"></path></svg>
            </a>
            <div class="offcanvas-util">
                <div class="language-dropdown">
                    <div class="selected-option">kr</div>
                    <ul class="select-options">
                        <li class="select-option">en</li>
                        <li class="select-option">jp</li>
                        <li class="select-option">cn</li>
                    </ul>
                </div>
                <button class="icon-button offcanvas-close offcanvas-header-content" @click="closePanel">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" filter="url(#util_close_svg__a)"><path d="M6 18 18 6M6 6l12 12"></path></g><defs><filter id="util_close_svg__a" width="84" height="84" x="-30" y="-30" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="15"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_576_22236"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_576_22236" result="shape"></feBlend></filter></defs></svg>
                </button>
            </div>
        </div>
        <div class="offcanvas-body ">
            <div class="row categories-row row-50">
                <div class="col categories">
                    <div class="category category--mobile false">브랜드</div>
                    <div class="category category--mobile category--active">제품</div>
                    <a class="category category--desktop false" href="/kr/about">브랜드</a>
                    <a class="category category--desktop category--active" href="/kr/product/sangkwaehwan">제품</a>
                    <a class="category false" href="/kr/media">미디어</a>
                    <a class="category false" href="/kr/news">뉴스</a>
                </div>
                <div class="col">
                    <div class="subcategories false">
                        <div class="category-en">BRAND</div>
                        <a class="subcategory false" href="/kr/about/brand">브랜드 소개</a>
                        <a class="subcategory false" href="/kr/about/history">히스토리</a>
                    </div>
                    <div class="subcategories subcategories--active">
                        <div class="category-en">PRODUCTS</div>
                        <a class="subcategory false" href="/kr/product/sangkwaehwan">상쾌환</a>
                        <a class="subcategory false" href="/kr/product/stick">상쾌환 스틱</a>
                        <a class="subcategory false" href="/kr/product/booster">상쾌환 BOOSTER</a>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 461 650" class="offcanvas-header-svg offcanvas-header-svg--skyblue"><rect width="379.347" height="856" x="359" y="-69" fill="currentColor" rx="189.673" transform="rotate(30 359 -69)"></rect></svg>

            <img alt="packet" loading="lazy" width="804" height="852" decoding="async" data-nimg="1" class="menu-img menu-img--packet menu-img--active" src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fheader%2Fpacket.png&w=828&q=75" style="color: transparent;">
        </div>
        <div class="offcanvas-footer ">
            <div class="offcanvas-footer-links">
                <div class="offcanvas-footer-link">개인정보처리방침</div>
                <div class="offcanvas-divider"></div>
                <div class="offcanvas-footer-link">이용약관</div>
                <div class="offcanvas-divider"></div>
                <div class="offcanvas-footer-link">이메일무단수집거부</div>
                <div class="offcanvas-divider"></div>
                <a class="offcanvas-footer-link" href="/kr/sitemap">사이트맵</a>
            </div>
            <div class="offcanvas-copyright">COPYRIGHT (C) 2024 SAMYANG CORPORATION. ALL RIGHTS RESERVED.</div>
        </div>
    </div>
    <div class="offcanvas-overlay" ref="overlayRef" @click="closePanel"></div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

const offcanvasRef = ref(null)
const overlayRef = ref(null)

const openPanel = () => {
  gsap.to(offcanvasRef.value, {
    x: 0,
    duration: 0.8,
    ease: 'power2.out',
  })

  gsap.to(overlayRef.value, {
    opacity: 1,
    duration: 0.5,
    pointerEvents: 'all',
  })
}

const closePanel = () => {
  gsap.to(offcanvasRef.value, {
    x: '100%',
    duration: 0.8,
    ease: 'power2.inOut',
  })

  gsap.to(overlayRef.value, {
    opacity: 0,
    duration: 0.5,
    pointerEvents: 'none',
  })
}
</script>



<style lang="scss" scoped>
@use '@/styles/header' as *;
</style>