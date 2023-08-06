export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'centered-content',
                data: {
                    content_sections: [
                        {
                            type: 'ecom-form',
                            data: {
                                form_item_sections: "-++form_item_sections",
                                title: 'Login',
                                button_title: 'Login'
                            }
                        }
                    ]
                }
            }
        ]
    }
}
