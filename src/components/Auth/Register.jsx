// src/components/Auth/Register.js
import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Typography variant="h2">Register</Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
      />
      <Button variant="contained" color="primary" fullWidth>
        Register
      </Button>
      <Typography variant="body1" mt={2}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default Register;
