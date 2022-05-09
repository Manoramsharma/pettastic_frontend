import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  heading: {
    fontSize: "1.3rem",
  },
  subHeading: {
    fontSize: "1rem",
  },
  mainDiv: {
    marginTop: "7%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#557B83",
    color: "white",
    height: "30vh",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <div className={classes.smallDiv}>
        <h1 className={classes.heading}>COMPANY</h1>
        <h3 className={classes.subHeading}>ABOUT US</h3>
        <h3 className={classes.subHeading}>BLOG</h3>
      </div>
      <div className={classes.smallDiv}>
        <h1 className={classes.heading}>COMPANY</h1>
        <h3 className={classes.subHeading}>ABOUT US</h3>
        <h3 className={classes.subHeading}>BLOG</h3>
      </div>
      <div className={classes.smallDiv}>
        <h1 className={classes.heading}>COMPANY</h1>
        <h3 className={classes.subHeading}>ABOUT US</h3>
        <h3 className={classes.subHeading}>BLOG</h3>
      </div>
      <div className={classes.smallDiv}>
        <h1 className={classes.heading}>COMPANY</h1>
        <h3 className={classes.subHeading}>ABOUT US</h3>
        <h3 className={classes.subHeading}>BLOG</h3>
      </div>
    </div>
  );
};

export default Footer;
