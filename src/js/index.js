import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// --- Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');
let nav_list = document.querySelector('.main-nav__nav-list');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobile_menu);
  }
  else {
    enableBodyScroll(mobile_menu);
  }
})

// - Закрытие по клику на пункт меню
nav_list.onclick = function (event) {
  let target = event.target;
  console.log(target.tagName);

  if (target.tagName != 'A') return;

  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  if (mobile_menu.classList.contains('main-nav__nav-menu--mobile--active')) {
    enableBodyScroll(mobile_menu);
  }
};

// --- Табы на главной странице
window.addEventListener('load', () => {
  if (document.querySelector('.index-catalogue__aside-link') === null) {
    return;
  }
  else {
    let tab_links = document.querySelectorAll('.index-catalogue__aside-link');
    let tabs = document.querySelectorAll('.index-catalogue__tab');

    tab_links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        tab_links.forEach((item) => {
          item.classList.remove('index-catalogue__aside-link--active');
        })

        tabs.forEach((value) => {
          value.classList.remove('index-catalogue__tab--active');
        })

        link.classList.add('index-catalogue__aside-link--active');
        document.getElementById(`${link.getAttribute('href').replace('#', '')}`).classList.add('index-catalogue__tab--active');
      })
    })
  }
})

//Селект в мобильной версии на главной странице
window.addEventListener('load', () => {
  if (document.getElementById('select') === null) {
    return;
  }
  else {
    const select = document.getElementById('select');
    const select_list = document.getElementById('select_list');
    const select_items = document.querySelectorAll('#select_item');

    select.addEventListener('click', () => {
      select_list.classList.toggle('index-catalogue__aside-list--select--active');
    })

    select_list.addEventListener('click', (e) => {
      let target = e.target;
      console.log(target.children);
    })
  }
})

//Плавный скроллинг до якорных ссылок
// $('a[href^="#"]').on('click', function (e) {
//   e.preventDefault();

//   var id = $(this).attr('href'),
//     top = $(id).offset().top;

//   $('body,html').animate({
//     scrollTop: top
//   }, 0);
// });