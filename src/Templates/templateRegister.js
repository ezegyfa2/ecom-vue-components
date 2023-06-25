export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.ecom_welcome = require('./welcome.js').default
        window.templates.ecom_navigation_bar = require('./navigationBar.js').default
        window.templates.ecom_about_us = require('./aboutUs.js').default
        window.templates.ecom_products_page = require('./products.js').default
        window.templates.ecom_footer = require('./footer.js').default
    }
}