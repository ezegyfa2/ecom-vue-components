export default {
    type: 'ecom-products-page',
    data: {
        breadcrumb_section: {
            type: 'ecom-breadcrumb',
            data: {
                breadcrumb_item_sections: []
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
                            content: 'Date',
                            click_function: 'sortDate'
                        }
                    },
                    
                    // {
                    //     title: 'Price',
                    //     click_function: 'sortPrice'
                    // },
                    // {
                    //     title: 'Trending',
                    //     click_function: 'sortTrend'
                    // },
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
                ]
            }
        }
        // cartContent: [],
        // column1_sections: {
        //     title: 'Navigate',
        //     content: [
        //         {
        //             title: 'About Us',
        //             url: '/'
        //         },
        //         {
        //             title: 'Blog',
        //             url: '/'
        //         },
        //         {
        //             title: 'Contact Us',
        //             url: '/'
        //         },
        //         {
        //             title: 'Sitemap',
        //             url: '/'
        //         },
        //     ]
        // },
        // column2_sections: {
        //     title: 'Collection',
        //     content: [
        //         {
        //             title: 'New arrivals',
        //             url: '/products'
        //         },
        //         {
        //             title: 'Featured',
        //             url: '/products'
        //         },
        //         {
        //             title: 'Catalog',
        //             url: '/products'
        //         },
        //         {
        //             title: 'Brands',
        //             url: '/products'
        //         },
        //     ]
        // },
        // column3_sections: {
        //     title: 'Catagories',
        //     content: [
        //         {
        //             title: 'Tables',
        //             url: '/products'
        //         },
        //         {
        //             title: 'Lamps',
        //             url: '/products'
        //         },
        //         {
        //             title: 'Chairs',
        //             url: '/products'
        //         },
        //         {
        //             title: 'Sofas',
        //             url: '/products'
        //         },
        //     ]
        // },
        // right_sections: {
        //     street: '399 Crowfield Road',
        //     city: 'Phoenix, Arizona 85012',
        //     email: 'asff@fdsfsdc.com',
        //     phone_number: '+602-926-5809'
        // },
        // bottom_left_section: {
        //     copy: 'Copyright &copy; All Rights Reserved 2020',
        // },
        // bottom_right_section: {
        //     title: 'Get social',
        //     images: [
        //         {
        //             src: 'images/twitter.png',
        //             alt: 'Twitter',
        //             class: 'twitter'
        //         },
        //         {
        //             src: 'images/pinterest.png',
        //             alt: 'Pinterest',
        //             class: 'pinterest'
        //         },
        //         {
        //             src: 'images/facebook.png',
        //             alt: 'Facebook',
        //             class: 'facebook'
        //         },
        //         {
        //             src: 'images/insta.png',
        //             alt: 'Instagram',
        //             class: 'instagram'
        //         },
        //     ]
        // }
    }
}
