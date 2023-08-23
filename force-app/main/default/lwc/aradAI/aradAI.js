import { LightningElement,track } from 'lwc';

export default class AradAI extends LightningElement {
    recognition = new webkitSpeechRecognition();
    transcription = '';

    connectedCallback() {
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';

        this.recognition.onresult = (event) => {
            const result = event.results[event.results.length - 1];
            if (result.isFinal) {
                this.transcription = result[0].transcript;
                // Process the transcription (e.g., perform actions based on the spoken words)
                console.log('Transcription:', this.transcription);
            }
        };
    }

    handleTranscriptionChange(event) {
        this.transcription = event.target.value;
    }

    startListening() {
        this.recognition.start();
    }

    stopListening() {
        this.recognition.stop();
    }
}