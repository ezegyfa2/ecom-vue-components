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
                }
            },
            {
                type: 'ecom-icon-link-with-right-text',
                data: {
                    content: 'products',
                }
            },
            {
                type: 'ecom-icon-link-with-right-text',
                data: {
                    content: 'contact us',
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
            type: 'ecom-icon-link-with-right-text',
            data: {
                url: 'images/cart.svg',
            }
        },
    },
}
