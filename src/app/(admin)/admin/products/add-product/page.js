"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function AddProduct() {
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    category: "",
    brand: "",
    stock: "",
    price: "",
    variant: [{ size: "", color: "" }],
  });

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Red", "Blue", "Black", "White"];
  const categories = ["clothing", "electronics", "home", "sports"];
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleVariantChange = (e) => {
    const { name, value } = e.target;
    const updatedVariant = [...productData.variant];
    updatedVariant[0] = {
      ...updatedVariant[0],
      [name]: value,
    };
    setProductData((prev) => ({
      ...prev,
      variant: updatedVariant,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!productData.productName) {
      newErrors.productName = "Product name is required";
    } else if (productData.productName.length < 3) {
      newErrors.productName = "Minimum 3 characters";
    } else if (productData.productName.length > 15) {
      newErrors.productName = "Maximum 15 characters";
    }
    if (!productData.description) newErrors.description = "Required";
    if (!productData.brand) newErrors.brand = "Required";
    if (!productData.category) newErrors.category = "Required";
    if (!productData.stock) newErrors.stock = "Required";
    else if (isNaN(productData.stock)) newErrors.stock = "Must be a number";
    if (!productData.price) newErrors.price = "Required";
    else if (isNaN(productData.price)) newErrors.price = "Must be a number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Product Submitted:", productData);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={4}>
        Add Product
      </Typography>

      <Grid container spacing={3}>
        <Grid
          size={{
            lg: 4,
            m: 6,
            xs: 12,
          }}
        >
          <Card>
            <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' , m:"5"}}>
           <Box
              sx={{
                flex: "1",
                borderRight: { md: "1px solid #eee" },
                pr: { md: 4 },
                textAlign: "center",
              }}
            >
              <Avatar
                variant="rounded"
                src="https://via.placeholder.com/150"
                sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
              />
              <Typography fontWeight={700} fontSize="1.2rem">
                Product Image
              </Typography>
              <Typography color="text.secondary" mb={2}>
                Preview or upload an image
              </Typography>
              <Button
                variant="text"
                sx={{
                  color: "#6366f1",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Upload Image
              </Button>
            </Box>
        </Stack>
           </CardContent>
          </Card>
        </Grid>
        <Grid
          size={{
            lg: 8,
            md: 6,
            xs: 12,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ flex: 2 }}>
            <Typography variant="h6" fontWeight={700} mb={1}>
              Product Details
            </Typography>
            <Typography color="text.secondary" mb={3}>
              The information can be edited
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="Product Name"
                name="productName"
                value={productData.productName}
                onChange={handleChange}
                error={!!errors.productName}
                helperText={errors.productName}
              />
              <TextField
                fullWidth
                label="Brand"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
                error={!!errors.brand}
                helperText={errors.brand}
              />
            </Box>

            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={3}
              value={productData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
              sx={{ mb: 2 }}
            />

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={productData.category}
                onChange={handleChange}
                error={!!errors.category}
                helperText={errors.category}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                label="Stock"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                error={!!errors.stock}
                helperText={errors.stock}
              />
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
              <TextField
                select
                fullWidth
                label="Size"
                name="size"
                value={productData.variant[0].size}
                onChange={handleVariantChange}
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                label="Color"
                name="color"
                value={productData.variant[0].color}
                onChange={handleVariantChange}
              >
                {colors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box textAlign="right">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "#6366f1",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.3,
                  borderRadius: 2,
                  ":hover": { background: "#4f46e5" },
                }}
              >
                Create Product
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddProduct;
