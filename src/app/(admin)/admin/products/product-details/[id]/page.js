// src/app/(admin)/admin/products/[id]/page.jsx
"use client";
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Product Details - product description
      </Typography>
    </Box>
  );
}
