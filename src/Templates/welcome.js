export default {
    type: 'ecom-home',
    data: {
        navbar_section: {
            template_type_name: 'ecom_navigation_bar',
        },
        content_sections: [
            {
                type: 'ecom-carousel',
                data: {
                    carousel_indicators: [
                        {
                            isActive: true,
                            dataTarget: '#heroControls'
                        },
                        {
                            isActive: false,
                            dataTarget: '#heroControls'
                        },
                        {
                            isActive: false,
                            dataTarget: '#heroControls'
                        },
                    ],
                    carousel_inners: [
                        {
                            isActive: true,
                            src: 'images/jum1.jpg',
                            alt: 'First slide'
                        },
                        {
                            isActive: false,
                            src: 'images/jum2.jpg',
                            alt: 'Second slide'
                        },
                        {
                            isActive: false,
                            src: 'images/jum3.jpg',
                            alt: 'Third slide'
                        },
                    ]
                }
            },
            {
                template_type_name: 'ecom_about_us'
            },
            {
                type: 'ecom-newsletter',
                data: {
                    
                }
            }
        ]
        // footer_section: {
        //     "template_type_name": "dynamic_web_footer",
        //     "params": {
        //         "icons": [
        //             {
        //                 "url": "https://www.facebook.com/profile.php?id=100084068406799",
        //                 "icon_class": "fab fa-facebook-f"
        //             },
        //             {
        //                 "url": "",
        //                 "icon_class": "fa-brands fa-linkedin-in"
        //             }
        //         ],
        //         "privacy_policy": {
        //             "url": "",
        //             "content": "--layout.footer.privacy_policy"
        //         },
        //         "copyright": {
        //             "company_name": "--layout.footer.copyright.company_name",
        //             "content": "--layout.footer.copyright.content"
        //         }
        //     }
        // }
    }
}
