import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "Ad0896UPT1n5DuqXDQ1ZoxGb1gnD4KoIA9qHbB_y6FSP_DzFh8Vm6lWz1ojz5oDiIw4G42v_MP7rSZk2" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount, // amount as string
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess ) 
            
          
        }} 
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
