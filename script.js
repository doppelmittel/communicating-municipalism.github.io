const popup = document.querySelector('.popup');

function showPopup() {
    popup.classList.add('open');
  }


const about = document.querySelector('.about');

function showAbout() {
    about.classList.add('open');
  }

function hideAbout() {
    about.classList.remove('open');
  }

  


// personOne.addEventListener("mouseout", function () {
//   ellipse1.style.opacity ="0";
//   p1txt.style.opacity ="0";
// });

// personOne.addEventListener("click", function () {
//   infoOne.classList.add('open');
// });



const pOne = document.querySelector('.pone');
const elOne = document.querySelector('.el-one');
const txtOne = document.querySelector('.txt-one');
const blocker = document.querySelector('#blocker');
const infoOne = document.querySelector('.info-one');

pOne.addEventListener("mouseover", function () {
  elOne.style.opacity = "1";
  txtOne.style.opacity = "1";
});

pOne.addEventListener("click", function () {
  blocker.style.display = "block";
  infoOne.classList.add('open');
});

blocker.addEventListener("click", function () {
  blocker.style.display = "none";
  infoOne.classList.remove('open');
});

function hideInfoOne() {
  infoOne.classList.remove('open');
  blocker.style.display = "none";
}



