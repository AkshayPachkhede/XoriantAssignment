import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import CatalogPage from '../pageobjects/catalog.page.js'

describe('My Login application', () => {

    it('should not login with blank credentials', async () => {
        await LoginPage.openLoginPage();
        await LoginPage.performLogin('','');

        await expect(LoginPage.errorUserNameMessage).toBeExisting();
        await expect(LoginPage.errorUserNameMessage).toHaveAttribute('text',expect.stringContaining('Username is required'));
    })

    it('should not login with No Password credentials', async () => {
        await LoginPage.openLoginPage();
        await LoginPage.performLogin('bob@example.com','');

        await expect(LoginPage.errorPasswordMessage).toBeExisting();
        await expect(LoginPage.errorPasswordMessage).toHaveAttribute('text',expect.stringContaining('Password is required'));
    })

    it('should not login with invalid credentials', async () => {
        await LoginPage.openLoginPage();
        await LoginPage.performLogin('1@2.com','f-o-o');

        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveAttribute('text',expect.stringContaining('Provided credentials do not match any user in this service.'));
    })

    it('should not login with locked credentials', async () => {
        await LoginPage.openLoginPage();
        await LoginPage.performLogin('alice@example.com','10203040');

        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveAttribute('text',expect.stringContaining('Sorry, this user has been locked out.'));
    })

    it('should login with valid credentials', async () => {
        await LoginPage.openLoginPage();
        await LoginPage.performLogin('bob@example.com','10203040');

        await expect(CatalogPage.productsHeader).toBeExisting();
        await expect(CatalogPage.productsHeader).toHaveText(
            expect.stringContaining('Products'));

    })
})

