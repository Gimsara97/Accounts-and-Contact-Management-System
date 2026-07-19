import { LightningElement } from 'lwc';

export default class AccountParent extends LightningElement {
    searchTextParent;
    handleEvent(event) {
        // handle event from child
        this.searchTextParent = event.detail;
    }
}