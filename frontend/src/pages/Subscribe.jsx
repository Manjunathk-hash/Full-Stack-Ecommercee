import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown, PlusCircle, Calendar, Clock, MapPin } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MockRazorpay from '../components/MockRazorpay';

const Subscribe = () => {
  const [availableProducts, setAvailableProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [step, setStep] = useState(1);
  const [showRazorpay, setShowRazorpay] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    startDate: '',
    timeSlot: '',
    address: '',
    phone: ''
  });
  
  const navigate = useNavigate();

  // Fetch all products from the backend on load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setAvailableProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const totalMonthly = items.reduce((acc, item) => {
    const multiplier = item.frequency === 'Weekly' ? 4 : 1;
    return acc + (item.price * item.quantity * multiplier);
  }, 0);

  const addItemToSubscription = () => {
    if (!selectedProductId) return;
    
    // Check if already in box
    if (items.find(i => i._id === selectedProductId)) return;

    const product = availableProducts.find(p => p._id === selectedProductId);
    if (product) {
      setItems([...items, { ...product, quantity: 1, frequency: 'Weekly' }]);
      setSelectedProductId('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item._id !== id));
  };

  const updateFrequency = (id, newFrequency) => {
    setItems(items.map(item => item._id === id ? { ...item, frequency: newFrequency } : item));
  };

  const handlePaymentSuccess = () => {
    setShowRazorpay(false);
    navigate('/order-confirmation', { 
      state: { 
        shippingDetails: { ...deliveryDetails, fullName: 'Subscriber' }, 
        orderItems: items, 
        orderTotal: totalMonthly 
      } 
    });
  };

  const isFormValid = deliveryDetails.startDate && deliveryDetails.timeSlot && deliveryDetails.address && deliveryDetails.phone;

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1">
            <div className="bg-[#121212] p-6 rounded-[24px] shadow-sm border border-red-900/30">
              <div className="flex items-center space-x-4 mb-6">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-[#1a1a1a] text-gray-500 border border-red-900/30'}`}>1</div>
                 <div className={`h-0.5 flex-1 ${step >= 2 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]' : 'bg-red-900/30'}`}></div>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-[#1a1a1a] text-gray-500 border border-red-900/30'}`}>2</div>
                 <div className="h-0.5 bg-red-900/30 flex-1"></div>
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] text-gray-500 border border-red-900/30 flex items-center justify-center font-bold">3</div>
              </div>

              {step === 1 ? (
                <>
                  <h2 className="text-xl font-bold text-gray-100 mb-2">Step 1: Choose Your Items</h2>
                  <p className="text-sm text-gray-400 mb-6">Select products from our catalog to add to your box</p>
                  
                  <div className="mb-6 flex gap-2">
                     <select 
                       value={selectedProductId} 
                       onChange={(e) => setSelectedProductId(e.target.value)}
                       className="flex-1 p-3 border border-red-900/30 bg-[#1a1a1a] rounded-xl focus:outline-none focus:border-red-500 text-gray-300"
                     >
                       <option value="">-- Select a product to add --</option>
                       {availableProducts.map(p => (
                         <option key={p._id} value={p._id}>{p.name} - ${(p.price / 80).toFixed(2)}</option>
                       ))}
                     </select>
                     <button 
                       onClick={addItemToSubscription}
                       className="bg-red-500/10 border border-red-500/50 text-red-500 px-6 rounded-xl hover:bg-red-500 hover:text-white transition-all flex items-center font-bold disabled:opacity-50"
                       disabled={!selectedProductId}
                     >
                       <PlusCircle className="w-5 h-5 mr-2"/> Add
                     </button>
                  </div>

                  {items.length === 0 ? (
                    <div className="text-center py-12 bg-[#1a1a1a] rounded-xl border border-dashed border-red-900/50">
                      <p className="text-gray-500">Your subscription box is empty.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item._id} className="flex items-center justify-between p-4 border border-red-900/30 rounded-xl bg-[#1a1a1a] shadow-sm">
                          <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4 bg-[#121212] rounded-lg shadow-sm" />
                            <div>
                              <h4 className="font-semibold text-gray-200 text-sm">{item.name}</h4>
                              <p className="text-xs text-red-400 font-bold">${(item.price / 80).toFixed(2)}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <select 
                              value={item.frequency}
                              onChange={(e) => updateFrequency(item._id, e.target.value)}
                              className="text-sm border border-red-900/30 rounded-lg py-2 px-3 text-gray-300 outline-none bg-[#121212]"
                            >
                               <option value="Weekly">Weekly Delivery</option>
                               <option value="Monthly">Monthly Delivery</option>
                            </select>
                            <button onClick={() => removeItem(item._id)} className="text-red-400 hover:text-red-600 font-bold p-2 text-xl">&times;</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex justify-end">
                      <button 
                      onClick={() => setStep(2)}
                      className={`font-bold py-3 px-8 rounded-full shadow-sm transition ${items.length > 0 ? 'bg-red-500 text-white hover:bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-[#1a1a1a] border border-red-900/30 text-gray-600 cursor-not-allowed'}`}
                      disabled={items.length === 0}
                     >
                        Next Step &rarr;
                     </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-100 mb-2">Step 2: Delivery Details</h2>
                  <p className="text-sm text-gray-400 mb-6">When and where should we deliver?</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center"><Calendar className="w-4 h-4 mr-1 text-red-500"/> Start Date</label>
                        <input type="date" value={deliveryDetails.startDate} onChange={e => setDeliveryDetails({...deliveryDetails, startDate: e.target.value})} className="w-full p-3 border border-red-900/30 bg-[#1a1a1a] text-gray-300 rounded-xl focus:outline-none focus:border-red-500" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center"><Clock className="w-4 h-4 mr-1 text-red-500"/> Time Slot</label>
                        <select value={deliveryDetails.timeSlot} onChange={e => setDeliveryDetails({...deliveryDetails, timeSlot: e.target.value})} className="w-full p-3 border border-red-900/30 bg-[#1a1a1a] text-gray-300 rounded-xl focus:outline-none focus:border-red-500">
                          <option value="">Select a slot</option>
                          <option value="06:00 AM - 08:00 AM">06:00 AM - 08:00 AM</option>
                          <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
                          <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center"><MapPin className="w-4 h-4 mr-1 text-red-500"/> Delivery Address</label>
                      <input type="text" value={deliveryDetails.address} onChange={e => setDeliveryDetails({...deliveryDetails, address: e.target.value})} className="w-full p-3 border border-red-900/30 bg-[#1a1a1a] text-gray-300 rounded-xl focus:outline-none focus:border-red-500" placeholder="Enter full address" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                      <input type="text" value={deliveryDetails.phone} onChange={e => setDeliveryDetails({...deliveryDetails, phone: e.target.value})} className="w-full p-3 border border-red-900/30 bg-[#1a1a1a] text-gray-300 rounded-xl focus:outline-none focus:border-red-500" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                     <button 
                      onClick={() => setStep(1)}
                      className="font-bold py-3 px-8 rounded-full border border-red-900/30 text-gray-400 hover:bg-white/5 transition"
                     >
                        &larr; Back
                     </button>
                     <button 
                      onClick={() => setShowRazorpay(true)}
                      className={`font-bold py-3 px-8 rounded-full shadow-sm transition ${isFormValid ? 'bg-red-500 text-white hover:bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-[#1a1a1a] border border-red-900/30 text-gray-600 cursor-not-allowed'}`}
                      disabled={!isFormValid}
                     >
                        Pay Subscription ${(totalMonthly / 80).toFixed(2)}
                     </button>
                  </div>
                </>
              )}

            </div>
          </div>

          <div className="w-full lg:w-80">
            <div className="bg-[#121212] p-6 rounded-[24px] shadow-sm border border-red-900/30 sticky top-24">
              <h2 className="text-lg font-bold text-gray-100 mb-6">Subscription Summary</h2>
              
              <div className="space-y-3 mb-6">
                {items.length === 0 && <p className="text-sm text-gray-500 italic">No items added yet</p>}
                {items.map(item => (
                  <div key={item._id} className="flex justify-between text-sm text-gray-400">
                    <span className="truncate pr-2 w-3/4">1x {item.name} ({item.frequency === 'Weekly' ? 'W' : 'M'})</span>
                    <span className="font-medium text-gray-300">${((item.price * (item.frequency === 'Weekly' ? 4 : 1)) / 80).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-red-900/30 pt-4 flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Monthly Total</span>
                <span className="text-2xl font-extrabold text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">${(totalMonthly / 80).toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 text-right">Calculated per month</p>
            </div>
          </div>
          
        </div>
      </div>

      {showRazorpay && (
        <MockRazorpay 
          amount={totalMonthly} 
          onClose={() => setShowRazorpay(false)} 
          onSuccess={handlePaymentSuccess} 
        />
      )}
    </div>
  );
};

export default Subscribe;
