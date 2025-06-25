import AuthLayoutProvider from "../components/provider/AuthLayoutProvider";

export const metadata = {
  title: "ShopSmart: Auth",
  description: "Modern E-commerce Store",
};

export default function AuthLayout({ children }) {
  return <AuthLayoutProvider>{children}</AuthLayoutProvider>;
}
