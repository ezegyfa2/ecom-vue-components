export default {
    type: 'ecom-navigation-bar',
    data: {
        title_section: {
            type: 'icon-link-with-right-text',
            data: {
                content: 'ECOM',
                icon_class: 'fa-solid fa-droplet'
            },
        },
        left_item_sections: [
            {
                type: 'ecom-icon-link-with-right-text',
                data: {
                    content: 'home',
                    url: '/'
                }
            },
            {
                type: 'ecom-icon-link-with-right-text',
                data: {
                    content: 'products',
                    url: '/products'
                }
            },
            {
                type: 'ecom-icon-link-with-right-text',
                data: {
                    content: 'contact us',
                    url: '/contact'
                }
            }
        ],
        right_item_section: {
            type: 'ecom-icon-link-with-right-text',
            data: {
                content: 'sign in',
            }
        },
        shop_cart_item_section: {
            type: 'ecom-icon-link-with-image',
            data: {
                url: '',
                img_url: 'images/cart.svg',
                img_alt: 'cart',
            }
        },
    },
}
