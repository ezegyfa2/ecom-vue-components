export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.ecom_welcome = require('./welcome.js').default
        window.templates.ecom_products = require('./products.js').default
        window.templates.ecom_login = require('./login.js').default
        window.templates.ecom_registration = require('./registration.js').default
        window.templates.ecom_contact = require('./contact.js').default
        window.templates.ecom_about_us = require('./aboutUs.js').default
        window.templates.ecom_newsletter = require('./Layout/newsletter.js').default
        window.templates.ecom_info = require('./info.js').default
        
        window.templates.ecom_layout = require('./Layout/layout.js').default
        window.templates.ecom_navigation_bar = require('./Layout/navigationBar.js').default
        window.templates.ecom_footer = require('./Layout/footer.js').default
        window.templates.ecom_admin = require('./admin.js').default
    }
}