const inputBox = document.querySelector('#input-box');
const encriptButton = document.querySelector('#encript');

const noMessage = document.querySelector('.no-message-found');
const encriptedMessage = document.querySelector('.encripted-message');
const outPut = document.querySelector('#output');
const copyButton = document.querySelector('#copy-button')

encriptButton.addEventListener('click', getInputText);

inputBox.addEventListener('keyup', () => {
    //console.log('keyup');
    if (inputBox.value.length == 0) {
        if(noMessage.classList.contains('invisible')){
            noMessage.classList.remove('invisible');
            encriptedMessage.classList.add('invisible');
        }    
        return
    }
})

function getInputText() {
    // get the text from the input box
    let inputText = inputBox.value;
    //console.log(inputText)

    if (inputText.length == 0) {
        if(noMessage.classList.contains('invisible')){
            noMessage.classList.remove('invisible');
            encriptedMessage.classList.add('invisible');
        }    
        return
    }

    // must work only with non-capital
    let noncapital = inputText.toLowerCase();
    if (inputText != noncapital) {
        console.warn("Hay mayusculas en el text")
        return
    }

    // must not work with special characters and accents
    let regex = /[^\w\sáéíóúñ]/;

    if (regex.test(inputText)) {
        console.warn("Hay caracteres especiales")
        return
    }

    var encriptedText = '';

    for (const index in inputText) {

        //console.log(inputText[index]);

        switch (inputText[index]) {
            case 'a':
                encriptedText = encriptedText + 'ai';
                break;
            case 'e':
                encriptedText = encriptedText + 'enter';
                break;
            case 'i':
                encriptedText = encriptedText + 'imes';
                break;
            case 'o':
                encriptedText = encriptedText + 'ober';
                break;
            case 'u':
                encriptedText = encriptedText + 'ufat';
                break;
            default:
                encriptedText = encriptedText + inputText[index];
                break;

        }
    }

    //console.log(encriptedText);
    noMessage.classList.add('invisible');
    encriptedMessage.classList.remove('invisible');
    outPut.innerHTML = encriptedText;


}
