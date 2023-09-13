export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-related-item-setter',
                data: {
                    title: 'Images',
                    name: 'images',
                    choosed_items: [
                        {title: 'image1', name: 'image1', id: 1},
                        {title: 'image2', name: 'image2', id: 2},
                        {title: 'image3', name: 'image3', id: 3},
                        {title: 'image4', name: 'image4', id: 4},
                        {title: 'image5', name: 'image5', id: 5},
                        {title: 'image6', name: 'image6', id: 6},
                        {title: 'image7', name: 'image7', id: 7},
                        {title: 'image8', name: 'image8', id: 8}
                    ],
                    select_section: {
                        name: 'select',
                        live_search: true,
                        data_url: '/admin-options',
                        data_infos: {
                            'column-name': 'product_category_id',
                        }
                    }
                }
            }
        ]
    }
}