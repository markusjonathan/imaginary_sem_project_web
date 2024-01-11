searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}




let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}


for (let i = 1; i <= 10; i++) {
  let detailForm = document.querySelector(`.detail-form-container${i}`);
  let detailBtn = document.querySelector(`#detail-btn${i}`);
  let closeBtn = document.querySelector(`#close-login-btn${i}`);

  detailBtn.onclick = () => {
      detailForm.classList.toggle('active');
  }

  closeBtn.onclick = () => {
      detailForm.classList.remove('active');
  }
}


window.onscroll = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header2').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header2').classList.remove('active');
    }

    fadeOut();
}




function loader() {
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut() {
  setTimeout(loader, 3000);
}

var swiper = new Swiper(".book-slider", {
    loop:true,
    centerSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centerSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });


  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centerSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centerSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".blog-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centerSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



