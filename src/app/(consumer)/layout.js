// src/app/(consumer)/all-products/layout.js
import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function AllProductsLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
