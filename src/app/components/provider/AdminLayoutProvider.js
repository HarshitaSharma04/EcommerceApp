import AdminSidebar from "../admin/adminSidebar";

export const metadata = {
  title: "ShopSmart: Auth",
  description: "Modern E-commerce Store",
};

export default function AdminLayoutProvider({ children }) {
  return <AdminSidebar>{children}</AdminSidebar>;
}
