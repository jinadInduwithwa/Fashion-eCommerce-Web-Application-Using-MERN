import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      {/* Title Section */}
      <div className="text-2xl mb-6">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t pt-4"
          >
            {/* Product Image */}
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <p className="font-medium text-lg">{item.name}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-2">
                <p>
                  <strong>Price:</strong> {currency}
                  {item.price}
                </p>
                <p>
                  <strong>Quantity:</strong> 1
                </p>
                <p>
                  <strong>Size:</strong> M
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Date:</strong> <span>23, Jul 2024</span>
              </p>
            </div>

            {/* Status and Button */}
            <div className="flex items-center justify-between gap-4 md:w-auto w-full">
              {/* Ready to Ship */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <p className="text-sm md:text-base text-gray-700">Ready to ship</p>
              </div>

              {/* Track Order Button */}
              <button className="border border-gray-400 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
