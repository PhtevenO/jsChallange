let dataArr = [{key: '65', sound: 'boom'}, {key: '83', sound: 'clap'}, {key: '68', sound: 'hihat'}, {key: '70', sound: 'kick'}, {key: '71', sound: 'openhat'},{key: '72', sound: 'ride'},{key: '74', sound: 'snare'}, {key: '75', sound: 'tink'}, {key: '76', sound: 'tom'}];
console.log(dataArr);
function createKey(){
    let keyDiv = document.getElementById('keyDiv')// Main div for all keys
    dataArr.forEach(keys => {                      //for cycle to go through all objects and get data
        let keyName = document.createElement('div'); //create key div
        keyName.setAttribute('data-key',keys.key);
        keyName.setAttribute('class','key');
        let letterDi = document.createElement('kbd'); //create key
        let letter = document.createTextNode(String.fromCharCode(keys.key)); //create key node element
        letterDi.appendChild(letter);
        keyName.appendChild(letterDi);
        keyDiv.appendChild(keyName);
        // console.log('done');
        let soundDiv = document.createElement('audio'); // create audio element
        soundDiv.setAttribute('data-key', keys.key);
        soundDiv.setAttribute('src', `audioFiles/${keys.sound}.wav`);
        document.querySelector('body').appendChild(soundDiv);

    })
   
}

createKey();

window.addEventListener('keydown', event =>{
    // console.log(event.keyCode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();
    const divS = document.querySelector(`div[data-key="${event.keyCode}"]`);
    divS.classList.add('active');
    const div = document.querySelectorAll(`.key`);
    div.forEach(key => key.addEventListener('transitionend', removeTransition))
    // div.classList.add('active');
})

function removeTransition(e){
// console.log(e);
if(e.propertyName !== 'transform') return;//skip if not transition
this.classList.remove('active');
}

