import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import ContactInfo from '@salesforce/messageChannel/ContactInfo__c';
import getContacts from '@salesforce/apex/AccountClass.getContacts';
import ContactModel from 'c/contactModel';

export default class ShowAccountContacts extends LightningElement {
    subscription = null;
    @wire(MessageContext) messageContext;
    accountId;
    accountName;
    title = 'Contacts';
    contacts;
    hasContacts;
    isAccountSelected = false;
    demoResult = 'unset';

    connectedCallback() {
        this.handleSubscribe();
    }
    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    handleSubscribe() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                ContactInfo,
                (message) => {
                    this.accountId = message.Id;
                    this.accountName = message.Name;
                    this.title = this.accountName + "'s Contacts";
                    this.getContactInformation();
                    this.isAccountSelected = true;
                }
            );
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    async  getContactInformation() {
        this.contacts = await getContacts({ accountId: this.accountId });
        this.hasContacts = this.contacts.length > 0? true : false;
    }

    async handleAddContact() {
        const result = await ContactModel.open({
            // LightningModal
            size: 'small',
            header: 'Add Contact',
            accountContactId: this.accountName,
            // ModalDemo
            options: [
                { id: 1, variant: 'neutral', label: 'Cancel' }
            ],
        });
        if (result === null) {
            this.demoResult = 'dismiss';
        } else {
            this.demoResult = result;
            this.getContactInformation();
        }
    }

    async handleEditContact(e) {
        const contactId = e.target.dataset.contactId;
        const result = await ContactModel.open({
            // LightningModal
            size: 'small',
            header: 'Edit Contact',
            // Pass contactId as recordId to the modal
            recordId: contactId,
            // ModalDemo
            options: [
                { id: 1, variant: 'neutral', label: 'Cancel' }
            ],
        });
        if (result === null) {
            this.demoResult = 'dismiss';
        } else {
            this.demoResult = result;
            this.getContactInformation();
        }
    }

}