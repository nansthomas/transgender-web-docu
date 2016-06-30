# transgender-web-docu
This is a web-documentaire about the Transgender

## Documentation

To add a FullScreen Player in the page

```html
<div id="video-player">
  <div id="informations"> // You can delete this part
    <div id="principales-actions">
      <img src="playbutton.svg" id="playbutton" class="button">
      <img src="rewindbutton.svg" id="rewindbutton" class="button">
      <img src="pausebutton.svg" id="pausebutton" class="button">
      <img src="forwardbutton.svg" id="forwardbutton" class="button">
    </div>
    <div id="seek"> // You can delete the Seek-bar
      <input id="seek-bar" type="range" value="0" max="100" min="0" step="any">
    </div>
  </div>
  <video id='video' poster="your-poster-url.jpg" autoplay>
    <source src='your-video-url.mp4' type='video/mp4'>
  </video>
</div>
```
