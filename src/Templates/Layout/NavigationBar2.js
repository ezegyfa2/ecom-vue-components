export default {
    type: 'ecom-navigation-bar2',
    data: {
        left_item_sections: [
            {
                type: 'ecom-nav-link',
                data: {
                    navitem_title: 'Home',
                    nav_url: '/',
                }
            },
            {
                type: 'ecom-nav-link',
                data: {
                    navitem_title: 'Products',
                    nav_url: '/products',
                }
            },
            {
                type: 'ecom-nav-link',
                data: {
                    navitem_title: 'Contact us',
                    nav_url: '/contact',
                }
            }
        ],
        searchbar_section: {
            type: 'ecom-formitem-with-label',
            data: {
                item_id: 'searchitem',
                item_type: 'search',
                placeholder: 'Search'
            }
        },
        url: '/',
        title: 'ECOM',
        button_title: 'Search',
    },
}