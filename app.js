const btn = document.querySelector('button')
const audioFile = document.querySelector('audio')

btn.addEventListener('click', playClip)

function playClip() {
    audioFile.play()
}