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

// --- Селект в мобильной версии на главной странице
window.addEventListener('load', () => {
  if (document.getElementById('select') === null) {
    return;
  }
  else {
    const select = document.getElementById('select');
    const select_list = document.getElementById('select_list');
    const select_icon = document.getElementById('select_icon');

    select.children[0].children[0].setAttribute('href', document.querySelector('#select_item').children[0].children[0].children[0].getAttribute('href'));
    select.children[1].textContent = document.querySelector('#select_item').children[0].children[1].textContent;

    select.addEventListener('click', () => {
      select_list.classList.toggle('index-catalogue__aside-list--select--active');
      select_icon.classList.toggle('index-catalogue__select-icon--active');
    })

    select_list.addEventListener('click', (e) => {
      let target = e.target;
      select.children[0].children[0].setAttribute('href', target.children[0].children[0].getAttribute('href'))
      select.children[1].textContent = target.children[1].textContent;
    })
  }
})

// --- Модальное окно с подтверждением
window.addEventListener('load', () => {
  if (document.getElementById('main_form') === null) {
    return;
  }
  else {
    let main_form = document.getElementById('main_form');
    let modal_success = document.getElementById('modal_success');
    let modal_success_close = document.getElementById('modal_success_close');

    main_form.addEventListener('submit', (e) => {
      e.preventDefault();
      modal_success.classList.add('modal-success--active');
      disableBodyScroll(modal_success);
    })

    modal_success_close.addEventListener('click', () => {
      modal_success.classList.remove('modal-success--active');
      enableBodyScroll(modal_success);
    })

    modal_success.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        modal_success.classList.remove('modal-success--active');
        enableBodyScroll(modal_success);
      }
    })
  }
})

// --- Модальное окно с заказом товара
window.addEventListener('load', () => {
  if (document.querySelectorAll('#order_modal_button') === null) {
    return;
  }
  else {
    let order_buttons = document.querySelectorAll('#order_modal_button');
    let modal_order = document.getElementById('modal_order');
    let modal_order_close = document.getElementById('modal_order_close');

    let modal_order_form = document.getElementById('modal_order_form');
    let modal_order_category = document.getElementById('modal_order_category');
    let modal_order_category_input = document.getElementById('modal_order_category_input');
    let modal_order_item = document.getElementById('modal_order_item');
    let modal_order_item_input = document.getElementById('modal_order_item_input');

    order_buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        modal_order.classList.add('modal-order--active');
        disableBodyScroll(modal_order);

        modal_order_category.textContent = button.closest('#order_item').dataset.category;
        modal_order_category_input.value = button.closest('#order_item').dataset.category;

        modal_order_item.textContent = button.closest('#order_item').dataset.name;
        modal_order_item_input.value = button.closest('#order_item').dataset.name;

        console.log(modal_order_category_input.value);
        console.log(modal_order_item_input.value);
      })
    })

    modal_order_close.addEventListener('click', () => {
      modal_order.classList.remove('modal-order--active');
      enableBodyScroll(modal_order);
    })

    modal_order.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        modal_order.classList.remove('modal-order--active');
        enableBodyScroll(modal_order);
      }
    })

    modal_order_form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector('.modal-order__inner').classList.add('modal-order__inner--hidden');
      document.querySelector('.modal-order__success').classList.add('modal-order__success--active');
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