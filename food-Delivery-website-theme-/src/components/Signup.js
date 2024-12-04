import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      navigate("/login"); 
    } catch (error) {
      console.error(
        "Error signing up:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.error || "Signup failed! Please try again.");
    }
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { textAlign: "center", marginBottom: "20px" } }, 
      "Signup"
    ),
    React.createElement(
      "form",
      { onSubmit: handleSubmit },
      React.createElement("input", {
        type: "text",
        placeholder: "Name",
        value: name,
        onChange: (e) => setName(e.target.value),
        required: true,
      }),
      React.createElement("input", {
        type: "email",
        placeholder: "Email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        required: true,
      }),
      React.createElement("input", {
        type: "password",
        placeholder: "Password",
        value: password,
        onChange: (e) => setPassword(e.target.value),
        required: true,
      }),
      React.createElement("button", { type: "submit" }, "Signup")
    )
  );
}

export default Signup;




// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Hook to programmatically navigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/signup", {
//         name,
//         email,
//         password,
//       });
//       console.log("Signup successful:", response.data);
//       alert("Signup successful!");
//       navigate("/login"); // Redirect to the login page after successful signup
//     } catch (error) {
//       console.error(
//         "Error signing up:",
//         error.response?.data || error.message
//       );
//       alert(error.response?.data?.error || "Signup failed! Please try again.");
//     }
//   };

//   return React.createElement(
//     "form",
//     { onSubmit: handleSubmit },
//     React.createElement("input", {
//       type: "text",
//       placeholder: "Name",
//       value: name,
//       onChange: (e) => setName(e.target.value),
//       required: true,
//     }),
//     React.createElement("input", {
//       type: "email",
//       placeholder: "Email",
//       value: email,
//       onChange: (e) => setEmail(e.target.value),
//       required: true,
//     }),
//     React.createElement("input", {
//       type: "password",
//       placeholder: "Password",
//       value: password,
//       onChange: (e) => setPassword(e.target.value),
//       required: true,
//     }),
//     React.createElement("button", { type: "submit" }, "Signup")
//   );
// }

// export default Signup;
