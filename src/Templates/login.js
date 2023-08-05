export default {
    template_type_name: 'ecom_layout2',
    params: {
        content_sections: [
            {
                type: 'ecom-form',
                data: {
                    formitem_sections: [
                        {
                            type: 'csrf-input'
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
                                label: 'Password',
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
