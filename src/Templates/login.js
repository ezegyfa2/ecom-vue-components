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
                                label: 'Email address',
                                itemId: 'InputEmail1',
                                itemType: 'email',
                                placeholder: 'example@gmail.com'
                            }
                        },
                        {
                            type: 'ecom-formitem-with-label',
                            data: {
                                label: 'Password',
                                itemId: 'InputPassword1',
                                itemType: 'password',
                                placeholder: 'example password'
                            }
                        },
                        {
                            type: 'ecom-checkbox-with-label',
                            data: {
                                label: 'Remember me',
                                itemId: 'Check1',
                                itemType: 'checkbox'
                            }
                        },
                    ],
                    title: 'Login',
                    linkTitle: 'Registration',
                    url: '/registration',
                    text: 'Not a member?'
                }
            }
        ]
    }
}
