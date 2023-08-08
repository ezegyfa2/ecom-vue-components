export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-form',
                data: {
                    formitem_sections: '-++form_item_sections',
                    button_section: {
                        type: 'ecom-submit-button',
                        data: {
                            submit_item: 'submit',
                            submit_label: 'Submit'
                        }
                    },
                    title: 'Registration',
                    link_title: 'Login',
                    url: '/login',
                    text: 'I have account:'
                }
            }
        ]
    }
}