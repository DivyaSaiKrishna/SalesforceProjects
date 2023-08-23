/**
 * @description       : 
 * @author            : Divya Sai Krishna
 * @group             : 
 * @last modified on  : 07-13-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class CustomUserIntegration {
    
   

    public static void createCustomUser(){
         final String url = 'https://reqres.in/api/users/';

         final Integer callTimes = 10;
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setMethod('GET');
        httpRequest.setHeader('Content-Type', 'application/json');

        Http http = new Http();
        HttpResponse httpResponse = new HttpResponse();

        for(Integer i=1;i<callTimes;i++){
            String baseUrl = url;
            baseUrl+=String.valueOf(i);
            httpRequest.setEndpoint(baseUrl);
            httpResponse = http.send(httpRequest);

            if(httpResponse.getStatusCode() == 200 && httpResponse.getStatus() == 'OK'){
                    String responseBody = httpResponse.getBody();
                    System.debug(responseBody);
            }
            
        }

       
    }

   /* @httpGet
    public List<Custom_User__c> getAllCustomUser(){

    }*/
    

}
