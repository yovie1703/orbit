import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";

//import landing from "../../../assets/img/landing.jpg";
import dunia from "../../../assets/img/lintasan-dunia.png";
import indo from "../../../assets/img/lintasan-indonesia.png";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.name}>
          <h2 className={classes.title}> Pemantauan Real-Time</h2>
        </div>
        <GridContainer style={{borderStyle:"1px solid"}}>
          <GridItem xs={12} sm={12} md={6} lg={6} style={{paddingRight:"0px", }}>
            {/*<Link to="landing-page" className={classes.link}>*/}
            <Link to="#" className={classes.link}>
              <img
                src={dunia}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              
              <Button className={classes.button} color="info" size="lg" round>
                More Information
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6}>
            <Link to="#" className={classes.link}>
              <img
                src={indo}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              
              <Button className={classes.button} color="info" size="lg" round>
                More Information
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
