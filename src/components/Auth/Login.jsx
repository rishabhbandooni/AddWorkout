// src/components/Auth/Login.js
import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Typography variant="h2">Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
      />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
      <Typography variant="body1" mt={2}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
      <Typography variant="body1">
        Forgot your password? <Link to="/forgot-password">Reset it here</Link>
      </Typography>
    </Container>
  );
};

export default Login;
