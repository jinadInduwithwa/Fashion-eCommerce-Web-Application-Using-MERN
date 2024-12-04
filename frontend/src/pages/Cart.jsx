import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const Cart = () => {
  const { products, currency, cartItem } = useContext(ShopContext); // Fixed 'cartItems' to 'cartItem'
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData); // Update cartData state with tempData
  }, [cartItem]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img src={productData.image[0]} className="w-16 sm:w-20" alt="" />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border border-slate-50">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />
                <img
                  src={assets.bin_icon}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  alt=""
                  onClick={() => handleRemoveItem(item._id, item.size)} // Handle item removal
                />
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
