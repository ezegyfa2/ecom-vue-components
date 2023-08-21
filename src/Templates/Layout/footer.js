export default {
    type: 'ecom-footer',
    data: {
        cartContent: [],
        column1_sections: [
            {
                type: 'ecom-footer-list-elements',
                data: {
                    title: 'Navigate',
                    navigate_sections: [
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/',
                                navitem_title: 'About Us'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/',
                                navitem_title: 'Blog'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/contact',
                                navitem_title: 'Contact Us'
                            }
                        },
                        {
                            type: 'ecom-nav-link',
                            data: {
                                nav_url: '/',
                                navitem_title: 'Sitemap'
                            }
                        },
                    ]
                }
            }
        ],
        column2_sections: [
            {
                type: 'ecom-footer-list-elements',
                data: {
                    title: 'Collection',
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
                                navitem_title: 'Catalog'
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
            }
        ],
        column3_sections: [
            {
                type: 'ecom-footer-list-elements',
                data: {
                    title: 'Catagories',
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
                                navitem_title: 'Lamps'
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
                    ]
                }
            }
        ],
        right_sections: {
            street: '399 Crowfield Road',
            city: 'Phoenix, Arizona 85012',
            email: 'asff@fdsfsdc.com',
            phone_number: '+602-926-5809'
        },
        bottom_left_section: {
            copy: 'Copyright @ All Rights Reserved 2023',
        },
        bottom_right_section: {
            title: 'Get social',
            images: [
                {
                    src: 'images/twitter.png',
                    alt: 'Twitter',
                    class: 'twitter'
                },
                {
                    src: 'images/pinterest.png',
                    alt: 'Pinterest',
                    class: 'pinterest'
                },
                {
                    src: 'images/facebook.png',
                    alt: 'Facebook',
                    class: 'facebook'
                },
                {
                    src: 'images/insta.png',
                    alt: 'Instagram',
                    class: 'instagram'
                },
            ]
        }
    }
}
