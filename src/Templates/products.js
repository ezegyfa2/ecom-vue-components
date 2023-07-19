export default {
    template_type_name: 'ecom_layout',
    params: {
        content_sections: [
            {
                type: 'ecom-breadcrumb',
                data: {
                    breadcrumb_item_sections: [
                        {
                            type: 'ecom-breadcrumb-link',
                            data: {
                                link_section: {
                                    type: 'ecom-link-item',
                                    data: {
                                        url: '/',
                                        content: 'Home',
                                    }
                                }
                            }
                        },
                        {
                            type: 'ecom-breadcrumb-link',
                            data: {
                                link_section: {
                                    type: 'ecom-link-item',
                                    data: {
                                        url: '',
                                        content: 'Products',
                                    }
                                }
                            }
                        },
                    ]
                }
            },
            {
                type: 'ecom-grid',
                data: {
                    dropdown_item_sections: [
                        {
                            type: 'ecom-link-dropdown-item',
                            data: {
                                url: '',
                                content: 'Date',
                                click_function: 'sortDate'
                            }
                        },
                        {
                            type: 'ecom-link-dropdown-item',
                            data: {
                                url: '',
                                content: 'Price',
                                click_function: 'sortPrice'
                            }
                        },
                        {
                            type: 'ecom-link-dropdown-item',
                            data: {
                                url: '',
                                content: 'Trending',
                                click_function: 'sortTrend'
                            }
                        }
                    ],
                    categories_dropdown_item_sections: [
                        {
                            type: 'ecom-link-dropdown-item',
                            data: {
                                url: '',
                                content: 'Tables',
                                click_function: 'table'
                            }
                        },
                        {
                            type: 'ecom-link-dropdown-item',
                            data: {
                                url: '',
                                content: 'Lamps',
                                click_function: 'lamp'
                            }
                        },
                        {
                            type: 'ecom-link-dropdown-item',
                            data: {
                                url: '',
                                content: 'Chairs',
                                click_function: 'chair'
                            }
                        },
                        {
                            type: 'ecom-link-dropdown-item',
                            data: {
                                url: '',
                                content: 'Sofas',
                                click_function: 'sofa'
                            }
                        }
                    ],
                    categories_item_sections: [
                        {
                            type: 'ecom-link-item',
                            data: {
                                url: '',
                                content: 'Tables',
                                click_function: 'table'
                            }
                        },
                        {
                            type: 'ecom-link-item',
                            data: {
                                url: '',
                                content: 'Lamps',
                                click_function: 'lamp'
                            }
                        },
                        {
                            type: 'ecom-link-item',
                            data: {
                                url: '',
                                content: 'Chairs',
                                click_function: 'chair'
                            }
                        },
                        {
                            type: 'ecom-link-item',
                            data: {
                                url: '',
                                content: 'Sofas',
                                click_function: 'sofa'
                            }
                        }
                    ],
                    colors: [
                        {
                            sortI_color: 'yellow'
                        },
                        {
                            sortI_color: 'blue'
                        },
                        {
                            sortI_color: 'white'
                        },
                        {
                            sortI_color: 'red'
                        },
                    ],
                    showCards: 6,
                    sortButton: 'DEFAULT'
                }
            }
        ],
    }
}
