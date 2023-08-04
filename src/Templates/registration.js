export default {
    template_type_name: 'ecom_layout2',
    params: {
        content_sections: [
            {
                type: 'ecom-form',
                data: {
                    formitem_sections: [
                        {
                            type: 'ecom-input-field',
                            data: {
                                label: 'Username',
                                inputType: 'text',
                                name: "name",
                                value: null,
                                required: true,
                                validation_errors: [],
                                maxlength: 255,
                                minlength: 0,
                                max: 0,
                                min: 0,
                                form_item_id: 'usernameInput'
                            }
                        },
                        {
                            type: 'ecom-input-field',
                            data: {
                                label: 'Email Adress',
                                inputType: 'email',
                                name: "name",
                                value: null,
                                required: true,
                                validation_errors: [],
                                maxlength: 255,
                                minlength: 0,
                                max: 0,
                                min: 0,
                                form_item_id: 'emailInput'
                            }
                        },
                        {
                            type: 'ecom-input-field',
                            data: {
                                label: 'New Password',
                                inputType: 'password',
                                name: "name",
                                value: null,
                                required: true,
                                validation_errors: [],
                                maxlength: 255,
                                minlength: 0,
                                max: 0,
                                min: 0,
                                form_item_id: 'passwordInput'
                            }
                        },
                        {
                            type: 'ecom-input-field',
                            data: {
                                label: 'Confirm Password',
                                inputType: 'password',
                                name: "name",
                                value: null,
                                required: true,
                                validation_errors: [],
                                maxlength: 255,
                                minlength: 0,
                                max: 0,
                                min: 0,
                                form_item_id: 'passwordInput2'
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
                    title: 'Registration',
                    link_title: 'Login',
                    url: '/login',
                    text: 'I have account:'
                }
            }
        ]
    }
}