// import { createContext, useEffect, useState } from "react";
// import axios from 'axios'

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState({});
//     const url = "http://localhost:4000";
//     const [token,setToken] = useState("");

//     const [medicine_list, setmedicineList] = useState([]);

//     const addToCart = async (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         }
//         if(token){
//             await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
//         }
//     }

//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if(token){
//             await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}})
//         }
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = medicine_list.find((product) => product._id === item);
//                 totalAmount += itemInfo.price * cartItems[item];
//             }

//         }

//         return totalAmount;
//     }

//     const fetchmedicineList = async () =>{
//         const response = await axios.get(url+"/api/medicine/list");
//         setmedicineList(response.data.data)
//     }

//     const loadCartData = async (token) =>{
//         const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
//         setCartItems(response.data.cartData);
//     }

//     useEffect(()=>{
        
//         async function loadData(){
//             await fetchmedicineList();
//             if(localStorage.getItem("token")){
//                 setToken(localStorage.getItem("token"));
//                 await loadCartData(localStorage.getItem("token"))
//             }
//         }
//         loadData();
//     },[])

//     const contextValue = {
//         medicine_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     }

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [medicine_list, setmedicineList] = useState([]);

    // Add item to the cart
    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + '/api/cart/add', { itemId }, { headers: { token } });
        }
    };

    // Remove item from the cart
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + '/api/cart/remove', { itemId }, { headers: { token } });
        }
    };

    // Get the total amount for the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = medicine_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    // Fetch medicine list from the backend, which should include expiryDate and quantity
    const fetchmedicineList = async () => {
        const response = await axios.get(url + "/api/medicine/list");
        // Ensure expiryDate and quantity are part of the data
        const updatedmedicineList = response.data.data.map(item => ({
            ...item,
            expiryDate: item.expiryDate || 'N/A',  // Default to 'N/A' if not available
            quantity: item.quantity || 0,  // Default to 0 if not available
        }));
        setmedicineList(updatedmedicineList);
    };

    // Load cart data for a user (from the token)
    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    // Load initial data (medicine list and cart data)
    useEffect(() => {
        async function loadData() {
            await fetchmedicineList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        medicine_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
