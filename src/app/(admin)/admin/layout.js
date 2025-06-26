import AdminNav from "@/app/components/admin/adminNav";
import AdminLayoutProvider from "@/app/components/provider/AdminLayoutProvider";
import { Divider } from "@mui/material";

export const metadata = {
  title: "ShopSmart: Auth",
  description: "Modern E-commerce Store",
};

export default function AdminLayout({ children }) {
  return (
    <AdminLayoutProvider>
      <AdminNav />
      <Divider sx={{ borderColor: "#39588433", my: 1 }} />
      {children}
    </AdminLayoutProvider>
  );
}
