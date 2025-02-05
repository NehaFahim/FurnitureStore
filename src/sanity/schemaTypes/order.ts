const orderSchema = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            title: 'First Name'
        },
        {
            name: 'lastName',
            type: 'string',
            title: 'Last Name'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone'
        },
        {
            name: 'companyName',
            type: 'string',
            title: 'Company Name'
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address'
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'province',
            type: 'string',
            title: 'Province'
        },
        {
            name: 'zipCode',
            type: 'string',
            title: 'Zip Code'
        },
        {
            name: 'cartItems',
            type: 'array',
            title: 'Cart Items',
            of: [{ type: 'reference', to: { type: 'product' } }],
        },
        {
            name: 'cartTotal',
            type: 'number',
            title: 'Cart Total'
        },
        {
            name: 'cartDiscount',
            type: 'number',
            title: 'Cart Discount'
        },
        {
            name: 'paymentMethod',
            type: 'string',
            title: 'Payment Method',
            options: {
                list: [
                    { value: 'direct-bank', title: 'Direct Bank Transfer' },
                    { value: 'cash-on-delivery', title: 'Cash On Delivery' }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'orderDate',
            type: 'datetime',
            title: 'Order Date'
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
                list: [
                    { value: 'pending', title: 'Pending' },
                    { value: 'success', title: 'Success' },
                    { value: 'dispatch', title: 'Dispatch' }
                ],
                layout: 'radio'
            },
            initialValue: 'pending'
        }
    ]
};

export default orderSchema;