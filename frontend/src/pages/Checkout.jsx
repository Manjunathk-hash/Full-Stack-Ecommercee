import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CreditCard, Banknote, ShieldCheck } from 'lucide-react';
import MockRazorpay from '../components/MockRazorpay';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';

const Checkout = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [showRazorpay, setShowRazorpay] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  const handlePaymentSuccess = () => {
    setShowRazorpay(false);
    navigate('/order-confirmation', { 
      state: { shippingDetails, orderItems: cartItems, orderTotal: totalAmount } 
    });
    dispatch(clearCart());
  };

  const isFormValid = Object.values(shippingDetails).every(val => val.trim() !== '');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Delivery & Payment */}
          <div className="flex-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Delivery Details & Payment</h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" value={shippingDetails.fullName} onChange={e => setShippingDetails({...shippingDetails, fullName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary" placeholder="John Doe" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input type="text" value={shippingDetails.address} onChange={e => setShippingDetails({...shippingDetails, address: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary" placeholder="123 FreshMart Lane" />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" value={shippingDetails.city} onChange={e => setShippingDetails({...shippingDetails, city: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary" placeholder="Bangalore" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                    <input type="text" value={shippingDetails.postalCode} onChange={e => setShippingDetails({...shippingDetails, postalCode: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary" placeholder="560038" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="text" value={shippingDetails.phone} onChange={e => setShippingDetails({...shippingDetails, phone: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary" placeholder="+91 9888123450" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-4">Select Payment Method</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 p-4 rounded-xl flex items-center cursor-pointer hover:border-primary transition">
                   <CreditCard className="w-6 h-6 text-gray-400 mr-3" />
                   <span className="font-medium text-gray-700 text-sm">Credit Card</span>
                </div>
                <div className="border-2 border-primary bg-green-50 p-4 rounded-xl flex items-center cursor-pointer">
                   <div className="w-6 h-6 bg-primary text-white rounded-md flex items-center justify-center mr-3 font-bold text-xs">UPI</div>
                   <span className="font-bold text-primary text-sm">UPI / Netbanking</span>
                </div>
                <div className="border border-gray-200 p-4 rounded-xl flex items-center cursor-pointer hover:border-primary transition">
                   <Banknote className="w-6 h-6 text-gray-400 mr-3" />
                   <span className="font-medium text-gray-700 text-sm">Cash on Delivery</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item._id} className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-gray-50 rounded-lg p-1 mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-gray-800">₹{item.totalPrice}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
                  <span>Total Amount</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>

              <button 
                onClick={() => setShowRazorpay(true)}
                className={`w-full mt-6 text-white font-bold py-4 rounded-xl transition flex items-center justify-center ${totalAmount === 0 || !isFormValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800'}`}
                disabled={totalAmount === 0 || !isFormValid}
              >
                {isFormValid ? `Confirm Order & Pay ₹${totalAmount}` : 'Please enter delivery details'}
              </button>
              
              <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-green-500 mr-1" />
                Secure Payments by Razorpay
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {showRazorpay && (
        <MockRazorpay 
          amount={totalAmount} 
          onClose={() => setShowRazorpay(false)} 
          onSuccess={handlePaymentSuccess} 
        />
      )}
    </div>
  );
};

export default Checkout;
