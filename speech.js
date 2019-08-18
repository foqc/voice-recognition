const btnSpeech = document.querySelector('.btnSpeech');
const speech = document.querySelector('.speech');

const greetings = ['Im fine thank you for asking me!', 'Im well', 'Im good'];

const likes = ['I like to play music', 'I like to play guitar', 'I like to play soccer']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice recognition is activated, now you can talk!');
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    speech.textContent = transcript;
    readOutLoud(transcript);
}

btnSpeech.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I could not understand you';
    if(message.includes('how are you')) {
        speech.text = greetings[Math.floor(Math.random() * greetings.length)];
    }

    speech.volume = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}