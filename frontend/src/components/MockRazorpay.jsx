import React, { useState } from 'react';
import { CreditCard, CheckCircle, X, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MockRazorpay = ({ amount, onClose, onSuccess }) => {
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }, 2000);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center animate-bounce">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful</h2>
          <p className="text-gray-600 text-center text-sm">Your order has been placed successfully in Test Mode.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full flex relative">
        
        {/* Absolute Red Test Mode Badge */}
        <div className="absolute top-4 right-[-35px] bg-red-500 text-white text-xs font-bold px-10 py-1 transform rotate-45 shadow-sm border border-red-600 z-10">
          Test Mode
        </div>

        {/* Close button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10">
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Merchant Info */}
        <div className="w-1/3 bg-primary text-white p-6 flex flex-col justify-between hidden md:flex">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white text-primary font-bold p-1 rounded mr-2">FC</div>
              <span className="font-bold text-lg">FreshCart</span>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
              <p className="text-sm opacity-80 mb-1">Price Summary</p>
              <p className="text-2xl font-bold">₹{amount}</p>
            </div>
            
            <div className="text-xs opacity-80 border-t border-white border-opacity-20 pt-4">
              <p className="mb-1">Using as: +91 9888123450</p>
            </div>
          </div>
          
          <div className="flex items-center text-xs opacity-80">
            <ShieldCheck className="w-4 h-4 mr-1" />
            Secured by Razorpay
          </div>
        </div>

        {/* Right Side: Payment Options */}
        <div className="flex-1 p-6 flex">
          
          {/* Options Menu */}
          <div className="w-1/3 border-r border-gray-100 pr-2 space-y-2">
            <div className="p-3 bg-green-50 border-l-4 border-primary font-semibold text-sm text-gray-800 cursor-pointer flex items-center">
              <div className="w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center text-[8px] mr-2">UPI</div>
              UPI
            </div>
            <div className="p-3 text-gray-600 text-sm hover:bg-gray-50 cursor-pointer flex items-center">
              <CreditCard className="w-4 h-4 mr-2 text-gray-400" /> Cards
            </div>
            <div className="p-3 text-gray-600 text-sm hover:bg-gray-50 cursor-pointer">EMI</div>
            <div className="p-3 text-gray-600 text-sm hover:bg-gray-50 cursor-pointer">Netbanking</div>
            <div className="p-3 text-gray-600 text-sm hover:bg-gray-50 cursor-pointer">Wallet</div>
            <div className="p-3 text-gray-600 text-sm hover:bg-gray-50 cursor-pointer">Pay Later</div>
          </div>

          {/* Payment Detail Area (UPI QR) */}
          <div className="flex-1 pl-6 flex flex-col">
            <h3 className="font-bold text-gray-800 mb-4">UPI QR</h3>
            <div className="flex-1 flex flex-col items-center justify-center border border-gray-200 rounded-xl p-6 bg-gray-50 relative overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                alt="QR Code" 
                className="w-32 h-32 mb-4 mix-blend-multiply opacity-80"
              />
              <p className="text-sm text-gray-500 mb-6 text-center">Scan the QR using any UPI app on your phone.</p>
              
              <button 
                onClick={handlePayment}
                disabled={processing}
                className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-sm hover:bg-primary-dark transition flex justify-center items-center"
              >
                {processing ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  `Pay ₹${amount}`
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MockRazorpay;
