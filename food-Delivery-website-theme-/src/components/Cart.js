// import React from 'react';
// import '../App.css';
// import cancel from '../images/cross_icon.png';

// const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {

//   const subtotal = cartItems.reduce((total, item) => {
//     return total + (Number(item.price.replace('₹', '')) * item.quantity);
//   }, 0);
  
//   const deliveryFee = subtotal > 0 ? 50 : 0;
//   const total = subtotal + deliveryFee;

//   return (
//     <div>
//       <div className="cart-container">
//         <table className="cart-table">
//           <thead>
//             <tr>
//               <th>Items</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <img 
//                     src={item.img} 
//                     alt={item.name} 
//                     style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                   />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>
//                   <div className="quantity-controls">
//                     <button 
//                       onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}
//                       className="quantity-btn"
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button 
//                       onClick={() => updateQuantity(item, item.quantity + 1)}
//                       className="quantity-btn"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>
//                 <td>₹{(Number(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</td>
//                 <td>
//                   <button 
//                     onClick={() => removeFromCart(item)}
//                   >
//                     <img src={cancel} alt='cancel'></img>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="cart-summary">
//           <div className="cart-totals">
//             <h3>Cart Totals</h3>
//             <div className="totals-row">
//               <span>Subtotal</span>
//               <span>₹{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="totals-row">
//               <span>Delivery Fee</span>
//               <span>₹{deliveryFee.toFixed(2)}</span>
//             </div>
//             <div className="totals-row">
//               <strong>Total</strong>
//               <strong>₹{total.toFixed(2)}</strong>
//             </div>
//             <button className="checkout-btn">PROCEED TO CHECKOUT</button>
//           </div>

//           <div className="promo-code">
//             <p>If you have a promo code, Enter it here</p>
//             <input type="text" placeholder="promo code" />
//             <button className="btn">Submit</button>
//             <div className='empty'>

//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };
// export default Cart;
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import cancel from '../images/cross_icon.png';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce((total, item) => {
    return total + (Number(item.price.replace('₹', '')) * item.quantity);
  }, 0);

  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div>
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>₹{(Number(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(item)}>
                    <img src={cancel} alt="cancel" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-summary">
          <div className="cart-totals">
            <h3>Cart Totals</h3>
            <div className="totals-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="totals-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="totals-row">
              <strong>Total</strong>
              <strong>₹{total.toFixed(2)}</strong>
            </div>
            <Link to={{ pathname: '/checkout', state: { subtotal, deliveryFee, total } }}>
              <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            </Link>
          </div>

          <div className="promo-code">
            <p>If you have a promo code, Enter it here</p>
            <input type="text" placeholder="promo code" />
            <button className="btn">Submit</button>
            <div className="empty"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
