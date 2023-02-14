import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Signin = ({ setSignIn,user, setUser, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("error");
  const [isAlert, setIsAlert] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (email === "" || password === "") {
      setMessage("Хэрэглэгчийн мэдээлэл хоосон байнаа.");
      setIsAlert(true);
      return;
    }

    login(email, password);
  };

  const login = async (email, password) => {
    // console.log("Login", email);
    // console.log("Login", password);

    try {
      const res = await axios.post("http://localhost:8000/users/signin", {
        email,
        password,
      });
      console.log("SUCCESS", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setStatus("success");
      setMessage(res.data.message);
      console.log(res.data.user)
      setIsAlert(true);
      setUser(res.data.user);
      setTimeout(() => {
        handleClose();
      }, 5000);
    } catch (error) {
      console.log("ERROR", error);
      setStatus("error");
      setMessage(error.response.data);
      setIsAlert(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "30px 50px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          НЭВТРЭХ
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            НЭВТРЭХ
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => {
                  setSignIn(false);
                }}
              >
                Бүртгүүлэх
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isAlert}
        autoHideDuration={3000}
        onClose={() => {
          setIsAlert(false);
        }}
      >
        <Alert severity={status}>{message}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Signin;
