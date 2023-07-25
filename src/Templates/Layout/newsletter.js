export default {
    type: 'ecom-newsletter',
    data: {
        newsletter_text: {
            type: 'ecom-text-content',
            data: {
                title: 'Join our Newsletter',
                content: 'Nulla ac convallis lorem, eget euismod nisl. bibendum nec.'
            },
        },
        newsletter_form: {
            newsletter_input_section: {
                type: 'ecom-form-input-email',
                data: {
                    placeholder: 'Your E-mail',
                },
            },
            newsletter_button_section: {
                type: 'ecom-form-button',
                data: {
                    content: 'Submit',
                    is_submit_button: true
                },
            },
        }
    }
}
