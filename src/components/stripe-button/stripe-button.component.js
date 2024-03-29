import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_hbczwrv9L65vmlNDT5yLw2vS00wKKrXfy7';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    };
    return(
        <StripeCheckout
        label = 'Pay Now'
        name = 'Crown Clothing'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description ={`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;