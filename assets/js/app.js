var video   = document.querySelector('#video');

var play    = document.querySelector('#playbutton');
var pause   = document.querySelector('#pausebutton');
var forward = document.querySelector('#forwardbutton');
var rewind  = document.querySelector('#rewindbutton');

var informations = document.querySelector('#informations');
var time;

var range = document.querySelector('input[type="range"]');

// DISABLE ON MOBILE

var size = $(window).width();
if (size <= 768) {
  $.scrollify.disable();
}

if (video) {

  // UPDATE TIME TO THE VALUE RANGE AND CHANGE COLOR
  video.addEventListener('timeupdate', function () {
    range.value = video.currentTime / video.duration * 100;
    var val = (range.value - range.getAttribute('min')) /
    (range.getAttribute('max') - range.getAttribute('min'));

    range.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
                                  'color-stop(' + val + ', #FFFFFF), ' +
                                  'color-stop(' + val + ', rgba(0,0,0,0.5))' + ')';
  });

  // CHANGE VIDEO TIME WHEN INPUT CHANGE
  range.addEventListener('input', function () {
    video.currentTime = (range.value / 100) * video.duration;
    console.log('range value : ' + range.value);
    console.log('duration : ' + video.duration);
    console.log('currentTime : ' + video.currentTime);
  });

  // SHOW THE INFOS DIV
  function DontShowInfos() {
    informations.style.opacity = 0;
  }

  // LISTEN MOUSE MOVE
  informations.addEventListener('mousemove', function () {
    if (size <= 768) {
      informations.style.opacity = 100;
    } else {
      informations.style.opacity = 100;
      clearTimeout(time);
      time = setTimeout(DontShowInfos, 3000);
    }

  });

  // CLICK TO PLAY
  play.addEventListener('click', function () {
    console.log('PLAY');
    video.play();
    play.style.display = 'none';
    pause.style.display = 'block';
    forward.style.display = 'block';
    rewind.style.display = 'block';
  });

  // CLICK TO PAUSE
  pause.addEventListener('click', function () {
    console.log('PAUSE');
    video.pause();
    play.style.display = 'block';
    pause.style.display = 'none';
    forward.style.display = 'none';
    rewind.style.display = 'none';
  });

  // MOUSEDOWN TO FORWARD
  forward.addEventListener('mousedown', function () {
    console.log('Ca avance vite');
    video.playbackRate = 10.0;
  });

  // MOUSEDOWN TO REWIND
  rewind.addEventListener('mousedown', function () {
    console.log('Ca recule vite');
    intervalRewind = setInterval(function () {
      if (video.currentTime == 0) {
        clearInterval(intervalRewind);
      } else {
        video.currentTime -= 0.3;
      }
    }, 30);
  });

  // MOUSEUP TO FORWARD
  forward.addEventListener('mouseup', function () {
    console.log('Ca revient a la normale');
    video.playbackRate = 1;
  });

  // MOUSEUP TO REWIND
  rewind.addEventListener('mouseup', function () {
    console.log('Ca revient a la normale');
    clearInterval(intervalRewind);
    video.play();
  });
}

// TWITTER FLUX

var twitterFlux;
var twitterButton = document.querySelector('#twitter-button');
var twitterClose = document.querySelector('#close-twitter');

setTimeout(function () {
  twitterFlux = document.querySelector('#twitter-widget-0');
}, 400);

twitterButton.addEventListener('click', function () {
  twitterButton.style.display = 'none';
  twitterFlux.style.right = 0;
  twitterFlux.style.opacity = 1;
  setTimeout(function () {
    twitterClose.style.display = 'block';
  }, 500);
});

twitterClose.addEventListener('click', function () {
  twitterFlux.style.right = '-380px';
  twitterFlux.style.opacity = 0;
  twitterClose.style.display = 'none';
  twitterButton.style.display = 'block';
});

// MENU ANIMATION
var body = document.querySelector('body');
var menuButton = document.querySelector('#menu-circle');
var openMenuIcon = document.querySelector('#open-menu');
var closeMenuIcon = document.querySelector('#close-menu');
var menuDeploy = document.querySelector('#menu-content');

// Open Menu
openMenuIcon.addEventListener('click', function () {
  body.style.overflow = 'hidden';
  setTimeout(function () {
    $('body').animate({ scrollTop: 0 }, '300');
  }, 500);

  $.scrollify.disable();
  menuButton.style.transform = 'scale(80)';
  openMenuIcon.style.display = 'none';
  closeMenuIcon.style.display = 'block';
  setTimeout(function () {
    menuDeploy.style.display = 'flex';
  }, 350);
});

// Close Menu
closeMenuIcon.addEventListener('click', function () {
  body.style.overflow = 'auto';
  if (size <= 768) {
    $.scrollify.disable();
  } else {
    $.scrollify.enable();
  }

  menuButton.style.transform = 'scale(1)';
  closeMenuIcon.style.display = 'none';
  menuDeploy.style.display = 'none';
  setTimeout(function () {
    openMenuIcon.style.display = 'block';
  }, 300);
});
