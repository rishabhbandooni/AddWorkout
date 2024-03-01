// src/components/Auth/ForgotPassword.js
import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Container>
      <Typography variant="h2">Forgot Password</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
      />
      <Button variant="contained" color="primary" fullWidth>
        Reset Password
      </Button>
      <Typography variant="body1" mt={2}>
        Remembered your password? <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default ForgotPassword;
