import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) return null;

  const { shippingDetails, orderItems, orderTotal } = orderData;
  const orderId = 'ORD' + Math.floor(Math.random() * 900000 + 100000);

  return (
    <div className="min-h-screen bg-[#fcf8f2] py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
        <div className="text-center mb-8">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900">Order Confirmed!</h1>
          <p className="text-gray-500 mt-2">Thank you for shopping with FreshCart.</p>
          <p className="font-bold text-gray-700 mt-1">Order ID: {orderId}</p>
        </div>

        <div className="border-t border-b border-gray-100 py-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Delivery Details</h3>
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="font-semibold text-gray-800">{shippingDetails.fullName}</p>
            <p className="text-gray-600 mt-1">{shippingDetails.address}</p>
            <p className="text-gray-600">{shippingDetails.city} - {shippingDetails.postalCode}</p>
            <p className="text-gray-600 mt-2 font-medium">Phone: {shippingDetails.phone}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-gray-50 p-1 rounded-lg mr-4" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-800">₹{item.totalPrice}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-700">Total Paid</span>
          <span className="text-2xl font-extrabold text-primary">₹{orderTotal}</span>
        </div>

        <div className="mt-10 text-center">
          <Link to="/shop" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition shadow-md">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
