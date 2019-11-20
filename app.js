// https://mdn.github.io/web-speech-api/speak-easy-synthesis/
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

// init the speech synthesis api
const synth = window.speechSynthesis;

// grabbing the DOM elements
const textForm = document.querySelector("form"); // ?
const textInput = document.getElementById("outputText"); // ? 
const voiceSelect = document.getElementById("voice-select");
const rate = document.getElementById("rate");
const rateValue = document.getElementById("rate-value");
const pitch = document.getElementById("pitch");
const pitchValue = document.getElementById("pitch-value");

// init the array of default fetched voices
let voices =[];

const getVoices = () => {
    voices = synth.getVoices();
    // console.log(voices);
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name + '(' + voice.lang + ')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}

getVoices();
// this event isn't supported in firefox so have to call it here
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

// OG
const replaceVowels = () => {
    let inputTextValue = document.getElementById("inputText").value;

    if (inputTextValue.length < 1) {
        alert('enter a message to translate');
    } else {
        outputTextValue = inputTextValue.replace(/o/g, "oo").replace(/a/g, "o").replace(/e/g, "o").replace(/i/g, "o").replace(/u/g, "o");
        document.getElementById("outputText").value = outputTextValue;
        // speak();
    }   
}



const speak = () => {
    // check if speaking already
    if (synth.speaking) {
        console.error('Already speaking...');
        return;
    }

    replaceVowels();

    if (textInput.value !== '') {
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        
        // run when done speaking
        speakText.onend = e => {
            console.log('Done speaking...');
        }

        // error check
        speakText.onerror = e => {
            console.error('Something went wrong :(');
        }

        // select voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        // loop through the voice options
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });

        // set the rate and pitch
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        synth.speak(speakText);
    }
}


// event listeners
textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak();
    textInput.blur();
});

rate.addEventListener('change', e => rateValue.textContent = rate.value);
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

// voiceSelect.addEventListener('change', e => speak());

