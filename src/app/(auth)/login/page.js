"use client";

import {
  Box,
  Button,
  Typography,
  Stack,
  Alert,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

export default function LoginPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "harshitash09@gmail.com",
      password: "pass@@2"
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Add actual login logic here
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h4">Sign in</Typography>
        <Typography color="text.secondary" variant="body2">
          Don&apos;t have an account?{" "}
          <Link href="/signUp" style={{ textDecoration: "underline" }}>
            Sign up
          </Link>
        </Typography>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput {...field} label="Email address" type="email" />
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  {...field}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    showPassword ? (
                      <EyeIcon
                        cursor="pointer"
                        fontSize={20}
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <EyeSlashIcon
                        cursor="pointer"
                        fontSize={20}
                        onClick={() => setShowPassword(true)}
                      />
                    )
                  }
                />
              </FormControl>
            )}
          />

          <div>
            <Link href="/forgetPass" style={{ textDecoration: "underline" }}>
              Forgot password?
            </Link>
          </div>

          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </Stack>
      </form>

      {/* <Alert color="warning">
        Use{" "}
        <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
          sofia@devias.io
        </Typography>{" "}
        with password{" "}
        <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
          Secret1
        </Typography>
      </Alert> */}
    </Stack>
  );
}
