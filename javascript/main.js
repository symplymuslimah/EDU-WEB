const Education = [
    {
      img: './images/landpage1.jpg',
      description: 'Your bright future is our <br>  mission'
    },
    {
      img: './images/landpage2.jpg',
      description: 'Helping Each of <br> Our Students<br>Fulfill Their Potential'
    },
    {
      img: './images/landpage3.jpg',
      description: 'Education is Life'
    },
  ];

  const Container = document.querySelector('.landing-page-container');
  const TextPage = document.getElementById('textpage');
  const Image = document.getElementById('image');

  let currentItems = 0;
  let interval = 4000;

  window.addEventListener('DOMContentLoaded', function () {
    showData(currentItems);
  });

  function showData() {
    const item = Education[currentItems];
    Image.src = item.img;
    TextPage.innerHTML = item.description;

    currentItems = (currentItems + 1) % Education.length;
  }
   setInterval(showData, interval);


//info number javascript code
document.addEventListener('DOMContentLoaded',function () {
    const Enroll = document.querySelectorAll('.enroll');
    const firstNumber = document.getElementById('firstnumber');
    const secondNumber = document.getElementById('secondnumber');
    const thirdNumber = document.getElementById('thirdnumber');
    const fourthNumber = document.getElementById('fourthnumber');

    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;

    const targetFirst = 20203;
    const targetSecond = 139;
    const targetThird = 99;
    const targetFourth = 100;
    function updateNumber() {
        if (first < targetFirst) {
            first += 90;
        }
        if (second < targetSecond) {
            second += 2;
        }
        if (third < targetThird) {
            third += 1;
        }
        if (fourth < targetFourth) {
            fourth += 2;
        }
        firstNumber.textContent = first;
        secondNumber.textContent = second;
        thirdNumber.textContent = third + "%";
        fourthNumber.textContent = fourth + "%";

        if(first === targetFirst && second===targetSecond && third===targetThird && fourth===targetFourth){
            clearInterval(stopInterval);
        }
        
    }
    setInterval(updateNumber,100);


    
});


// autoplay sliding alumni section js code
document.addEventListener('DOMContentLoaded', function () {
  const imageItems = document.querySelectorAll('.alumni-content'); 
  let currentIndex = 0;

  function showNextImage() {
    imageItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % imageItems.length;
    imageItems[currentIndex].classList.add('active');
  }

  setInterval(showNextImage, 5000);
}); 
   

// location header js code
document.addEventListener('DOMContentLoaded',function () {
    const locationIcon = document.querySelector('.location-icon');
    const headerContent = document.querySelector('.header-content');
    locationIcon.addEventListener('click',function () {
       headerContent.classList.toggle('active');
    })
});

// navigation js code
document.addEventListener('DOMContentLoaded',function () {
  const activeIcon = document.querySelector('.icon-active');
  const cancelIcon = document.querySelector('.icon-cancel');
  const navHeading = document.querySelector('.nav-header');
   activeIcon.addEventListener('click',function () {
     navHeading.classList.add('navigation');
     activeIcon.style.display = 'none';
     cancelIcon.style.display = 'block';
  })
   
  cancelIcon.addEventListener('click',function () {
    navHeading.classList.remove('navigation');
    activeIcon.style.display = 'block';
    cancelIcon.style.display = 'none';
 })
  

});

//SCROLL REVEAL CODE
ScrollReveal({ distance: '120px' });
ScrollReveal().reveal('.container', { origin: 'top', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.welcome-heading,.about-section,.highlight-section,.alumni-section', { origin: 'left', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.info-content,.blog-content,.featured-content,.admission-heading,.footer-content', { origin: 'left', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.teachers-content,.choose-enlight-section,.final-section', { origin: 'bottom', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.admission-enroll', { origin: 'right', delay:200, interval:300,
duration:3000 });