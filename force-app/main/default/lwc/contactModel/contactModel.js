import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class ContactModel extends LightningModal {
    @api header = 'Add Contact';
    @api body = 'Select an option:';
    @api options = [];
    @api recordId;
    @api accountContactId;

    handleOptionClick(e) {
        const { target } = e;
        this.close(parseInt(target.dataset.id, 10));
    }

    handleSuccess() {
        this.close(2);
    }
}