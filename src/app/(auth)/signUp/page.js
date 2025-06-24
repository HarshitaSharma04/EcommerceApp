"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

export default function SignupPage() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom textAlign="center">
        Create an Account
      </Typography>

      <form noValidate>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          required
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 2, py: 1 }}
        >
          Sign Up
        </Button>
      </form>

      <Typography variant="body2" textAlign="center" mt={2}>
        Already have an account?{" "}
        <MuiLink component={Link} href="/login">
          Login
        </MuiLink>
      </Typography>
    </Box>
  );
}
