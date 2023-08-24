export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-related-item-setter',
                data: {
                    title: 'Images',
                    name: 'images',
                    related_items: ['image1','image2','image3','image4','image5','image6','image7','image8'],
                    button_section: {
                        type: 'ecom-form-button',
                        data: {
                            content: 'Add',
                            is_submit_button: true
                        }
                    },
                    delete_button_section: {
                        type: 'ecom-icon-link-with-image',
                        data: {
                            img_url: 'images/trash-can-regular.svg',
                            img_alt: ''
                        }
                    }
                }
            }
        ]
    }
}