import { makeStyles } from "@mui/styles";
import logo from "../images/logo.png";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";
import LogoutIcon from "@mui/icons-material/Logout";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "7vh",
    // background: "#39AEA9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1%",
    borderBottom: "1px solid #EEE",
  },
  imageContainer: {
    height: "90%",
    width: "15%",
    borderRadius: "50%",
  },
  image: {
    heigth: "100%",
    width: "100%",
  },
  secondaryContainer: {
    display: "flex",
    width: "25%",

    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "-1%",
  },
  buttonContainer: {
    display: "flex",
    width: "35%",
    height: "100%",

    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));

const LoggedInNavbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.secondaryContainer}>
        <div className={classes.imageContainer}>
          <img className={classes.image} alt="logo" src={logo} />
        </div>
        <Button variant="text" onClick={() => (window.location.href = "/")}>
          Home
        </Button>
        <Button variant="text">Contact Us</Button>
      </div>
      <div className={classes.buttonContainer}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>
        <Button variant="outlined" startIcon={<AccountCircleIcon />}>
          Profile
        </Button>
        <Button variant="contained" startIcon={<LogoutIcon />} onClick={() => dispatch(logout())}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default LoggedInNavbar;
