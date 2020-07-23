import { container, cardTitle, title } from "../../../../../assets/jss/material-kit-react.js";

import imagesStyle from "../../../../../assets/jss/material-kit-react/imagesStyles.js";

const cardStyle = {
  section: {
    padding: "0px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  ...imagesStyle,
  cardTitle,
  title: {
    ...title,
    marginBottom: "0",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default cardStyle;
