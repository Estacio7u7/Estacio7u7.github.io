// text areas
const inputBox = document.querySelector('#input-box');
const outPut = document.querySelector('#output');

// areas which contains interface elements
const noMessage = document.querySelector('.no-message-found');
const encriptedMessage = document.querySelector('.encripted-message');

// interface buttons
const encriptButton = document.querySelector('#encript');
const unencriptButton = document.querySelector('#unencript');
const copyButton = document.querySelector('#copy-button');

// event listeners
encriptButton.addEventListener('click', () => {
    if (inputBox.value.length != 0) encript(inputBox.value);
});

unencriptButton.addEventListener('click', () => {
    if (inputBox.value.length != 0) unencript(inputBox.value);
})

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(outPut.innerHTML);
})

inputBox.addEventListener('keyup', () => {
    // If the input-box is empty show the boy and the headers
    if (inputBox.value.length == 0) {
        if (noMessage.classList.contains('invisible')) {
            // hide the output of the messages
            encriptedMessage.classList.add('invisible');
            // show the warning that there is no text
            noMessage.classList.remove('invisible');
        }
    }
})

// functions

// Encription keys
const encriptionRules = [
    {
        in: 'e',
        out: 'enter',
    },
    {
        in: 'i',
        out: 'imes',
    },
    {
        in: 'a',
        out: 'ai',
    },
    {
        in: 'o',
        out: 'ober',
    },
    {
        in: 'u',
        out: 'ufat',
    },
]

function encript(textToEncript) {

    // encript according to the rules provided (new way)
    if (isEncriptable(textToEncript)) {
        encriptionRules.forEach(key => {
            textToEncript = textToEncript.split(key.in).join(key.out);
        });
        //show the text on the screen
        showOutput(textToEncript);
    }

    /*/ encript according to the rules provided (old way)
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
    */
}

function unencript(textToUnencript) {
    // unencript the provided text
    if (isEncriptable(textToUnencript)) {
        encriptionRules.forEach(key => {
            textToUnencript = textToUnencript.split(key.out).join(key.in);
        })
        // show the text on the screen
        showOutput(textToUnencript);
    }
}

function isEncriptable(inputText) {
    // must work only with non-capital
    let noncapital = inputText.toLowerCase();
    if (inputText != noncapital) {
        console.warn("Hay mayusculas en el text")
        return false
    }

    // must not work with special characters and accents
    let regex = /[^\w\sáéíóúñ]/;
    if (regex.test(inputText)) {
        console.warn("Hay caracteres especiales")
        return false
    }
    return true;
}

function showOutput(outputText) {
    // hide warning that there is no text
    noMessage.classList.add('invisible');

    // show the message box
    encriptedMessage.classList.remove('invisible');
    
    // edit the paragraph and show the text
    outPut.innerHTML = outputText;
}