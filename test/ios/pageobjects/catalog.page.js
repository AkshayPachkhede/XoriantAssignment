import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CatalogPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productsHeader () {
        const selector = 'label == "Products" AND name == "Products" AND value == "Products"';
        return $(`-ios predicate string:${selector}`);
    }
}

export default new CatalogPage();
