import { makeStyles } from "@mui/styles";
import Signupimage from "../images/Signupimg.jpg";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/actions/authAction";
import Swal from "sweetalert2";
import { validateEmail, validatePassword } from "../helper/validator";

import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles({
  mainConatiner: {
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
  },
  leftContainer: {
    width: "40%",
    height: "100%",
  },
  leftImage: {
    height: "100%",
    width: "100%",
  },
  rightContainer: {
    width: "20%",
    marginTop: "4%",
  },
});
const Signup = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [fullname, setFullname] = useState("sohan123");
  const [username, setUsername] = useState("sohan");
  const [email, setEmail] = useState("abc@example.com");
  const [password, setPassword] = useState("Manroram@123");
  const [confirmPassword, setConfirmPassword] = useState("Manoram@123");
  const [gender, setGender] = useState("male");
  const [emailError, setEmailError] = useState(false);
  const [fullnameError, setFullnameError] = useState(false);

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);
  const signUpForm = (e) => {
    e.preventDefault();
    if (fullname === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Please enter valid name",
      });
      setFullnameError(true);
    } else if (!validateEmail(email)) {
      setEmailError(true);
      Swal.fire({
        icon: "error",
        title: "Invalid Email...",
        text: "Please try again :(",
      });
    } else {
      // checking if password is same or not
      if (password !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Password doesn't match..",
          text: "Please try again :(",
        });
      } else {
        // if password is same
        if (!validatePassword(password)) {
          // validating password
          Swal.fire({
            icon: "error",
            title: "Invalid Password..",
            text: "Password should be 8 characters long, should have one numerical, capital and a special character",
          });
        } else {
          const userData = {
            fullname,
            username,
            email,
            password,
            gender,
          };
          dispatch(register(userData));
        }
      }
    }
  };
  return (
    <div className={classes.mainConatiner}>
      <div className={classes.leftContainer}>
        <img className={classes.leftImage} src={Signupimage} alt="" />
      </div>
      <Container className={classes.rightContainer}>
        <Typography
          variant="h5"
          color="textPrimary"
          component="h2"
          style={{ whiteSpace: "nowrap" }}
          gutterBottom
        >
          Signup to Continue
        </Typography>
        <form noValidate autoComplete="off" onSubmit={signUpForm}>
          <TextField
            className={classes.field}
            id="outlined-basic"
            label="Full Name"
            variant="standard"
            InputProps={{ classes: { root: classes.inputRoot } }}
            InputLabelProps={{
              classes: {
                root: classes.labelRoot,
                focused: classes.labelFocused,
              },
            }}
            color="secondary"
            fullWidth
            required
            error={fullnameError}
            // helperText={text === "asdf" ? 'Empty field!' : ' '}
            onChange={(e) => setFullname(e.target.value)}
          />
          <TextField
            className={classes.field}
            label="Username"
            variant="standard"
            color="secondary"
            fullWidth
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className={classes.field}
            label="Email"
            variant="standard"
            color="secondary"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <TextField
            className={classes.field}
            label="Password"
            variant="standard"
            color="secondary"
            fullWidth
            required
            type="password"
            helperText="
                Minimum 8 characters:
                1 capital, 1 small, 1 special character allowed"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className={classes.field}
            label="Confirm Password"
            variant="standard"
            color="secondary"
            fullWidth
            required
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            label="Gender"
            value={gender}
            select
            fullWidth
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </TextField>
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            className={classes.btn}
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
