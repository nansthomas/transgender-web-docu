var video   = document.querySelector('#video');

var play    = document.querySelector('#playbutton');
var pause   = document.querySelector('#pausebutton');
var forward = document.querySelector('#forwardbutton');
var rewind  = document.querySelector('#rewindbutton');

var informations = document.querySelector('#informations');
var time;

var range = document.querySelector('input[type="range"]');

// GET DURATION
video.addEventListener('loadedmetadata', function () {
  range.max = video.duration;
});

// UPDATE TIME TO THE VALUE RANGE AND CHANGE COLOR
video.addEventListener('timeupdate', function () {
  range.value = video.currentTime;
  var val = (range.value - range.getAttribute('min')) /
  (range.getAttribute('max') - range.getAttribute('min'));

  range.style.backgroundImage = '-webkit-gradient(linear, left top, right top, ' +
                                'color-stop(' + val + ', #FFFFFF), ' +
                                'color-stop(' + val + ', rgba(0,0,0,0.5))' + ')';
});

// CHANGE VIDEO TIME WHEN INPUT CHANGE
range.addEventListener('input', function () {
  video.currentTime = range.value;
});

// SHOW THE INFOS DIV
function DontShowInfos() {
  informations.style.opacity = 0;
}

// LISTEN MOUSE MOVE
informations.addEventListener('mousemove', function () {
  informations.style.opacity = 100;
  clearTimeout(time);
  time = setTimeout(DontShowInfos, 3000);
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