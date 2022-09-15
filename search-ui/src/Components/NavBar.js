// import logo from "../images/NFDI_logo_claim.png";
import logo from "../images/GFBio_logo.png";

export default function NavBar(props) {
  const classes = {
    navWrapper: {
      maxWidth: "100%",
      boxShadow: "0 6px 6px -6px #999",
      backgroundColor: "white",
    },
    navBar: {
      maxWidth: "960px",
      margin: "0 auto",
      padding: "5px 0",
    },
    logo: {
      height: "50px",
    },
  };
  return (
    <div style={classes.navWrapper}>
      <div style={classes.navBar}>
        <img src={logo} style={classes.logo} alt="NFDI logo with claim" />
      </div>
    </div>
  );
}
