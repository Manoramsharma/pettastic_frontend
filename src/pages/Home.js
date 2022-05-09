import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import home from "../images/home.png";
import hipandjoint from "../images/hipandjoint.png";
import allergyandcoat from "../images/allergyandcoat.png";
import nutritionboosts from "../images/nutritionboosts.png";
import bullysticks from "../images/bullysticks.png";
import shop from "../images/shop.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "60vh",
    background: "#39AEA9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    height: "auto",
    width: "40%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  //   typography: {
  //     fontColor: "red",
  //   },
  buttonContainer: {
    display: "flex",
    alignItems: "left",
    justifyContent: "space-around",
  },
  shopContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  images: {
    width: "20%",
  },
  leftImage: {
    width: "47%",
    height: "50vh",
    borderRadius: "10px",
  },
  rightContainer: {
    width: "50%",
  },
  rightImage: {
    height: "50vh",
    borrderRadius: "10px",
  },
  btnShopNow: {
    marginTop: "5%",
    padding: "1%",
    width: "20%",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    borderRadius: "14px",
    border: "none",
    background: "#39AEA9",
    color: "white",
  },
}));

export const Home = () => {
  const { auth } = useSelector((state) => state);
  const classes = useStyles();
  return (
    <div>
      {auth.token ? <LoggedInNavbar /> : <Navbar />}
      <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
          <Typography
            style={{ fontFamily: "Montserrat", weight: 700 }}
            variant="h2"
            gutterBottom
            component="div"
          >
            Smarter way to
            <br />
            shop pets.
          </Typography>
          <Typography
            style={{ fontFamily: "Montserrat" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Pettastic is a fast , free and reliable platform .
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" onClick={() => (window.location.href = "/login")}>
              Create Account
            </Button>
            <Button variant="outlined" onClick={() => (window.location.href = "/shop")}>
              Explore
            </Button>
          </div>
        </div>

        <div className={classes.imageContainer}>
          <img className={classes.image} src={home} alt="Home" />
        </div>
      </div>
      <div className={classes.shopContainer}>
        <img className={classes.images} src={hipandjoint} alt="" />
        <img className={classes.images} src={nutritionboosts} alt="" />
        <img className={classes.images} src={allergyandcoat} alt="" />
        <img className={classes.images} src={bullysticks} alt="" />
      </div>
      <div className={classes.shopContainer}>
        <img className={classes.leftImage} src={shop} alt="images" />
        <div className={classes.rightContainer}>
          <img
            className={classes.rightImage}
            src="https://cdn.shopify.com/s/files/1/0560/3482/0282/files/img-9_1920x.png?v=1622107247"
            alt="iamges"
          />
          <div style={{ position: "absolute", top: "125vh", left: "55%" }}>
            <Typography
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                fontFamily: "Montserrat",
              }}
            >
              Advanced Hip {"&"} Joint
              <br /> Soft Chews
            </Typography>
            <Typography style={{ fontSize: "1rem", fontFamily: "Montserrat" }}>
              Happy, Healthy Advanced Hip {"&"} Joint soft chews for dogs provide
              <br /> natural relief from joint distress for improved flexibility ....
            </Typography>
            <button className={classes.btnShopNow} onClick={() => (window.location.href = "/shop")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
