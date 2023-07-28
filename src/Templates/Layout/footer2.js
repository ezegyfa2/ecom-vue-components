export default {
    type: 'ecom-footer2',
    data: {
        footer_item_sections: [
            { 
                type: 'ecom-footer-list-elements',
                data: {
                    title: 'Navigate',
                    navigate_sections: [
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Products'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/contact',
                                navitem_title: 'Contact us'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/registration',
                                navitem_title: 'Registration'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/login',
                                navitem_title: 'Login'
                            }
                        },
                    ]
                }
            },
            {
                type: 'ecom-footer-list-elements',
                data: {
                    title: 'Collections',
                    navigate_sections: [
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'New arrivals'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Featured'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Registration'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Brands'
                            }
                        },
                    ]
                }
            },
            { 
                type: 'ecom-footer-list-elements',
                data: {
                    title: 'Categories',
                    navigate_sections: [
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Tables'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Chairs'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Sofas'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/products',
                                navitem_title: 'Lamps'
                            }
                        },
                    ]
                }
            },
            { 
                type: 'ecom-footer-list-elements',
                data: {
                    title: 'Social Media',
                    navigate_sections: [
                        {
                            type: 'ecom-footer-media-links',
                            data: {
                                media_url: '/',
                                media_title: 'Twitter'
                            }
                        },
                        {
                            type: 'ecom-footer-media-links',
                            data: {
                                media_url: '/',
                                media_title: 'Facebook'
                            }
                        },
                        {
                            type: 'ecom-footer-media-links',
                            data: {
                                media_url: '/',
                                media_title: 'LinkedIn'
                            }
                        },
                        {
                            type: 'ecom-footer-media-links',
                            data: {
                                media_url: '/',
                                media_title: 'Instagram'
                            }
                        },
                    ]
                }
            }
        ]
    }
}