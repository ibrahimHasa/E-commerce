import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HCsnYCBnWV09quVgRcdM5sD3qHWFWszrpQ8TMOJI2s9Yy3FyzfUEUxvFL9bZ091jAEuXUUt5mad3Cf4ULAL80Qa008Hw4zOCf';

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total Is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            // token={}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;