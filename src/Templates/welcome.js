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
        ],
        newsletter_section: {
            type: 'ecom-newsletter',
            data: {
                newsletter_text: {
                    type: 'ecom-text-content',
                    data: {
                        title: 'Join our Newsletter',
                        content: 'Nulla ac convallis lorem, eget euismod nisl. bibendum nec.'
                    },
                },
                newsletter_form: {
                    newsletter_input_section: {
                        type: 'ecom-form-input-email',
                        data: {
                            placeholder: 'Your E-mail',
                        },
                    },
                    button_title: 'Submit'
                }
            }
        },
        footer_section: {
            template_type_name: 'ecom_footer',
        }
    }
}
