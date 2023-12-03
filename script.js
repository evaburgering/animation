function changeVideo(videoSource, buttonText) {
  var video = document.getElementById('main-video');
  video.src = 'images/' + videoSource;
  video.load();
  video.play();

  var buttonTextElements = document.getElementsByClassName('button-text');
  for (var i = 0; i < buttonTextElements.length; i++) {
    buttonTextElements[i].innerText = '';
  }

  var currentButton = event.currentTarget;
  var buttonTextElement = currentButton.querySelector('.button-text');
  buttonTextElement.innerText = buttonText;
}
