import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import Signup from './components/Signup';
import Register from './components/Register';
import Checkout from './components/Checkout';

function App() {
    const [cartItems, setCartItems] = useState([]); // Stores cart items
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks authentication state

    // Check if the user is authenticated (token present in localStorage)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true); // If token exists, set authentication to true
        }
    }, []);

    // **Cart Management Functions**
    // Add an item to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.name === item.name);
            if (existingItem) {
                // If item already exists, increase its quantity
                return prevItems.map((i) =>
                    i.name === item.name
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            // Otherwise, add a new item to the cart
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Remove an item from the cart
    const removeFromCart = (item) => {
        setCartItems((prevItems) =>
            prevItems.filter((i) => i.name !== item.name)
        );
    };

    // Update the quantity of an item in the cart
    const updateQuantity = (item, newQuantity) => {
        if (newQuantity === 0) {
            // If new quantity is 0, remove the item
            removeFromCart(item);
            return;
        }
        setCartItems((prevItems) =>
            prevItems.map((i) =>
                i.name === item.name
                    ? { ...i, quantity: newQuantity }
                    : i
            )
        );
    };

    // **Logout Function**
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setIsAuthenticated(false); // Set authentication to false
    };

    return (
        <Router>
            {/* Navbar Component */}
            <Navbar
                cartItemCount={cartItems.length} // Pass cart item count to Navbar
                isAuthenticated={isAuthenticated} // Pass authentication state
                handleLogout={handleLogout} // Pass logout handler
            />

            {/* App Routes */}
            <Routes>
                {/* Home Route */}
                <Route path="/" element={<Home />} />

                {/* Menu Route */}
                <Route
                    path="/menu"
                    element={<Menu addToCart={addToCart} />}
                />

                {/* Cart Route */}
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                        />
                    }
                />

                {/* Contact Us Route */}
                <Route path="/contact" element={<ContactForm />} />

                {/* Login Route */}
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Login" replace />
                        ) : (
                            <Login setAuth={setIsAuthenticated} />
                        )
                    }
                />

                {/* Signup Route */}
                <Route
                    path="/signup"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/Signup" replace />
                        ) : (
                            <Signup setAuth={setIsAuthenticated} />
                        )
                    }
                />

                {/* Register Route */}
                <Route path="/register" element={<Register />} 
                    
                />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>

            {/* Footer Component */}
          
            <Footer />
        </Router>
    );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import Menu from './components/Menu';
// import Cart from './components/Cart';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import ContactForm from './components/ContactForm';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Register from './components/Register'; // Assuming you have Register as well

// function App() {
//     const [cartItems, setCartItems] = useState([]);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     // Manage the authentication token (stored in localStorage)
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             setIsAuthenticated(true); // Set user as authenticated if token exists
//         }
//     }, []);

//     // Cart handling functions
//     const addToCart = (item) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find((i) => i.name === item.name);
//             if (existingItem) {
//                 return prevItems.map((i) =>
//                     i.name === item.name
//                         ? { ...i, quantity: i.quantity + 1 }
//                         : i
//                 );
//             }
//             return [...prevItems, item];
//         });
//     };

//     const removeFromCart = (item) => {
//         setCartItems((prevItems) =>
//             prevItems.filter((i) => i.name !== item.name)
//         );
//     };

//     const updateQuantity = (item, newQuantity) => {
//         if (newQuantity === 0) {
//             removeFromCart(item);
//             return;
//         }
//         setCartItems((prevItems) =>
//             prevItems.map((i) =>
//                 i.name === item.name
//                     ? { ...i, quantity: newQuantity }
//                     : i
//             )
//         );
//     };

//     // Logout function
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         setIsAuthenticated(false);
//     };

//     return (
//         <Router>
//             {/* Navbar */}
//             <Navbar
//                 cartItemCount={cartItems.length}
//                 isAuthenticated={isAuthenticated}
//                 handleLogout={handleLogout}
//             />
//             {/* Routes */}
//             <Routes>
//                 <Route path="/" element={<Home />} />
                
//                 <Route
//                     path="/menu"
//                     element={<Menu addToCart={addToCart} />}
//                 />
                
//                 <Route
//                     path="/cart"
//                     element={
//                         <Cart
//                             cartItems={cartItems}
//                             removeFromCart={removeFromCart}
//                             updateQuantity={updateQuantity}
//                         />
//                     }
//                 />
                
//                 <Route path="/contact" element={<ContactForm />} />
                
//                 {/* Login Route */}
//                 <Route
//                     path="/login"
//                     element={
//                         isAuthenticated ? (
//                             <Navigate to="/" />
//                         ) : (
//                             <Login setAuth={setIsAuthenticated} />
//                         )
//                     }
//                 />
                
//                 {/* Signup Route */}
//                 <Route
//                     path="/signup"
//                     element={
//                         isAuthenticated ? (
//                             <Navigate to="/" />
//                         ) : (
//                             <Signup setAuth={setIsAuthenticated} />
//                         )
//                     }
//                 />
                
              
//                 <Route path="/register" element={<Register />} />
//             </Routes>
           
//             <Footer />
//         </Router>
//     );
// }

// export default App;
