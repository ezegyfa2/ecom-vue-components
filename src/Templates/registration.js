export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-login',
                data: {
                    formitem_sections: [
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'Username',
                                itemId: 'UserName1',
                                itemType: 'username',
                                placeholder: 'Username'
                            }
                        },
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'Email address',
                                itemId: 'InputEmail1',
                                itemType: 'email',
                                placeholder: 'example@gmail.com'
                            }
                        },
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'New Password',
                                itemId: 'InputPassword1',
                                itemType: 'password',
                                placeholder: 'example password'
                            }
                        },
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'Confirm Password',
                                itemId: 'ConfirmPassword1',
                                itemType: 'password',
                                placeholder: 'example password'
                            }
                        }
                    ],
                    title: 'Registration',
                    linkTitle: 'Login',
                    url: '/login',
                    text: 'I have account:'
                }
            }
        ]
    }
}