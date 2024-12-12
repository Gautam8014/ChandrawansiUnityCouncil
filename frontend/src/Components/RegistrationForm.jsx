import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    address: {
      houseNumber: "",
      policeStation: "",
      pincode: "",
      city: "",
      state: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.address) {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));

      if (name === "pincode" && value.length === 6) {
        fetchAddressFromPincode(value);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const fetchAddressFromPincode = async (pincode) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      if (data[0]?.Status === "Success") {
        const { District, State } = data[0].PostOffice[0];
        setFormData((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            city: District,
            state: State,
          },
        }));
      } else {
        alert("Invalid Pincode or no data available");
      }
    } catch (error) {
      console.error("Error fetching address data:", error);
      alert("Failed to fetch address. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        alert("Registration Successful!");
        setFormData({
          name: "",
          mobileNumber: "",
          address: {
            houseNumber: "",
            policeStation: "",
            pincode: "",
            city: "",
            state: "",
          },
        });
      } else {
        const error = await response.json();
        alert(`Failed to register: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-form">
      <h2>Member Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            placeholder="+91"
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="form-group">
          <label>Address Line 1:</label>
          <input
            type="text"
            name="houseNumber"
            placeholder="House no. Village"
            value={formData.address.houseNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address Line 2:</label>
          <input
            type="text"
            name="policeStation"
            placeholder="Police Station"
            value={formData.address.policeStation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.address.pincode}
            onChange={handleChange}
            pattern="[0-9]{6}"
            required
          />
          {loading && <p>Fetching address details...</p>}
        </div>

        <div className="form-group">
          <label>District:</label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
            readOnly
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.address.state}
            onChange={handleChange}
            readOnly
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
