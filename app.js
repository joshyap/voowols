// https://mdn.github.io/web-speech-api/speak-easy-synthesis/
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

let replaceVowels = () => {
    inputTextValue = document.getElementById("inputText").value;
    var outputTextValue;

    if (inputTextValue.length < 1) {
        alert('enter a message to translate');
    } else {
        outputTextValue = inputTextValue.replace(/o/g, "oo").replace(/a/g, "o").replace(/e/g, "o").replace(/i/g, "o").replace(/u/g, "o");
        // alert(outputTextValue);
        document.getElementById("outputText").value = outputTextValue;
        speak();
    }   
}

let speak = () => {
    var utterance = new SpeechSynthesisUtterance(outputTextValue);
    window.speechSynthesis.speak(utterance);
}

