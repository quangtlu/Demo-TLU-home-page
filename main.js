const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const historyInput = $('.history-input')
const historySearchItems = $$('.history-input-item')
const searchInput = $('.search-input')
const slides = $$('.slider-img')
const Captions = $$('.caption-slide')
const modalSearch = $('.modal-layout')
const header = $('.header')
const sliderContainer1 = $('.swiper-container1')
const major = $('.major')
const video = $('.video')
const numberWrap = $('.number')
const footer = $('.footer')

var pc = window.matchMedia("(min-width: 1024px)")
var mobile = window.matchMedia("(max-width:739px)")
var tablet = window.matchMedia("(min-width:740px) and (max-width:1023px)")


//display search layout
function closeSearchLayout(){
    modalSearch.style.display = 'none';
}
function openSearchLayout(){
    modalSearch.style.display = 'block';
}

//search history input
historySearchItems.forEach(item => {
    item.onmousedown = function(){
      searchInput.value = item.innerHTML
    }
    item.onmousemove = function(){
      searchInput.placeholder = item.innerHTML
    }
    item.onmouseout = function(){
      searchInput.placeholder = ""
    }
})


searchInput.onfocus = function(){
  historyInput.style.display = "block"
}
searchInput.onblur = function(){
  historyInput.style.display = "none"
}
searchInput.oninput = function(){
    historyInput.style.display = "none"
}

// move page by arow down
const arrowDown = $('.arow-down-btn')
arrowDown.onclick = function(){
  document.documentElement.scrollTop = header.offsetHeight + sliderContainer1.offsetHeight
}

// view menu
const moreContentMobile = $('#more-content-mobile')
const moreLessBtnMobile = $('#read-more-less-mobile')
const moreLessBtn = $('.read-more-less')
const moreContent = $$('.more-menu-item')
const textBtnMore = 'Tất cả ngành học' + `<i class="ti-angle-down more-btn"></i>`
const textBtnLess = "Thu gọn" + `<i class="ti-angle-up more-btn"></i>`
//read less
moreLessBtn.onclick = function(){
  if(moreLessBtn.innerHTML == textBtnLess){
    moreContent.forEach(item => {
      item.style.display = "none"
    })
  moreLessBtn.innerHTML = textBtnMore;
  }
  // read more
  else{
    moreContent.forEach(item => {
      item.style.display = "block"
    })
  moreLessBtn.innerHTML = textBtnLess;
  }
}
//on mobile
moreLessBtnMobile.onclick= function(){
  moreContentMobile.classList.toggle('hideOnMobile')
  if(moreLessBtnMobile.innerHTML == textBtnLess){
    moreLessBtnMobile.innerHTML = textBtnMore
  }
  else{
    moreLessBtnMobile.innerHTML = textBtnLess
  }
}



//Video
const closeVideo = $('.video-close-btn')
const modalVideo = $('.modal-video')
const playBtn = $('.play-btn')
const videoYT = $('.video-youtube')


closeVideo.onclick = closeVideoLayout;
modalVideo.onclick = closeVideoLayout;

function closeVideoLayout(){
  modalVideo.style.display = "none";
  videoYT.src = '';
}
playBtn.onclick = function(){
    if(!mobile.matches){
      modalVideo.style.display = "block";
      videoYT.src = "https://www.youtube.com/embed/jrDWto50IDk?autoplay=1"
    }
    else{
      modalVideo.style.display = "none";
      window.open('https://m.youtube.com/watch?v=ayBDIHcfvCg');
      
    }
}

var prevScrollpos = window.pageYOffset;
// Max scroll height
var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
  document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

//PC 
if(pc.matches){
window.onscroll = function() {
  //show and hide back home button
  if(document.documentElement.scrollTop >= limit - footer.scrollHeight*2 -50){ 
    backBtn.style.display = "block";
    backBtn.classList.add("animate__fadeInDown","animate__animated");
  }
  else{
    backBtn.style.display = "none"
  }
  
  //hide header when scroll down
  //and show when scroll up
    var currentScrollPos = window.pageYOffset;
        //scroll up
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
      // scroll down
    } else {
      header.style.top = "-125px";
    }
    prevScrollpos = currentScrollPos;
  }
}
//Mobile
if(mobile.matches){
  window.onscroll = function() {
    //show and hide back home button
    if(document.documentElement.scrollTop >= 5163){ 
      backBtn.style.display = "block";
      backBtn.classList.add("animate__fadeInDown","animate__animated");
    }
    else{
      backBtn.style.display = "none"
    }
  }
}
//Tablet
if(tablet.matches){
  window.onscroll = function() {
    //show and hide back home button
    if(document.documentElement.scrollTop >= 4160){ 
      backBtn.style.display = "block";
      backBtn.classList.add("animate__fadeInDown","animate__animated");
    }
    else{
      backBtn.style.display = "none"
    }
  }
}
// back to the home page button
const backBtn = $('.back-to-home-btn')

backBtn.onclick = function(){
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
// Mobile - tablet
// menu
menuBtn = $('.menu-btn')
closeBtn = $('.close-menu-mobile-tablet')
menuLayout = $('.layout-menu-sidebar')
//show menu 
function showMenu(){
  menuLayout.style.animation = "fadeInRight 1s"
  menuLayout.classList.add('showOnMobileTablet')
  menuBtn.classList.remove('showOnMobileTablet')
  closeBtn.classList.add('showOnMobileTablet')

}
function hideMenu(){
  menuLayout.classList.remove('showOnMobileTablet')
  closeBtn.classList.remove('showOnMobileTablet')
  menuBtn.classList.add('showOnMobileTablet')
}

menuBtn.onclick = showMenu;
closeBtn.onclick = hideMenu;



//show/hide sunmenu in Menu child

const menuChild_HasSubMenus = $$('.menu-child-has-subMenu')

const linkHasMenuChilds = $$('.hasMenuChild')
const returns = $$('.return')




for(const hasMenuChild of linkHasMenuChilds){
  hasMenuChild.addEventListener('click',function(event){

    if(this.children[1].classList.contains("showOnMobileTablet") == false){
      this.children[1].classList.add("showOnMobileTablet");
    }
    event.stopPropagation()
  })
}
for(const returnBtn of returns){
  returnBtn.addEventListener('click',function(event){
    if(this.parentElement.classList.contains("showOnMobileTablet") == true){
      this.parentElement.classList.remove("showOnMobileTablet");
    }
    event.stopPropagation()
  })
}


for(const hasSubMenu of menuChild_HasSubMenus){
  hasSubMenu.addEventListener('click',function(event){
    this.children[1].classList.toggle("showOnMobileTablet");
    this.children[0].classList.toggle("opacity-1")
    event.stopPropagation()
  })
}

 