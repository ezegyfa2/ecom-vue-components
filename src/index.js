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
            'ecom-navigation-bar',
            require('./NavigationBar/Component.vue').default,
            Vue,
            'ecom-vue-components/NavigationBar/Component.vue'
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
            'ecom-about-us',
            require('./HomePage/AboutUs/Component.vue').default,
            Vue,
            'ecom-vue-components/HomePage/AboutUs/Component.vue'
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
            'ecom-newsletter',
            require('./Newsletter/Component.vue').default,
            Vue,
            'ecom-vue-components/Newsletter/Component.vue'
        )
        registerVueComponent(
            'ecom-form-input-email',
            require('./FormItems/Inputs/Email/Component.vue').default,
            Vue,
            'dynamic-web-vue-components/FormItems/Inputs/Email/Component.vue'
        )
    },
}
