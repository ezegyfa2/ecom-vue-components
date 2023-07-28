export default {
    template_type_name: 'ecom_layout2',
    params: {
        content_sections: [
            {
                type: 'ecom-form',
                data: {
                    formitem_sections: [
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'Email address',
                                item_id: 'InputEmail1',
                                item_type: 'email',
                                placeholder: 'example@gmail.com'
                            }
                        },
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'Password',
                                item_id: 'InputPassword1',
                                item_type: 'password',
                                placeholder: 'example password'
                            }
                        },
                        {
                            type: 'ecom-checkbox-with-label',
                            data: {
                                label: 'Remember me',
                                item_id: 'Check1',
                                item_type: 'checkbox'
                            }
                        },
                    ],
                    button_section: {
                        type: 'ecom-submit-button',
                        data: {
                            submit_item: 'submit',
                            submit_label: 'Submit'
                        }
                    },
                    title: 'Login',
                    link_title: 'Registration',
                    url: '/registration',
                    text: 'Not a member?',
                }
            }
        ]
    }
}
