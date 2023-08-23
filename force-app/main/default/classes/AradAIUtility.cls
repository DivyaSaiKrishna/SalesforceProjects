/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 07-18-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AradAIUtility {


    @AuraEnabled
    public static List<String> getListOfComands(){
        try {
            return Constant.aradAIComands;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return null;
    }



}