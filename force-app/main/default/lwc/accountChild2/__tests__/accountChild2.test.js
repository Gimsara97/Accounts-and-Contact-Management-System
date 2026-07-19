import { createElement } from '@lwc/engine-dom';
import AccountChild2 from 'c/accountChild2';

describe('c-account-child2', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('initializes with an empty search text so it can load accounts on first render', () => {
        // Arrange
        const element = createElement('c-account-child2', {
            is: AccountChild2
        });

        // Act
        document.body.appendChild(element);

        // Assert
        expect(element.searchTextChild2).toBe('');
    });
});