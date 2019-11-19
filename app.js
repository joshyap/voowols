// let convertText = (i) => {
//     let inputTextValue = document.getElementById("inputText").value;
//     let outputTextValue;
    
//     if (inputTextValue.length < 1) {
//         alert('enter a message to translate');
//     } else {
//         alert(inputTextValue);
//     }

//     outputTextValue = 'output';
//     document.getElementById("outputText").value = outputTextValue;
// }

let replaceVowels = inputTextValue => {
    inputTextValue = document.getElementById("inputText").value;
    
    if (inputTextValue.length < 1) {
        alert('enter a message to translate');
    } else {
        // alert(inputTextValue);
        for (let i=0; i<inputTextValue.length; i++) {
            if (inputTextValue.charAt(i).toLowerCase() == "a" || inputTextValue.charAt(i).toLowerCase() == "e" || inputTextValue.charAt(i).toLowerCase() == "i" || inputTextValue.charAt(i).toLowerCase() == "o" || inputTextValue.charAt(i).toLowerCase() == "u") {
                inputTextValue.replace(inputTextValue(i), "o");
            }
        }
        alert(inputTextValue);
        document.getElementById("outputText").value = inputTextValue;
    }
    
    // for (let i=0; i<inputTextValue.length; i++) {
    //     if (inputTextValue.charAt(i).toLowerCase() == "A" || inputTextValue.charAt(i).toLowerCase() == "E" || inputTextValue.charAt(i).toLowerCase() == "I" || inputTextValue.charAt(i).toLowerCase() == "O" || inputTextValue.charAt(i).toLowerCase() == "U") {
    //         inputTextValue.replace(inputTextValue(i), "o");
    //     }
    //     return inputTextValue;
    // }
    
}