export default {
    type: 'ecom-products-page',
    data: {
        breadcrumb_section: {
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
        grid_section: {
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
                cards: [
                    {
                        id: 0,
                        img: 'images/1.jpg',
                        title: 'sofa 243',
                        price: 156,
                        color: 'yellow',
                        type: 'sofa'
                      }, 
                      {
                        id: 1,
                        img: 'images/2.jpg',
                        title: 'lamp 54',
                        price: 756,
                        color: 'yellow',
                        type: 'lamp'
                      }, 
                      {
                        id: 2,
                        img: 'images/3.jpg',
                        title: 'fotal 34',
                        price: 362,
                        color: 'yellow',
                        type: 'chair'
                      }, 
                      {
                        id: 3,
                        img: 'images/4.jpg',
                        title: 'fotal324',
                        price: 505,
                        color: 'red',
                        type: 'chair'
                      }, 
                      {
                        id: 4,
                        img: 'images/5.jpg',
                        title: 'sofa-1',
                        price: 243,
                        color: 'white',
                        type: 'sofa'
                      }, 
                      {
                        id: 5,
                        img: 'images/6.jpg',
                        title: 'Fotal-2',
                        price: 44,
                        color: 'white',
                        type: 'chair'
                      }, 
                      {
                        id: 6,
                        img: 'images/7.jpg',
                        title: 'Fotal-34',
                        price: 505,
                        color: 'blue',
                        type: 'chair'
                      }, 
                      {
                        id: 7,
                        img: 'images/8.jpg',
                        title: 'foto-4364',
                        price: 432,
                        color: 'red',
                        type: 'table'
                      },
                      {
                        id: 8,
                        img: 'images/9.jpg',
                        title: 'foto-44',
                        price: 390,
                        color: 'white',
                        type: 'table'
                      },
                      {
                        id: 9,
                        img: 'images/10.jpg',
                        title: 'foto-34',
                        price: 756,
                        color: 'yellow',
                        type: 'chair'
                      },
                      {
                        id: 10,
                        img: 'images/11.jpg',
                        title: 'foto-23',
                        price: 44,
                        color: 'white',
                        type: 'chair'
                      },
                      {
                        id: 11,
                        img: 'images/12.jpg',
                        title: 'foto-4234',
                        price: 156,
                        color: 'red',
                        type: 'lamp'
                      },
                      {
                        id: 12,
                        img: 'images/13.jpg',
                        title: 'foto-4234',
                        price: 756,
                        color: 'blue',
                        type: 'lamp'
                      },
                      {
                        id: 13,
                        img: 'images/14.jpg',
                        title: 'foto-4234',
                        price: 756,
                        color: 'white',
                        type: 'chair'
                      },
                      {
                        id: 14,
                        img: 'images/table-1.jpg',
                        title: 'table-32',
                        price: 756,
                        color: 'white',
                        type: 'table'
                      }
                ],
                showCards: 6,
				sortButton: 'DEFAULT'
                // cards_section: {
                //     type: 'ecom-card',
                //     data: {
                //         CardArray: [
                //             {
                //                 id: 0,
                //                 img: 'images/1.jpg',
                //                 title: 'sofa 243',
                //                 price: 156,
                //                 color: 'yellow',
                //                 type: 'sofa'
                //               }, 
                //               {
                //                 id: 1,
                //                 img: 'images/2.jpg',
                //                 title: 'lamp 54',
                //                 price: 756,
                //                 color: 'yellow',
                //                 type: 'lamp'
                //               }, 
                //               {
                //                 id: 2,
                //                 img: 'images/3.jpg',
                //                 title: 'fotal 34',
                //                 price: 362,
                //                 color: 'yellow',
                //                 type: 'chair'
                //               }, 
                //               {
                //                 id: 3,
                //                 img: 'images/4.jpg',
                //                 title: 'fotal324',
                //                 price: 505,
                //                 color: 'red',
                //                 type: 'chair'
                //               }, 
                //               {
                //                 id: 4,
                //                 img: 'images/5.jpg',
                //                 title: 'sofa-1',
                //                 price: 243,
                //                 color: 'white',
                //                 type: 'sofa'
                //               }, 
                //               {
                //                 id: 5,
                //                 img: 'images/6.jpg',
                //                 title: 'Fotal-2',
                //                 price: 44,
                //                 color: 'white',
                //                 type: 'chair'
                //               }, 
                //               {
                //                 id: 6,
                //                 img: 'images/7.jpg',
                //                 title: 'Fotal-34',
                //                 price: 505,
                //                 color: 'blue',
                //                 type: 'chair'
                //               }, 
                //               {
                //                 id: 7,
                //                 img: 'images/8.jpg',
                //                 title: 'foto-4364',
                //                 price: 432,
                //                 color: 'red',
                //                 type: 'table'
                //               },
                //               {
                //                 id: 8,
                //                 img: 'images/9.jpg',
                //                 title: 'foto-44',
                //                 price: 390,
                //                 color: 'white',
                //                 type: 'table'
                //               },
                //               {
                //                 id: 9,
                //                 img: 'images/10.jpg',
                //                 title: 'foto-34',
                //                 price: 756,
                //                 color: 'yellow',
                //                 type: 'chair'
                //               },
                //               {
                //                 id: 10,
                //                 img: 'images/11.jpg',
                //                 title: 'foto-23',
                //                 price: 44,
                //                 color: 'white',
                //                 type: 'chair'
                //               },
                //               {
                //                 id: 11,
                //                 img: 'images/12.jpg',
                //                 title: 'foto-4234',
                //                 price: 156,
                //                 color: 'red',
                //                 type: 'lamp'
                //               },
                //               {
                //                 id: 12,
                //                 img: 'images/13.jpg',
                //                 title: 'foto-4234',
                //                 price: 756,
                //                 color: 'blue',
                //                 type: 'lamp'
                //               },
                //               {
                //                 id: 13,
                //                 img: 'images/14.jpg',
                //                 title: 'foto-4234',
                //                 price: 756,
                //                 color: 'white',
                //                 type: 'chair'
                //               },
                //               {
                //                 id: 14,
                //                 img: 'images/table-1.jpg',
                //                 title: 'table-32',
                //                 price: 756,
                //                 color: 'white',
                //                 type: 'table'
                //               }
                //         ]
                //     }
                // }
            }
        }
    }
}