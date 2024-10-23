import { $, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuIcon() {
        return $('~tab bar option menu');
    }

    get loginLabel() {
        return $('~menu item log in');
    }

    get usernameInputField() {
        return $('~Username input field');
    }

    get passwordInputField() {
        return $('~Password input field');
    }

    get loginButton() {
        return $('~Login button');
    }

    get enterButton() {
        return $('~Return');
    }

    get errorUserLockedMessage() {
        return $('~Sorry, this user has been locked out.');
    }

    get errorInvalidCredsMessage() {
        return $('~Provided credentials do not match any user in this service.');
    }

    get errorUserNameMessage() {
        return $('~Username is required');
    }

    get errorPasswordMessage() {
        return $('~Password is required');
    }

    get lockedOutUser () {
        const selector = 'label == "alice@example.com (locked out)"';
        return $(`-ios predicate string:${selector}`);
    }

    get validUser () {
        const selector = 'label == "bob@example.com"';
        return $(`-ios predicate string:${selector}`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async openLoginPage () {
        await this.menuIcon.click();
        await this.loginLabel.click();
    }

    async performLogin (username, password) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.enterButton.click();
        await this.loginButton.click();
    }

    async performDirectLogin (userType) {
        if(userType == 'lockedUser'){
            await this.lockedOutUser.click();
            await this.loginButton.click();
        } else if (userType == 'validUser'){
            await this.validUser.click();
            await this.loginButton.click();
        }
    }
}

export default new LoginPage();