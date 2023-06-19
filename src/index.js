export default {
    install(Vue) {
        require('helper-vue-components').default.install(Vue)
        require('dynamic-web-vue-components').default.install(Vue)

        require('./Templates/templateRegister.js').default.install()
        
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
        // registerVueComponent(
        //     'ecom-home',
        //     require('./Home/Component.vue').default,
        //     Vue,
        //     'ecom-vue-components/Home/Component.vue'
        // )
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
            'ecom-vue-components/AboutUs/Carousel/Component.vue'
        )
    },
}
