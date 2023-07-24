export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-contact-page',
                data: {
                    title: 'Hello there',
                    sub_title: 'got a thought to discuss?',
                    form_section: {
                        type: 'vue-form',
                        data: {
                            url: '-++form_url',
                            method: '',
                            button_title: 'Submit',
                            form_item_sections: [
                                {
                                    type: "form-item-without-label-text-input",
                                    data: {
                                        name: "name",
                                        value: null,
                                        required: true,
                                        validation_errors: [],
                                        maxlength: 255,
                                        minlength: 0,
                                        placeholder: "Name",
                                        form_item_id: 'nameTextInput'
                                    }
                                },
                                {
                                    type: "form-item-without-label-email-input",
                                    data: {
                                        name: "email",
                                        value: null,
                                        required: false,
                                        validation_errors: [],
                                        maxlength: 255,
                                        minlength: 0,
                                        placeholder: "Email"
                                    }
                                },
                                {
                                    type: "form-item-without-label-textarea",
                                    data: {
                                        name: "message",
                                        value: null,
                                        required: true,
                                        validation_errors: [],
                                        maxlength: 255,
                                        minlength: 0,
                                        placeholder: "Message"
                                    }
                                },
                            ]
                        },
                    },
                    image_url: "images/_con.jpg",
                    image_alt: "...",
                },
            }
        ],
    }
}