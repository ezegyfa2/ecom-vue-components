export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-carousel',
                data: {
                    carousel_items: [
                        {
                            isActive: true,
                            dataTarget: '#carouselIndicators',
                            src: 'images/jum1.jpg',
                            alt: 'First slide'
                        },
                        {
                            isActive: false,
                            dataTarget: '#carouselIndicators',
                            src: 'images/jum2.jpg',
                            alt: 'Second slide'
                        },
                        {
                            isActive: false,
                            dataTarget: '#carouselIndicators',
                            src: 'images/jum3.jpg',
                            alt: 'Third slide'
                        },
                    ],
                }
            },
            {
                type: 'google-map',
                data: {
                    apiKey: '',
                    disabledSearch: true
                }
            },
            {
                template_type_name: 'ecom_about_us'
            }
        ]
    }
}
