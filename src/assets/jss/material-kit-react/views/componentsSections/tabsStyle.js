import { container, title } from "../../../../../assets/jss/material-kit-react.js";

const tabsStyle = {
  section: {
    background: "#FFFFF",
    padding: "20px 0 40px 0"
  },
  container,
  textCenter: {
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default tabsStyle;
