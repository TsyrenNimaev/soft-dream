window.addEventListener('DOMContentLoaded', function () {
  // const productSwiper = ;

  const productSlider = new Swiper(
    document.querySelector('.product_swiper-springs'),
    {
      pagination: {
        el: '.product__swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
    }
  );

  const productSwiperCoconut = new Swiper(
    document.querySelector('.product_swiper_coconut'),
    {
      pagination: {
        el: '.product__swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 70,
    }
  );

  const productSwiperSpringless = new Swiper(
    document.querySelector('.product_swiper-springless'),
    {
      pagination: {
        el: '.product__swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 70,
    }
  );

  const productSwiperJacquard = new Swiper(
    document.querySelector('.product_swiper-jacquard'),
    {
      pagination: {
        el: '.product__swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 70,
    }
  );

  //map

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map('map', {
      center: [51.8388227, 107.64891658],
      zoom: 17,
    });

    var myPlacemark = new ymaps.Placemark(
      [51.8388227, 107.64891658],
      {},
      {
        iconLayout: 'default#image',
        // iconImageHref: 'img/logo.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }

  //модалка
  const modalLinks = document.querySelectorAll('.modal-link');
  const body = document.querySelector('body');

  let unlock = true; //исключить двойное нажатие

  //проверяем и добавляем новую переменную
  if (modalLinks.length > 0) {
    for (let i = 0; i < modalLinks.length; i++) {
      const modalLink = modalLinks[i];
      modalLink.addEventListener('click', function (el) {
        const modalName = modalLink.getAttribute('href').replace('#', '');
        const currentModal = document.getElementById(modalName);
        modalOpen(currentModal);
        el.preventDefault();
      });
    }
  }

  //закрываем окно по кнопке
  const closeIcon = document.querySelectorAll('.close-btn');

  if (closeIcon.length > 0) {
    for (let i = 0; i < closeIcon.length; i++) {
      const el = closeIcon[i];
      el.addEventListener('click', function (e) {
        modalClose(el.closest('.call-back'));
        e.preventDefault();
      });
    }
  }

  //функция для открывания окна
  function modalOpen(currentModal) {
    //проверяем открыто или нет
    if (currentModal && unlock) {
      const modalActive = document.querySelector('.open');
      if (modalActive) {
        modalClose(modalActive, false);
      } else {
        body.classList.add('lock');
      }
      currentModal.classList.add('open');
      currentModal.addEventListener('click', function (el) {
        //закрываем окно при клике на заблюренную область
        if (!el.target.closest('.call-back__content')) {
          modalClose(el.target.closest('.call-back'));
          // document.getElementById('mySelect').focus();
          // document.getElementById('mySelect').select();
        }
      });
    }
  }

  //функция для закрытия окна
  function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
      modalActive.classList.remove('open');
      body.classList.remove('lock');
    }
  }

  //закрываем модалку по клавише esc
  document.addEventListener('keydown', function (el) {
    if (el.which === 27) {
      const modalActive = document.querySelector('.open');
      modalClose(modalActive);
    }
  });

  // показать все
  const showBtn = document.querySelectorAll('.show-container');
  const showContant = document.querySelectorAll('.hidden-container');
  const showMore = document.querySelectorAll('.show-more');

  showBtn.forEach((el, i) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();

      const show = showContant[i].classList;
      if (show.contains('active')) {
        show.remove('active');
        showMore[i].remove('active');
      } else {
        showContant.forEach((el) => el.classList.remove('active'));
        show.add('active');
        showMore.forEach((el) => el.classList.remove('active'));
        showMore[i].classList.add('active');
      }
    });
  });

  /**/
  const modal = new GraphModal();
});
