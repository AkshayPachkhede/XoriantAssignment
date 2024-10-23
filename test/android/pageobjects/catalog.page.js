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
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView');
    }
}

export default new CatalogPage();
