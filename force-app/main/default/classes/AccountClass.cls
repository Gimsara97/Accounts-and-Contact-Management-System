public with sharing class AccountClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts( String searchText) {
        try {
            if(String.isBlank(searchText)) {
                return [SELECT Id, Name FROM Account];
            } else {
                return [SELECT Id, Name, Industry, Phone FROM Account WHERE Name LIKE :('%' + searchText + '%')];
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Contact> getContacts(String accountId) {
        try {
            return [SELECT Id, Name FROM Contact WHERE AccountId = :accountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}