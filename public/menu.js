import DeliveryZones from "~/components/Settings/DeliveryZones.vue"

const menu = {
    "id": 1,
    "name": "Menu 1",
    "description": "Menu 1 Description",
    "image": "menu1.jpg",
    "Active": true,
    "ActiveTime":[
        {
            "day": "Monday",
            "time": "10:00 - 20:00"
        },
        {
            "day": "Tuesday",
            "time": "10:00 - 20:00"
        },
        {
            "day": "Wednesday",
            "time": "10:00 - 20:00"
        },
        {
            "day": "Thursday",
            "time": "10:00 - 20:00"
        },
        {
            "day": "Friday",
            "time": "10:00 - 20:00"
        },
        {
            "day": "Saturday",
            "time": "10:00 - 20:00"
        },
        {
            "day": "Sunday",
            "time": "10:00 - 20:00"
        }
    ],
    "categories":[
        {
            "id": 1,
            "name": "Category 1",
            "description": "Category 1 Description",
            "image": "category1.jpg",
            "Active": true,
            "items":[
                {
                    "id": 1,
                    "name": "Item 1",
                    "description": "Item 1 Description",
                    "image": "item1.jpg",
                    "price": 10.00,
                    "vat": 0.00,
                    "Active": true,
                    "options":[
                        {
                            "id": 1,
                            "name": "Option 1",
                            "description": "Option 1 Description",
                            "image": "option1.jpg",
                            "condition": {
                                "min": 1,
                                "max": 1,
                                "required": true,
                                "canSlectSameItems": false
                            },
                            "optionItems":[
                                {
                                    "id": 1,
                                    "name": "Item 1",
                                    "description": "Item 1 Description",
                                    "price": 10.00
                                },
                                {
                                    "id": 2,
                                    "name": "Item 2",
                                    "description": "Item 2 Description",
                                    "image": "item2.jpg",
                                    "price": 20.00,
                                    "Active": true
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            "id": 2,
            "name": "Category 2",
            "description": "Category 2 Description",
            "image": "category2.jpg",
            "Active": true,
            "items":[
                {
                    "id": 2,
                    "name": "Item 2",
                    "description": "Item 2 Description",
                    "image": "item2.jpg",
                    "price": 20.00,
                    "vat": 0.00,
                    "Active": true,
                    "options":[
                        {
                            "id": 2,
                            "name": "Option 2",
                            "description": "Option 2 Description",
                            "image": "option2.jpg",
                            "condition": {
                                "min": 1,
                                "max": 1,
                                "required": true,
                                "canSlectSameItems": false
                            },
                            "optionItems":[
                                {
                                    "id": 3,
                                    "name": "Item 3",
                                    "description": "Item 3 Description",
                                    "price": 30.00
                                },
                                {
                                    "id": 4,
                                    "name": "Item 4",
                                    "description": "Item 4 Description",
                                    "image": "item4.jpg",
                                    "price": 40.00,
                                    "Active": true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}


const Resturant ={
    name:"Resturant 1",
    description:"Resturant 1 Description",
    logo:"logo.jpg",
    location:{
        address:"Address 1",
        city:"City 1",
        postalCode:"123456",
        country:"Country 1",
        latitude: 123.456,
        longitude: 123.456,
    },
    LoginWith:{
        facebook:{
            status:true,
            clientId:"1234567890",
            clientSecret:"123456789
        },
        google:{
            status:true,
            clientId:"1234567890",
            clientSecret:"123456789"
        },
        map:{
            status:true,
            apiKey:"1234567890"
        },
        emailOrSms:{
            status:true,
            verificationMethods:{
                email:true,
                sms:true,
            }
        },
    },
    paymentMethods:[
        {
            id:1,
            name:"Cash",
            description:"Cash Description",
            image:"cash.jpg",
            active:true
        },
        {
            id:2,
            name:"Credit Card",
            description:"Credit Card Description",
            image:"creditcard.jpg",
            active:true,
            cardTypes:[
                {
                    id:1,
                    name:"Visa",
                    description:"Visa Description",
                    image:"visa.jpg",
                    active:true
                },
                {
                    id:2,
                    name:"Master Card",
                    description:"Master Card Description",
                    image:"mastercard.jpg",
                    active:true
                }
            ]
        },
        {
            id:3,
            name:"PayPal",
            description:"PayPal Description",
            image:"paypal.jpg",
            active:true,
            clientId:"1234567890",
            clientSecret:"123456789"
        },
    ],
    activeTime:[
        {
            day:"Monday",
            time:"10:00 - 20:00"
        },
        {
            day:"Tuesday",
            time:"10:00 - 20:00"
        },
        {
            day:"Wednesday",
            time:"10:00 - 20:00"
        },
        {
            day:"Thursday",
            time:"10:00 - 20:00"
        },
        {
            day:"Friday",
            time:"10:00 - 20:00"
        },
        {
            day:"Saturday",
            time:"10:00 - 20:00"
        },
        {
            day:"Sunday",
            time:"10:00 - 20:00"
        }
    ],
    DeliveryZones:[
        {
            id:1,
            name:"Zone 1",
            description:"Zone 1 Description",
            radius: 100,
            location:{
                latitude: 123.456,
                longitude: 123.456,
            },
            price: 10.00,
            freeDelivery: 100.00,
            active:true
        }
    ],
    emailSMTP:{
        status:true,
        host:"smtp.gmail.com",
        port:465,
        secure:true,
    },
    contactsAndinfo:{
        email:"",
        phone:"",
        address:"",
        TIN:"",
    },
    socialMedia:{
        facebook:"",
        instagram:"",
        twitter:"",
        linkedin:"",
    },
}