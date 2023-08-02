export default {
    template_type_name: 'ecom_layout2',
    params: {
        content_sections: [
            {
                type: 'ecom-admin',
                data: {
                    delete_title: 'Delete',
                    admin_title: 'Admin',
                    images: ['image1','image2','image3','image4','image5','image6','image7','image8'],
                    button_section: {
                        type: 'ecom-form-button',
                        data: {
                            content: 'Add',
                            is_submit_button: true
                        }
                    }
                }
            }
        ]
    }
}