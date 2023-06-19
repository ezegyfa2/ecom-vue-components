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
        ),
        registerVueComponent(
            'ecom-icon-link-with-right-text',
            require('./IconLinks/IconWithRightText/Component.vue').default,
            Vue,
            'ecom-vue-components/IconLinks/IconWithRightText/Component.vue'
        );
    }
}
