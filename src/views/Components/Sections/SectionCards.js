import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import Button from "../../../components/CustomButtons/Button.js";

//baru
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";


import dunia from "../../../assets/img/lintasan-dunia.png";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/cardStyle.js";

// const styles = {
//   ...imagesStyles,
//   cardTitle,
// };

const useStyles = makeStyles(styles);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.title}>Latest
        </h1>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem"}}>
              <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={dunia}
                alt="Card-img-cap"
              />
              <CardBody>
                <h4 className={classes.cardTitle}>Judul</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button color="info" size="sm">Read</Button>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem"}}>
              <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={dunia}
                alt="Card-img-cap"
              />
              <CardBody>
                <h4 className={classes.cardTitle}>Judul</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button color="info" size="sm">Read</Button>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem"}}>
              <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={dunia}
                alt="Card-img-cap"
              />
              <CardBody>
                <h4 className={classes.cardTitle}>Judul</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button color="info" size="sm">Read</Button>
              </CardBody>
              
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    
  );
}