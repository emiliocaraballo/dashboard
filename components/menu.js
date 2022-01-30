export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboard.text",
        icon: "uil-home-alt",
        badge: {
            variant: "info",
            text: "menuitems.dashboard.badge"
        },
        link: "/"
    },
    {
        id: 3,
        label: "menuitems.apps.text",
        isTitle: true
    },
    {
        id: 4,
        label: "menuitems.calendar.text",
        icon: "uil-calender",
        link: "/calendar"
    },
    {
        id: 5,
        label: "menuitems.chat.text",
        icon: "uil-comments-alt",
        link: "/chat",
        badge: {
            variant: "warning",
            text: "menuitems.chat.badge"
        }
    },
    {
        id: 6,
        label: "menuitems.ecommerce.text",
        icon: "uil-store",
        subItems: [
            {
                id: 7,
                label: "menuitems.ecommerce.list.products",
                link: "/ecommerce/products",
                parentId: 6
            },
            {
                id: 8,
                label: "menuitems.ecommerce.list.productdetail",
                link: "/ecommerce/product-detail/1",
                parentId: 6
            },
            {
                id: 9,
                label: "menuitems.ecommerce.list.orders",
                link: "/ecommerce/orders",
                parentId: 6
            },
            {
                id: 10,
                label: "menuitems.ecommerce.list.customers",
                link: "/ecommerce/customers",
                parentId: 6
            },
            {
                id: 11,
                label: "menuitems.ecommerce.list.cart",
                link: "/ecommerce/cart",
                parentId: 6
            },
            {
                id: 12,
                label: "menuitems.ecommerce.list.checkout",
                link: "/ecommerce/checkout",
                parentId: 6
            },
            {
                id: 13,
                label: "menuitems.ecommerce.list.shops",
                link: "/ecommerce/shops",
                parentId: 6
            },
            {
                id: 14,
                label: "menuitems.ecommerce.list.addproduct",
                link: "/ecommerce/add-product",
                parentId: 6
            }
        ]
    },
    {
        id: 15,
        label: "menuitems.email.text",
        icon: "uil-envelope",
        subItems: [
            {
                id: 16,
                label: "menuitems.email.list.inbox",
                link: "/email/inbox",
                parentId: 15
            },
            {
                id: 17,
                label: "menuitems.email.list.reademail",
                link: "/email/reademail/1",
                parentId: 15
            }
        ]
    },
    {
        id: 18,
        label: "menuitems.invoices.text",
        icon: "uil-invoice",
        subItems: [
            {
                id: 19,
                label: "menuitems.invoices.list.invoicelist",
                link: "/invoices/list",
                parentId: 18
            },
            {
                id: 20,
                label: "menuitems.invoices.list.invoicedetail",
                link: "/invoices/detail",
                parentId: 18
            }
        ]
    },
    {
        id: 21,
        label: "menuitems.contacts.text",
        icon: "uil-book-alt",
        subItems: [
            {
                id: 22,
                label: "menuitems.contacts.list.usergrid",
                link: "/contacts/grid",
                parentId: 21
            },
            {
                id: 23,
                label: "menuitems.contacts.list.userlist",
                link: "/contacts/list",
                parentId: 21
            },
            {
                id: 24,
                label: "menuitems.contacts.list.profile",
                link: "/contacts/profile",
                parentId: 21
            }
        ]
    },
    {
        id: 25,
        label: "menuitems.pages.text",
        isTitle: true
    },
    {
        id: 26,
        label: "menuitems.authentication.text",
        icon: "uil-user-circle",
        subItems: [
            {
                id: 27,
                label: "menuitems.authentication.list.login",
                link: "/auth/login-1",
                parentId: 26
            },
            {
                id: 28,
                label: "menuitems.authentication.list.register",
                link: "/auth/register-1",
                parentId: 26
            },
            {
                id: 29,
                label: "menuitems.authentication.list.recoverpwd",
                link: "/auth/recoverpwd",
                parentId: 26
            },
            {
                id: 30,
                label: "menuitems.authentication.list.lockscreen",
                link: "/auth/lock-screen",
                parentId: 26
            }
        ]
    },
    {
        id: 31,
        label: "menuitems.utility.text",
        icon: "uil-file-alt",
        subItems: [
            {
                id: 32,
                label: "menuitems.utility.list.starter",
                link: "/utility/starter",
                parentId: 31
            },
            {
                id: 33,
                label: "menuitems.utility.list.maintenance",
                link: "/utility/maintenance",
                parentId: 31
            },
            {
                id: 35,
                label: "menuitems.utility.list.comingsoon",
                link: "/utility/comingsoon",
                parentId: 31
            },
            {
                id: 36,
                label: "menuitems.utility.list.timeline",
                link: "/utility/timeline",
                parentId: 31
            },
            {
                id: 37,
                label: "menuitems.utility.list.faqs",
                link: "/utility/faqs",
                parentId: 31
            },
            {
                id: 38,
                label: "menuitems.utility.list.pricing",
                link: "/utility/pricing",
                parentId: 31
            },
            {
                id: 39,
                label: "menuitems.utility.list.error404",
                link: "/utility/404",
                parentId: 31
            },
            {
                id: 40,
                label: "menuitems.utility.list.error500",
                link: "/utility/500",
                parentId: 31
            }
        ]
    },
    {
        id: 41,
        label: "menuitems.components.text",
        isTitle: true
    },
    {
        id: 42,
        label: "menuitems.uielements.text",
        icon: "uil-flask",
        subItems: [
            {
                id: 43,
                label: "menuitems.uielements.list.alerts",
                link: "/ui/alerts",
                parentId: 42
            },
            {
                id: 44,
                label: "menuitems.uielements.list.buttons",
                link: "/ui/buttons",
                parentId: 42
            },
            {
                id: 45,
                label: "menuitems.uielements.list.cards",
                link: "/ui/cards",
                parentId: 42
            },
            {
                id: 46,
                label: "menuitems.uielements.list.carousel",
                link: "/ui/carousel",
                parentId: 42
            },
            {
                id: 47,
                label: "menuitems.uielements.list.dropdowns",
                link: "/ui/dropdown",
                parentId: 42
            },
            {
                id: 48,
                label: "menuitems.uielements.list.grid",
                link: "/ui/grid",
                parentId: 42
            },
            {
                id: 49,
                label: "menuitems.uielements.list.images",
                link: "/ui/images",
                parentId: 42
            },
            {
                id: 50,
                label: "menuitems.uielements.list.lightbox",
                link: "/ui/lightbox",
                parentId: 42
            },
            {
                id: 51,
                label: "menuitems.uielements.list.modals",
                link: "/ui/modals",
                parentId: 42
            },
            {
                id: 52,
                label: "menuitems.uielements.list.rangeslider",
                link: "/ui/rangeslider",
                parentId: 42
            },
            {
                id: 53,
                label: "menuitems.uielements.list.progressbar",
                link: "/ui/progressbar",
                parentId: 42
            },
            {
                id: 53,
                label: "menuitems.uielements.list.placeholder",
                link: "/ui/placeholder",
                parentId: 42
            },
            {
                id: 54,
                label: "menuitems.uielements.list.sweetalert",
                link: "/ui/sweet-alert",
                parentId: 42
            },
            {
                id: 55,
                label: "menuitems.uielements.list.tabs",
                link: "/ui/tabs-accordions",
                parentId: 42
            },
            {
                id: 56,
                label: "menuitems.uielements.list.typography",
                link: "/ui/typography",
                parentId: 42
            },
            {
                id: 57,
                label: "menuitems.uielements.list.video",
                link: "/ui/video",
                parentId: 42
            },
            {
                id: 58,
                label: "menuitems.uielements.list.general",
                link: "/ui/general",
                parentId: 42
            },
            {
                id: 59,
                label: "menuitems.uielements.list.colors",
                link: "/ui/colors",
                parentId: 42
            },
            {
                id: 60,
                label: "menuitems.uielements.list.rating",
                link: "/ui/rating",
                parentId: 42
            }
        ]
    },
    {
        id: 62,
        label: "menuitems.forms.text",
        icon: "uil-shutter-alt",
        badge: {
            variant: "danger",
            text: 'menuitems.forms.badge'
        },
        subItems: [
            {
                id: 63,
                label: "menuitems.forms.list.elements",
                link: "/form/elements",
                parentId: 62
            },
            {
                id: 64,
                label: "menuitems.forms.list.validation",
                link: "/form/validation",
                parentId: 62
            },
            {
                id: 65,
                label: "menuitems.forms.list.advanced",
                link: "/form/advanced",
                parentId: 62
            },
            {
                id: 66,
                label: "menuitems.forms.list.editor",
                link: "/form/editor",
                parentId: 62
            },
            {
                id: 67,
                label: "menuitems.forms.list.fileupload",
                link: "/form/upload",
                parentId: 62
            },
            {
                id: 68,
                label: "menuitems.forms.list.repeater",
                link: "/form/repeater",
                parentId: 62
            },
            {
                id: 69,
                label: "menuitems.forms.list.wizard",
                link: "/form/wizard",
                parentId: 62
            },
            {
                id: 70,
                label: "menuitems.forms.list.mask",
                link: "/form/mask",
                parentId: 62
            }
        ]
    },
    {
        id: 71,
        icon: "uil-list-ul",
        label: "menuitems.tables.text",
        subItems: [
            {
                id: 72,
                label: "menuitems.tables.list.basic",
                link: "/tables/basic",
                parentId: 71
            },
            {
                id: 73,
                label: "menuitems.tables.list.advanced",
                link: "/tables/advanced",
                parentId: 71
            }
        ]
    },
    {
        id: 74,
        icon: "uil-chart",
        label: "menuitems.charts.text",
        subItems: [
            {
                id: 75,
                label: "menuitems.charts.list.apex",
                link: "/charts/apex",
                parentId: 74
            },
            {
                id: 76,
                label: "menuitems.charts.list.chartjs",
                link: "/charts/chartjs",
                parentId: 74
            },
            {
                id: 77,
                label: "menuitems.charts.list.chartist",
                link: "/charts/chartist",
                parentId: 74
            },
            {
                id: 78,
                label: "menuitems.charts.list.echart",
                link: "/charts/echart",
                parentId: 74
            }
        ]
    },
    {
        id: 79,
        label: "menuitems.icons.text",
        icon: "uil-streering",
        subItems: [
            {
                id: 80,
                label: "menuitems.icons.list.unicons",
                link: "/icons/unicons",
                parentId: 79
            },
            {
                id: 81,
                label: "menuitems.icons.list.boxicons",
                link: "/icons/boxicons",
                parentId: 79
            },
            {
                id: 82,
                label: "menuitems.icons.list.materialdesign",
                link: "/icons/materialdesign",
                parentId: 79
            },
            {
                id: 83,
                label: "menuitems.icons.list.dripicons",
                link: "/icons/dripicons",
                parentId: 79
            },
            {
                id: 84,
                label: "menuitems.icons.list.fontawesome",
                link: "/icons/fontawesome",
                parentId: 79
            }
        ]
    },
    {
        id: 85,
        label: "menuitems.maps.text",
        icon: "uil-location-point",
        subItems: [
            {
                id: 86,
                label: "menuitems.maps.list.googlemap",
                link: "/maps/google",
                parentId: 85
            },
            {
                id: 87,
                label: "menuitems.maps.list.leafletmap",
                link: "/maps/leaflet",
                parentId: 85
            },
        ]
    },
    {
        id: 88,
        label: "menuitems.multilevel.text",
        icon: "uil-share-alt",
        subItems: [
            {
                id: 89,
                label: "menuitems.multilevel.list.level1.1",
                link: "javascript: void(0);",
                parentId: 88
            },
            {
                id: 90,
                label: "menuitems.multilevel.list.level1.2",
                parentId: 88,
                subItems: [
                    {
                        id: 91,
                        label: "menuitems.multilevel.list.level1.level2.1",
                        link: "javascript: void(0);",
                        parentId: 88
                    },
                    {
                        id: 92,
                        label: "menuitems.multilevel.list.level1.level2.2",
                        link: "/level2.2",
                        parentId: 88
                    }
                ]
            }
        ]
    }
];

