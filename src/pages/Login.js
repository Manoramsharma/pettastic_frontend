import { Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Swal from "sweetalert2";
import { validateEmail, validatePassword } from "../helper/validator";
import { login, googlelogin, facebooklogin } from "../redux/actions/authAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

import { Link } from "react-router-dom";
import image from "../images/Loginimg.jpg";
axios.defaults.withCredentials = true;

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
  },
  leftContainer: {
    width: "40%",
    height: " 100vh",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  rightContainer: {
    marginTop: "5%",
    height: "40vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    justifyContent: "space-evenly",
    height: "90%",
  },
  socialButton: {
    display: "flex",
    flexDirection: "column",
  },
  googleButton: {},
});
const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function loginAPI(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email...",
        text: "Please try again :(",
      });
    } else if (!validatePassword(password)) {
      // validating password
      Swal.fire({
        icon: "error",
        title: "Invalid Password..",
        text: "Password should be 8 characters long, should have one numerical, capital and a special character",
      });
    } else {
      const userData = {
        email: email,
        password: password,
      };
      dispatch(login(userData));
    }
  }
  const responseGoogle = (response) => {
    dispatch(googlelogin(response));
  };
  const responseFacebook = (response) => {
    dispatch(facebooklogin(response));
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <img className={classes.img} src={image} alt="img" />
      </div>
      <Container className={classes.rightContainer}>
        <Typography variant="h5" color="textPrimary" component="h2" gutterBottom>
          Login to Continue
        </Typography>
        <form noValidate className={classes.form} autoComplete="off" onSubmit={loginAPI}>
          <TextField
            className={classes.field}
            label="Username or Email"
            variant="standard"
            color="secondary"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.field}
            label="Password"
            variant="standard"
            type="password"
            colors="primary"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/forgotpassword"}>
            <div className={classes.forgotPass}>Forgot Password</div>
          </Link>
          <Button type="submit" color="secondary" variant="contained" className={classes.btn}>
            Submit
          </Button>
        </form>
        <div className={classes.socialButton}>
          <Typography style={{ whiteSpace: "nowrap" }} gutterBottom>
            Or Log in with
          </Typography>
          <GoogleLogin
            clientId="240650313405-8u85vv2auaabjq44cle3126gbnm3mi12.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className={classes.googleButton}
          />
          <FacebookLogin
            appId="558674212075076"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            textButton="Facebook"
            size="small"
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            className={classes.googleButton}
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Sign up
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
