import AdminNav from "@/app/components/admin/adminNav";
import AdminLayoutProvider from "@/app/components/provider/AdminLayoutProvider";

export const metadata = {
  title: "ShopSmart: Auth",
  description: "Modern E-commerce Store",
};

export default function AdminLayout({ children }) {
  return <AdminLayoutProvider>
  <AdminNav/>
  {children}
  </AdminLayoutProvider>;
}
