function keyDown(e) {
    playSound(e.keyCode);
}

function playSound(dataKey) {
    const audio =  document.querySelector(`audio[data-key="${dataKey}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);
    if(!key) return;
    key.classList.add('playing');
}

function onClick(element) {
    if(!element.dataset.key) return;
    playSound(element.dataset.key)
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', keyDown);
keys.forEach(key => key.addEventListener('transitionend', removeTransition))