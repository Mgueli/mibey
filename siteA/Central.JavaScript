<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>GETTING STARTED WITH BRACKETS</title>
        <meta name="description" content="An interactive getting started guide for Brackets.">
        <link rel="stylesheet" href="Css.css">
    </head>

    <body>
    <ul class="menu">
      <div class="menuToggle"><ion-icon name="add-outline"></ion-icon></div>
      <li style="--i: 0; --clr: #ff2972">
        <a href="#"><ion-icon name="home-outline"></ion-icon></a>
      </li>
      <li style="--i: 1; --clr: #fee800">
        <a href="#"><ion-icon name="settings-outline"></ion-icon></a>
      </li>
      <li style="--i: 2; --clr: #04fc43">
        <a href="#"><ion-icon name="mail-outline"></ion-icon></a>
      </li>
      <li style="--i: 3; --clr: #fe00f1">
        <a href="#"><ion-icon name="key-outline"></ion-icon></a>
      </li>
      <li style="--i: 4; --clr: #00b0fe">
        <a href="#"><ion-icon name="camera-outline"></ion-icon></a>
      </li>
      <li style="--i: 5; --clr: #fea600">
        <a href="#"><ion-icon name="game-controller-outline"></ion-icon></a>
      </li>
      <li style="--i: 6; --clr: #a529ff">
        <a href="#"><ion-icon name="person-outline"></ion-icon></a>
      </li>
      <li style="--i: 7; --clr: #01bdab">
        <a href="#"><ion-icon name="videocam-outline"></ion-icon></a>
      </li>
    </ul>
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>

    <script>
      let menuToggle = document.querySelector(".menuToggle");
      let menu = document.querySelector(".menu");
      menuToggle.onclick = function () {
        menu.classList.toggle("active");
      };
    </script>
const mailIcon = document.querySelector('a[href*="mail-outline"]');
const overlay = document.getElementById('overlay');

mailIcon.addEventListener('click', () => {
  overlay.style.display = 'block';
})
       
    </body>
</html>

