"use client"
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

function CustomerDetailPage() {
  const { id } = useParams();
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        customer Details - {id}
      </Typography>
    </Box>
  );
}

export default CustomerDetailPage;
