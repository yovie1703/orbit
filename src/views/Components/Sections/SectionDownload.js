/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
// core components
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        
        <div className={classes.textCenter + " " + classes.sharingArea}>
          {/* <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer> */}
          <Button color="rose">
            <i className={classes.socials + " fab fa-instagram"} />@pussainsa_lapan 
          </Button>
          {/* <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> 
          </Button> */}
          <Button color="google">
            <i className={classes.socials + " fab fa-youtube-square"} />Pussainsa
            
          </Button>
          {/* <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button> */}
        </div>
      </div>
    </div>
  );
}
