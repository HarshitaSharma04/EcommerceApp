"use client";

import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";

// Sample product data
const products = [
  {
    id: 1,
    name: "Modern T-Shirt",
    price: "₹499",
    image: "shirt.jpg",
  },
  {
    id: 2,
    name: "Sports Shoes",
    price: "₹1,299",
    image: "shoes.jpg",
  },
  {
    id: 3,
    name: "Digital Watch",
    price: "₹2,499",
    image: "watch.jpg",
  },
];

export default function LandingPage() {
  const currentMonth = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <main>

    <Navbar/> 
      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(to right, rgb(203, 59, 88), rgb(19, 205, 187))",
            py: { xs: 8, md: 12 },
            textAlign: "center",
            color: "white",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Discover the Newest Trends
            </Typography>
            <Typography variant="h6" mb={4}>
              Your one-stop shop for clothing, electronics, and accessories.
            </Typography>
            <Button
              component={Link}
              href="/products"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#fff",
                color: "black",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              Shop Now
            </Button>
          </Container>
        </Box>

        {/* Featured Products Section */}
        <Container sx={{ py: 8 }}>
          <Typography
            variant="overline"
            textAlign="center"
            display="block"
            color="text.secondary"
            mb={1}
          >
            New Arrivals – {currentMonth}
          </Typography>

          <Typography variant="h4" textAlign="center" gutterBottom>
            Featured Products
          </Typography>

          {/* Cards using Box */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
              mt: 4,
            }}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                sx={{
                  width: 280,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography color="text.secondary">{product.price}</Typography>
                  <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box textAlign="center" mt={5}>
            <Button component={Link} href="/products" variant="text">
              View All Products →
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </main>
  );
}
