export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-contact-page',
                data: {
                    image_url: "images/_con.jpg",
                    image_alt: "...",
                    title: 'Hello there',
                    sub_title: 'got a thought to discuss?',
                    url: '',
                    method: '',
                    form_item_sections: [ 
                        {
                            type: "ecom-input-field",
                            data: {
                                label: 'Name',
                                inputType: 'text',
                                name: "name",
                                value: null,
                                required: true,
                                validation_errors: [],
                                maxlength: 255,
                                minlength: 0,
                                max: 0,
                                min: 0,
                                form_item_id: 'nameTextInput'
                            }
                        },
                        {
                            type: "ecom-input-field",
                            data: {
                                label: 'Email',
                                inputType: 'email',
                                name: "email",
                                value: null,
                                required: true,
                                validation_errors: [],
                                maxlength: 255,
                                minlength: 0,
                                max: 0,
                                min: 0,
                                form_item_id: 'emailInput',
                            }
                        },
                        {
                            type: "ecom-input-field",
                            data: {
                                label: 'Message',
                                inputType: 'textarea',
                                name: "textarea",
                                value: null,
                                required: true,
                                validation_errors: [],
                                maxlength: 255,
                                minlength: 0,
                                form_item_id: 'textareaInput',
                                numberOfRows: 3,
                            }
                        },
                    ],
                    button_section: {
                        type: 'ecom-form-button',
                        data: {
                            content: 'Submit',
                            is_submit_button: true
                        },
                    },
                },
            }
        ],
    }
}