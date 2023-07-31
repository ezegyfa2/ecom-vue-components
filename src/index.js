export default {
    install(Vue) {
        require('helper-vue-components').default.install(Vue)
        require('text-contents-vue-components').default.install(Vue)
		require('description-vue-components').default.install(Vue)

        require('./Templates/templateRegister.js').default.install()
        
        registerVueComponent(
            'ecom-home',
            require('./Home/Component.vue').default,
            Vue,
            'ecom-vue-components/Home/Component.vue'
        )
        registerVueComponent(
            'ecom-form',
            require('./Form/Component.vue').default,
            Vue,
            'ecom-vue-components/Form/Component.vue'
        )
        registerVueComponent(
            'ecom-formitem-with-label',
            require('./FormItems/FormItemWithLabel/Component.vue').default,
            Vue,
            'ecom-vue-components/FormItems/FormItemWithLabel/Component.vue'
        )
        registerVueComponent(
            'ecom-checkbox-with-label',
            require('./FormItems/CheckBoxWithLabel/Component.vue').default,
            Vue,
            'ecom-vue-components/FormItems/CheckBoxWithLabel/Component.vue'
        )
        registerVueComponent(
            'ecom-navigation-bar',
            require('./NavigationBar/Component.vue').default,
            Vue,
            'ecom-vue-components/NavigationBar/Component.vue'
        )
        registerVueComponent(
            'ecom-navigation-bar2',
            require('./NavigationBar2/Component.vue').default,
            Vue,
            'ecom-vue-components/NavigationBar2/Component.vue'
        )
        registerVueComponent(
            'ecom-submit-button',
            require('./FormItems/Button2/Component.vue').default,
            Vue,
            'ecom-vue-components/FormItems/Button2/Component.vue'
        )
        registerVueComponent(
            'ecom-nav-link',
            require('./IconLinks/NavLink/Component.vue').default,
            Vue,
            'ecom-vue-components/IconLinks/NavLink/Component.vue'
        )
        registerVueComponent(
            'ecom-icon-link-with-right-text',
            require('./IconLinks/IconWithRightText/Component.vue').default,
            Vue,
            'ecom-vue-components/IconLinks/IconWithRightText/Component.vue'
        )
        registerVueComponent(
            'ecom-icon-link-with-image',
            require('./IconLinks/IconLinksWithImage/Component.vue').default,
            Vue,
            'ecom-vue-components/IconLinks/IconLinksWithImage/Component.vue'
        )
        registerVueComponent(
            'ecom-carousel',
            require('./HomePage/Carousel/Component.vue').default,
            Vue,
            'ecom-vue-components/HomePage/Carousel/Component.vue'
        )
        registerVueComponent(
            'ecom-about-us-content',
            require('./HomePage/Content/Component.vue').default,
            Vue,
            'ecom-vue-components/HomePage/Content/Component.vue'
        )
        registerVueComponent(
            'ecom-articles-small-text-content',
            require('./HomePage/ArticlesSmallTextContent/Component.vue').default,
            Vue,
            'ecom-vue-components/HomePage/ArticlesSmallTextContent/Component.vue'
        )
        registerVueComponent(
            'ecom-products-page',
            require('./Products/Component.vue').default,
            Vue,
            'ecom-vue-components/Products/Component.vue'
        )
        registerVueComponent(
            'ecom-breadcrumb',
            require('./ProductsPage/Breadc/Component.vue').default,
            Vue,
            'ecom-vue-components/ProductsPage/Breadc/Component.vue'
        )
        registerVueComponent(
            'ecom-breadcrumb-link',
            require('./HomePage/NavigationLinks/BreadcrumbNavigationLink/Component.vue').default,
            Vue,
            'ecom-vue-components/HomePage/NavigationLinks/BreadcrumbNavigationLink/Component.vue'
        )
        registerVueComponent(
            'ecom-grid',
            require('./ProductsPage/Grid/Component.vue').default,
            Vue,
            'ecom-vue-components/ProductsPage/Grid/Component.vue'
        )
        registerVueComponent(
            'ecom-slider',
            require('./ProductsPage/Slider/Component.vue').default,
            Vue,
            'ecom-vue-components/ProductsPage/Slider/Component.vue'
        )
        registerVueComponent(
            'ecom-card',
            require('./ProductsPage/Card/Component.vue').default,
            Vue,
            'ecom-vue-components/ProductsPage/Card/Component.vue'
        )
        registerVueComponent(
            'ecom-link-dropdown-item',
            require('./HomePage/NavigationLinks/DropdownNavigationLink/Component.vue').default,
            Vue,
            'ecom-vue-components/HomePage/NavigationLinks/DropdownNavigationLink/Component.vue'
        )
        registerVueComponent(
            'ecom-link-item',
            require('./HomePage/NavigationLinks/NavigationLink/Component.vue').default,
            Vue,
            'ecom-vue-components/HomePage/NavigationLinks/NavigationLink/Component.vue'
        )
        registerVueComponent(
            'ecom-newsletter',
            require('./Newsletter/Component.vue').default,
            Vue,
            'ecom-vue-components/Newsletter/Component.vue'
        )
        registerVueComponent(
            'ecom-text-content',
            require('./HomePage/TextContent/Component.vue').default,
            Vue,
            'dynamic-web-vue-components/HomePage/TextContent/Component.vue'
        )
        registerVueComponent(
            'ecom-input-field',
            require('./FormItems/InputField/Component.vue').default,
            Vue,
            'dynamic-web-vue-components/FormItems/InputField/Component.vue'
        )
        registerVueComponent(
            'ecom-form-input-email',
            require('./FormItems/Inputs/Email/Component.vue').default,
            Vue,
            'dynamic-web-vue-components/FormItems/Inputs/Email/Component.vue'
        )
        registerVueComponent(
            'ecom-form-button',
            require('./FormItems/Button/Component.vue').default,
            Vue,
            'dynamic-web-vue-components/FormItems/Button/Component.vue'
        )
        registerVueComponent(
            'ecom-contact-page',
            require('./ContactPage/ContactForm/Component.vue').default,
            Vue,
            'dynamic-web-vue-components/ContactPage/ContactForm/Component.vue'
        )
        registerVueComponent(
            'ecom-footer',
            require('./Footer/Component.vue').default,
            Vue,
            'ecom-vue-components/Footer/Component.vue'
        )
        registerVueComponent(
            'ecom-footer2',
            require('./Footer2/Component.vue').default,
            Vue,
            'ecom-vue-components/Footer2/Component.vue'
        )
        registerVueComponent(
            'ecom-footer-list-elements',
            require('./IconLinks/FooterListElements/Component.vue').default,
            Vue,
            'ecom-vue-components/IconLinks/FooterListElements/Component.vue'
        )
        registerVueComponent(
            'ecom-footer-media-links',
            require('./IconLinks/FooterMediaLinks/Component.vue').default,
            Vue,
            'ecom-vue-components/IconLinks/FooterMediaLinks/Component.vue'
        )
        registerVueComponent(
            'ecom-admin',
            require('./Admin/Component.vue').default,
            Vue,
            'ecom-vue-components/Admin/Component.vue'
        )
    },
}