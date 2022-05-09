import { makeStyles } from "@mui/styles";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    columnGap: "15px",
    rowGap: "15px",
    paddingLeft: "1%",
    paddingRight: "1%",
  },
  shopCard: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "space-around",
    padding: "5%",
    height: "300px",
    border: "1px solid black",
    borderRadius: "14px",
  },
  shopImageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  btn: {
    padding: "2%",
    width: "40%",
    background: "#39AEA9",
    border: "none",
    color: "white",
    fontWeight: "bold",
    borderRadius: "14px",
  },
});
const Shop = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}> Shop</h1>
      <div className={classes.mainContainer}>
        <div className={classes.shopCard}>
          <div className={classes.shopImageContainer}>
            <img
              className={classes.image}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?fit=bounds&format=jpg&width=960"
              alt="img"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Labrador</h3>
            <h4>Rs. 200</h4>
          </div>
          <button className={classes.btn} onClick={() => (window.location.href = "/cart")}>
            Add to Cart
          </button>
        </div>
        <div className={classes.shopCard}>
          <div className={classes.shopImageContainer}>
            <img
              className={classes.image}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?fit=bounds&format=jpg&width=960"
              alt="img"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Labrador</h3>
            <h4>Rs. 200</h4>
          </div>
          <button className={classes.btn} onClick={() => (window.location.href = "/cart")}>
            Add to Cart
          </button>
        </div>
        <div className={classes.shopCard}>
          <div className={classes.shopImageContainer}>
            <img
              className={classes.image}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?fit=bounds&format=jpg&width=960"
              alt="img"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Labrador</h3>
            <h4>Rs. 200</h4>
          </div>
          <button className={classes.btn} onClick={() => (window.location.href = "/cart")}>
            Add to Cart
          </button>
        </div>
        <div className={classes.shopCard}>
          <div className={classes.shopImageContainer}>
            <img
              className={classes.image}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?fit=bounds&format=jpg&width=960"
              alt="img"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Labrador</h3>
            <h4>Rs. 200</h4>
          </div>
          <button className={classes.btn} onClick={() => (window.location.href = "/cart")}>
            Add to Cart
          </button>
        </div>
        <div className={classes.shopCard}>
          <div className={classes.shopImageContainer}>
            <img
              className={classes.image}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?fit=bounds&format=jpg&width=960"
              alt="img"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Labrador</h3>
            <h4>Rs. 200</h4>
          </div>
          <button className={classes.btn} onClick={() => (window.location.href = "/cart")}>
            Add to Cart
          </button>
        </div>
        <div className={classes.shopCard}>
          <div className={classes.shopImageContainer}>
            <img
              className={classes.image}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?fit=bounds&format=jpg&width=960"
              alt="img"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Labrador</h3>
            <h4>Rs. 200</h4>
          </div>
          <button className={classes.btn} onClick={() => (window.location.href = "/cart")}>
            Add to Cart
          </button>
        </div>
        <div className={classes.shopCard}>
          <div className={classes.shopImageContainer}>
            <img
              className={classes.image}
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?fit=bounds&format=jpg&width=960"
              alt="img"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Labrador</h3>
            <h4>Rs. 200</h4>
          </div>
          <button className={classes.btn} onClick={() => (window.location.href = "/cart")}>
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
