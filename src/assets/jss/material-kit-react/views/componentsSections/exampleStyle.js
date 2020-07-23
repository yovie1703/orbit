import { containerFluid, title } from "../../../../../assets/jss/material-kit-react.js";

import imagesStyle from "../../../../../assets/jss/material-kit-react/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  },
  button: {
    marginTop: "10px"
  },
  name: {
    marginTop: "-70px"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }

};

export default exampleStyle;
