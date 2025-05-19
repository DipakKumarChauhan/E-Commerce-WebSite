import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PayPalButton from './PayPalButton';

const cart = {
  products: [
    {
      name: "Stylish jacket 1",
      size: "M",
      color: "Red",
      price: 50,
      image: "https://picsum.photos/500/500?random=1",
    },
    {
      name: "Stylish jacket 2",
      size: "L",
      color: "Blue",
      price: 50,
      image: "https://picsum.photos/500/500?random=2",
    },
  ],
  totalPrice: 100,
};

const Checkout = () => {
  const navigate = useNavigate();

  const [checkoutId, setcheckoutId] = useState(null); // Replace with actual checkout ID if available
  const [shippingAddress, setShippingAddress] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setcheckoutId("12345"); // Simulate checkout ID creation
    console.log("Shipping Address:", shippingAddress);
    // navigate("/thankyou") // optionally redirect
  };
  const handlePaymentSuccess = (details) => {
    console.log("Payment successful:", details);
    alert(`Thanks ${details.payer.name.given_name}, your order is placed!`);
    // You can add logic here to save order details to backend
    navigate("/thankyou");
  };
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
      {/* Left Section */}
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className='text-lg mb-4'>Contact Details</h3>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type="email"
              value="user@eg.com"
              className='w-full p-2 border rounded'
              disabled
            />
          </div>

          <h3 className='text-lg mb-4'>Delivery</h3>

          {/* First + Last Name */}
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-gray-700'>First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, firstName: e.target.value })
                }
                className='border border-gray-300 rounded-md w-full p-2'
                required
              />
            </div>
            <div>
              <label className='block text-gray-700'>Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, lastName: e.target.value })
                }
                className='border border-gray-300 rounded-md w-full p-2'
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className='mb-4'>
            <label className='block text-gray-700'>Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, address: e.target.value })
              }
              className='border border-gray-300 rounded-md w-full p-2'
              required
            />
          </div>

          {/* City + Zip */}
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-gray-700'>City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, city: e.target.value })
                }
                className='border border-gray-300 rounded-md w-full p-2'
                required
              />
            </div>
            <div>
              <label className='block text-gray-700'>ZIP Code</label>
              <input
                type="text"
                value={shippingAddress.zip}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, zip: e.target.value })
                }
                className='border border-gray-300 rounded-md w-full p-2'
                required
              />
            </div>
          </div>

          {/* Country + Phone */}
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-gray-700'>Country</label>
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, country: e.target.value })
                }
                className='border border-gray-300 rounded-md w-full p-2'
                required
              />
            </div>
            <div>
              <label className='block text-gray-700'>Phone Number</label>
              <input
                type="tel"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, phone: e.target.value })
                }
                className='border border-gray-300 rounded-md w-full p-2'
                required
              />
            </div>
          </div>

           <div>     
            {!checkoutId ? (
                <button type = "submit" className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
            ): (<div>
                <h3 className='text-lg mb-4 '> Pay With Paypal</h3>
                  <PayPalButton
                  amount= {100}
                  onSuccess = {handlePaymentSuccess} 
                  onError = {(err)=> alert("Payment Filed. Try again")}
                  />
                
            </div>)}
            {/* <button type="submit" className=" w-f bg-black text-white py-3 rounded">
                Place Order
            </button> */}
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <ul>
          {cart.products.map((product, index) => (
            <li key={index} className="flex mb-4">
              <img src={product.image || undefined} alt={product.name} className="w-16 h-16 rounded mr-4" />
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">{product.color}, Size: {product.size}</p>
                <p className="text-sm font-semibold">₹{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t pt-4 mt-4">
          <p className="text-lg font-semibold">Total: ${cart.totalPrice}</p>
          {/* ₹ */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
