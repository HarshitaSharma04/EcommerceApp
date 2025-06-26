"use client";
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function AddCustomer() {
  const [customerData, setCustomerData] = useState({
    customerName: "",
    email: "",
    location: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!customerData.customerName) {
      newErrors.customerName = "**Customer name is required";
    } else if (customerData.customerName.length > 10) {
      newErrors.customerName = "**Name should not exceed 10 characters";
    }

    // Email validation
    if (!customerData.email) {
      newErrors.email = "**Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(customerData.email)) {
      newErrors.email = "**Invalid email format";
    }

    // Location validation
    if (!customerData.location) {
      newErrors.location = "**Location is required";
    }

    // Phone validation
    if (!customerData.phone) {
      newErrors.phone = "**Phone is required";
    } else if (isNaN(customerData.phone)) {
      newErrors.phone = "**Phone must be a number";
    } else if (customerData.phone.length !== 10) {
      newErrors.phone = "**Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔️ Prevent form reload
    if (validate()) {
      console.log("Form submitted:", customerData);
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" mb={2} textAlign="center">
        Create New Customer
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Customer Name"
          margin="normal"
          name="customerName"
          value={customerData.customerName}
          onChange={handleChange}
          error={!!errors.customerName}
          helperText={errors.customerName}
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          value={customerData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          label="Location"
          margin="normal"
          name="location"
          value={customerData.location}
          onChange={handleChange}
          error={!!errors.location}
          helperText={errors.location}
        />
        <TextField
          fullWidth
          label="Phone"
          margin="normal"
          name="phone"
          value={customerData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          type="submit"
        >
          Create Customer
        </Button>
      </form>
    </Box>
  );
}

export default AddCustomer;
