"use client";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 260;

const navItems = [
  {
    text: "Overview",
    href: "/admin",
    icon: <DashboardIcon fontSize="small" />,
  },
  {
    text: "Products",
    href: "/admin/products",
    icon: <Inventory2Icon fontSize="small" />,
  },
  {
    text: "Customers",
    href: "/admin/customers",
    icon: <GroupIcon fontSize="small" />,
  },
  {
    text: "Orders",
    href: "/admin/orders",
    icon: <ShoppingCartIcon fontSize="small" />,
  },
  {
    text: "Account",
    href: "/admin/account",
    icon: <AccountCircleIcon fontSize="small" />,
  },
  {
    text: "Settings",
    href: "/admin/settings",
    icon: <SettingsIcon fontSize="small" />,
  },
];

export default function AdminSidebar({ children }) {
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0f172a",
            color: "#cbd5e1",
            borderRight: "1px solid #1e293b",
          },
        }}
      >
        {/* Logo Section */}
        <Box
          component={Link}
          href="/"
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1.5,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            component="img"
            src="/logo.svg"
            alt="ShopSmart Logo"
            sx={{ width: 36, filter: "brightness(0) invert(1)" }}
          />
          <Typography fontSize={18} fontWeight="bold" color="white">
            ShopSmart
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#334155", mx: 2, my: 1 }} />

        {/* Navigation Items */}
        <List>
          {navItems.map(({ text, href, icon }) => {
            const isActive = pathname === href;

            return (
              <ListItem key={text} disablePadding>
                <Link
                  href={href}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                >
                  <ListItemButton
                    sx={{
                      px: 3,
                      py: 1.2,
                      color: isActive ? "#fff" : "#cbd5e1",
                      backgroundColor: isActive ? "#1e293b" : "transparent",
                      "&:hover": {
                        backgroundColor: "#1e293b",
                        color: "#fff",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? "#38bdf8" : "#94a3b8",
                        minWidth: "36px",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: isActive ? "bold" : "normal",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>
  );
}
