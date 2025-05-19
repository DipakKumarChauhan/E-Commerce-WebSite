import React from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

const OrderDetailsPage = () => {
    const {id} = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const mockOrderDetails = {
        _id: id,
        createdAt: new Date(),
        isPaid : true,
        isDelivered: false,
        paymentMethod: "PayPal",
        shippingMethod: "Standard",
        shippingAddress:{ city: "New York", country: "USA"},
        orderItems: [{
            produntId: "1",
            name : "Jacket",
            price: 120,
            quantity:1,
            image: "https://picsum.photos/150?random=1"
        },
        {
            produntId: "2",
            name : "Shirt",
            price: 150,
            quantity:1,
            image: "https://picsum.photos/150?random=2"
        },
    ],
    };
    setOrderDetails(mockOrderDetails)
    },[id]);

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6'>
        Order Details
        </h2>
        {!orderDetails ? (<p>Nor order Details Found</p>): 
        (<div className='p-4 sm:p-6 rounded-lg border'>
            {/* OrderInfo*/}
            <div className='flex flex-col sm:flex-row justify-between mb-8'>
                <div>
                    <h3 className='text-lg md:text-xl font-semibold'>
                        Order Id: #{orderDetails._id}

                    </h3>
                    <p  className='text-gray-600'>
                        { new Date(orderDetails.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <div className='flex flex-col items-stat sm;items-end mt-4 sm:mt-0'>
                <span className={`${
                    orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700" } px-3 py-1 rounded-s-full text-sm font-medium mb-2`}>
                {orderDetails.isPaid ?"Approved" : "Pending"}
                </span>
                <span className={`${
                    orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700" } px-3 py-1 rounded-s-full text-sm font-medium mb-2`}>
                {orderDetails.isDelivered ?"Approved" : "Pending"}
                </span>
                </div>

            </div>
            {/* Customer,Payment, shipping Info */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gapr-8 mb-8'>
                <div>
                    <h4 className='text-lg font-semibold mb-2'>Payment Info</h4>
                    <p>
                      Payment Method: {orderDetails.paymentMethod}

                    </p>
                    <p>
                        Status: {orderDetails.isPaid ? "Paid": "Unpaid"}
                    </p>

                    
                </div>

                <div>
                    <h4 className='text-lg font-semibold mb-2'>Shipping Info</h4>
                    <p>
                      hipping Method: {orderDetails.shippingMethod}

                    </p>
                    <p>
                        Addreess : {`${orderDetails.shippingAddress.city},${orderDetails.shippingAddress.country}`}
                    </p>

                    
                </div>
            
            </div>
            {/* Product list */}
            
                <div className='overflow-x-auto'>
                    <h4 className='text-lg font-semibold mb-4'>Products</h4>
                    <table className='min-w-full text-gray-700 mb-4'>
                        <thead className='bg-gray-100'>
                            <tr>
                                <th className='py-2 px-4'>Name</th>
                                <th className='py-2 px-4'>Unit Price</th>
                                <th className='py-2 px-4'>Quantity</th>
                                <th className='py-2 px-4'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.orderItems.map((items)=>{
                                <tr key={items.productId} className='border-b'>
                                    <td className="py-2 px-4 flex items-center">
                                        <img src={items.image} alt={items.name} className='w-12 h-12 object-cover rounded-lg mr-4' />
                                        <Link to={`/product/${items.produtId}`} className='text-blue-500 hover:undeline'>
                                        {items.name}
                                        </Link>
                                    </td>
                                    <td className='py-2 pc-4'>${items.price}</td>
                                    <td className='py-2 pc-4'>${items.quantity}</td>
                                    <td className='py-2 pc-4'>${items.price * items.quantity}</td>
                                </tr>
                            })}
                        </tbody>

                    </table>

                </div>

        </div>)}
    </div>
  )
}

export default OrderDetailsPage