export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.ecom_navigation_bar = require('./navigationBar.js').default
        window.templates.ecom_welcome = require('./welcome.js').default
    }
}