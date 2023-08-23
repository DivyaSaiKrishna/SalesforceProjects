import { LightningElement, track } from 'lwc';
import fetchJokeMethod from '@salesforce/apex/JokeApiClient.fetchJoke';

export default class Joke extends LightningElement {
    //call joke api in salesforce lwc javascript
    @track joke = '';
    @track punchline = '';

    connectedCallback() {
        this.fetchJoke();
      }
    
      fetchJoke() {
        this.joke = 'Loading joke...';
        fetchJokeMethod()
        .then((data) => {
          console.log('Joke data',JSON.parse(data).punchline);
          // Parse the JSON string into a JavaScript object
          this.joke =  JSON.parse(data).setup;
          this.punchline = JSON.parse(data).punchline;
        })
          .catch((error) => {
            console.error('Error fetching joke:', error);
          });
      }
}