/**
 * @description       : 
 * @author            : Divya sai krishna
 * @group             : 
 * @last modified on  : 05-17-2023
**/
public with sharing class JokeApiClient {
    @AuraEnabled
    public static String fetchJoke() {
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://official-joke-api.appspot.com/jokes/random');
        request.setMethod('GET');
        
        Http http = new Http();
        HttpResponse response = http.send(request);
        
        if (response.getStatusCode() == 200) {
            System.debug('data::'+response.getBody());
            return response.getBody();
        }
        
        return null;
    }
}