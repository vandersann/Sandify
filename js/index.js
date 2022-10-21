var containerAudio = document.getElementById('containerAudio')
var loaded = false;
var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');


pauseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    document.getElementById('audioplayer').pause();
    return false;
});

playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    document.getElementById('audioplayer').play();
    return false;
});

const playSong = async (file) => {
    if (containerAudio.innerHTML == '') {
        containerAudio.innerHTML = `<audio src="${file}" id="audioplayer"></audio>`;
        if (document.getElementById('audioplayer').paused) {
            document.getElementById('audioplayer').play()
        } else {
            document.getElementById('audioplayer').pause()
        }
    } else if (containerAudio.innerHTML !== `<audio src="${file}" id="audioplayer"></audio>`) {
        if (document.getElementById('audioplayer').paused) {
            document.getElementById('audioplayer').play()
        } else {
            document.getElementById('audioplayer').pause()
        }
        containerAudio.innerHTML = `<audio src="${file}" id="audioplayer"></audio>`
    } else {
        document.getElementById('audioplayer').play()
    }
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}

document.querySelectorAll('.main__col').forEach(item => {

    item.addEventListener('click', event => {
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');
        let playerArtistComponent = document.getElementsByClassName('player__artist');
        playerArtistComponent[0].innerHTML = `<img src="` + image + `" />
        <h3>` + artist + `<br/><span>` + song + `</span></h3>
        `;
        playSong(file)
        document.getElementById('audioplayer').play()
        document.querySelector('div.player').classList.add('active')
    })

});
