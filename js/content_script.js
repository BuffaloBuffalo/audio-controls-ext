var audioElement = document.querySelectorAll('audio');
for(var i=0; i< audioElement.length; i++){
  audioElement[i].setAttribute('controls', '');
}
