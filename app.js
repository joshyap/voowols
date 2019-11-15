let convertText = (i) => {
    let inputTextValue = document.getElementById("inputText").value;
    let outputTextValue;
    
    if (inputTextValue.length < 1) {
        alert('enter a message to translate');
    } else {
        alert(inputTextValue);
    }

    outputTextValue = 'output';
    document.getElementById("outputText").value = outputTextValue;
}

let replaceVowels = str => {
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i).toLowerCase() == "A" || str.charAt(i).toLowerCase() == "E" || str.charAt(i).toLowerCase() == "I" || str.charAt(i).toLowerCase() == "O" || str.charAt(i).toLowerCase() == "U") {
            str.replace(str(i), "o");
        }
        return str;
    }
}