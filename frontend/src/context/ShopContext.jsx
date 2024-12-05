import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rs.';
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItem,setCartItem] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
    
        let cartData = structuredClone(cartItem);
    
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    };

    const getCardCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item];
                    }
                } catch (error) {
                    console.error('Error calculating cart count:', error);
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            let itemInfo = products.find((product) => product._id === item);
            if (itemInfo) {
                for (const size in cartItem[item]) {
                    try {
                        if (cartItem[item][size] > 0) {
                            totalAmount += itemInfo.price * cartItem[item][size];
                        }
                    } catch (error) {
                        console.error('Error calculating cart amount:', error);
                    }
                }
            }
        }
        return totalAmount;
    };
    


    
    

    useEffect(()=>{
        console.log(cartItem)

    },[cartItem])

    const value = {
        products, currency, search, setSearch, showSearch, setShowSearch, cartItem, addToCart, getCardCount, updateQuantity, getCartAmount, navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;