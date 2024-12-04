
import React, { useState } from "react";
import axios from "axios";
import './Checkout.css'
const Checkout = () => {
  const [address, setAddress] = useState({
    fullName: "",
    mobileNumber: "",
    pinCode: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentSelect = (e) => {
    setPaymentMethod(e.target.value);
  };

  const renderPaymentDetails = () => {
    switch (paymentMethod) {
      case "card":
        return (
          <div>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Cardholder Name" required />
            <input type="text" placeholder="Expiry Date (MM/YY)" required />
            <input type="password" placeholder="CVV" required />
          </div>
        );
      case "upi":
        return <input type="text" placeholder="Enter UPI ID" required />;
      case "netBanking":
        return (
          <select required>
            <option value="">Select Bank</option>
            <option value="sbi">State Bank of India</option>
            <option value="hdfc">HDFC Bank</option>
            <option value="icici">ICICI Bank</option>
          </select>
        );
      case "cod":
        return <p>Cash on Delivery selected. No additional details required.</p>;
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/orders", {
        ...address,
        paymentMethod,
      });

      alert(response.data.message);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout Page</h1>
      <form onSubmit={handleSubmit}>
        <h2>Enter Address Details</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={address.fullName}
          onChange={handleAddressChange}
          required
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={address.mobileNumber}
          onChange={handleAddressChange}
          required
        />
        <input
          type="text"
          name="pinCode"
          placeholder="PIN Code"
          value={address.pinCode}
          onChange={handleAddressChange}
          required
        />
        <input
          type="text"
          name="addressLine1"
          placeholder="Address Line 1"
          value={address.addressLine1}
          onChange={handleAddressChange}
          required
        />
        <input
          type="text"
          name="addressLine2"
          placeholder="Address Line 2"
          value={address.addressLine2}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleAddressChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleAddressChange}
          required
        />

        <h2>Select Payment Method</h2>
        <div>
          <label>
            <input type="radio" name="payment" value="card" onChange={handlePaymentSelect} />
            Credit/Debit Card
          </label>
          <label>
            <input type="radio" name="payment" value="upi" onChange={handlePaymentSelect} />
            UPI
          </label>
          <label>
            <input type="radio" name="payment" value="netBanking" onChange={handlePaymentSelect} />
            Net Banking
          </label>
          <label>
            <input type="radio" name="payment" value="cod" onChange={handlePaymentSelect} />
            Cash on Delivery (COD)
          </label>
        </div>
        {renderPaymentDetails()}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
