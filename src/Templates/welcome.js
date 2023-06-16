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
                type: 'icon-link-with-right-text',
                data: {
                    content: 'ecom item',
                    icon_class: 'fa-solid fa-droplet'
                }
            },
            {
                type: 'icon-link-with-right-text',
                data: {
                    content: 'ecom item',
                    icon_class: 'fa-solid fa-droplet'
                }
            },
            {
                type: 'icon-link-with-right-text',
                data: {
                    content: 'ecom item',
                    icon_class: 'fa-solid fa-droplet'
                }
            }
        ],
        right_item_section: {
            type: 'icon-link-with-right-text',
            data: {
                content: 'ecom item',
                icon_class: 'fa-solid fa-droplet'
            }
        }
    },
}
