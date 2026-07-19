import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class EditContactModel extends LightningModal {
    @api header = 'Edit Contact';
    @api body = 'Select an option:';
    @api options = [];
    @api recordId;

    handleOptionClick(e) {
        const { target } = e;
        this.close(parseInt(target.dataset.id, 10));
    }

    handleSuccess() {
        this.close(2);
    }
}