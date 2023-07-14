export default {
    type: 'ecom-home',
    data: {
        navbar_section: {
            template_type_name: 'ecom_navigation_bar',
        },
        content_sections: [
            {
                type: 'ecom-contact-form',
                data: {
                    id: 'contact_form',
                    title: 'Hello there',
                    sub_title: 'got a thought to discuss?',
                    img_url: 'images/_con.jpg',
                    url: '-++form_url',
                    form_item_sections: [
                        [
                            {
                                type: "form-item-text-input",
                                data: {
                                    name: "name",
                                    label: "name",
                                    value: null,
                                    required: true,
                                    validation_errors: [],
                                    maxlength: 255,
                                    minlength: 0,
                                    placeholder: "Name"
                                }
                            },
                            {
                                type: "form-item-email-input",
                                data: {
                                    name: "email",
                                    label: "email",
                                    value: null,
                                    required: false,
                                    validation_errors: [],
                                    maxlength: 255,
                                    minlength: 0,
                                    placeholder: "Email"
                                }
                            },
                            {
                                type: "form-item-textarea",
                                data: {
                                    name: "message",
                                    label: "message",
                                    value: null,
                                    required: true,
                                    validation_errors: [],
                                    maxlength: 255,
                                    minlength: 0,
                                    placeholder: "Message"
                                }
                            },
                        ],
                    ],
                    button_title: 'Submit'
                }
            }
        ],
        footer_section: {
            template_type_name: 'ecom_footer',
        }
    }
}