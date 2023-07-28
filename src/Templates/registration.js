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
                                label: 'Username',
                                item_id: 'UserName1',
                                item_type: 'username',
                                placeholder: 'Username'
                            }
                        },
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
                                label: 'New Password',
                                item_id: 'InputPassword1',
                                item_type: 'password',
                                placeholder: 'example password'
                            }
                        },
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'Confirm Password',
                                item_id: 'ConfirmPassword1',
                                item_type: 'password',
                                placeholder: 'example password'
                            }
                        }
                    ],
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