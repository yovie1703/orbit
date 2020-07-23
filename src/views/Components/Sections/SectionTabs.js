import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Face from "@material-ui/icons/Face";
// import Chat from "@material-ui/icons/Chat";
// import Build from "@material-ui/icons/Build";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import CustomTabs from "../../../components/CustomTabs/CustomTabs.js";

//baru
import dunia from "../../../assets/img/lintasan-dunia.png";
import { Link } from "react-router-dom";
import Button from "../../../components/CustomButtons/Button.js";
import Dashboard from "@material-ui/icons/Dashboard";


import LibraryBooks from "@material-ui/icons/LibraryBooks"
import NavPills from "../../../components/NavPills/NavPills.js";
import Muted from "../../../components/Typography/Muted.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Pemantauan Real-Time (Track-It)
        </h2>
        
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <Link to="#" className={classes.link}> */}
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
              <Button className={classes.button} color="info" round>
                  Detail
              </Button>
              {/* </Link> */}
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <NavPills
                color="info"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Apa itu Track-It",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p style={{fontSize:"14px"}}>
                          Track-it dibuat untuk memudahkan pemantauan terhadap 
                          benda-benda buatan yang semakin banyak mengitari bumi 
                          dan berpotensi jatuh apabila ketinggiannya cukup rendah.
                          Sebagian besar di antara benda-benda ini adalah sampah antariksa. 
                          Berbeda halnya dengan space-shuttle atau satelit yang memiliki perangkat kendali, 
                          sampah antariksa apabila jatuh tidak dapat diatur kapan dan di mana jatuhnya.
                          
                        </p>
                        
                        <Link to="#" style={{fontSize:"12px", position:"absolute", right:"0px"}}>
                          <Muted >
                            Lanjut Baca ...
                          </Muted>
                        </Link>
                        
                        
                        
                      </span>
                    )
                  },
                  {
                    tabButton: "Manfaat Track-It",
                    tabIcon: LibraryBooks,
                    tabContent: (
                      <span>
                        <p style={{fontSize:"14px"}}>
                        Dengan keberadaan Track-it yang mampu memantau secara otomatis 
                        benda-benda antariksa buatan yang berpotensi jatuh di wilayah Indonesia 
                        maka dengan mudah diketahui identitas benda-benda yang telah jatuh 
                        di wilayah Indonesia. Selain itu sejak awal kita sudah mengetahui 
                        benda-benda mana saja yang berpotensi jatuh di negara kita 
                        sehingga jika diperlukan upaya mitigasi dapat dilakukan lebih cepat.
                        
                        </p>
                        <Link to="#" style={{fontFamily:"sans-serif", fontSize:"12px", position:"fixed",right:"-350px"}}>
                          <Muted >
                            Lanjut Baca ...
                          </Muted>
                        </Link>
                                <br />             
                      
                      </span>
                    )
                  }
                ]}
              />
              {/* <h3>
                <small>Tabs on Plain Card</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Updates",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "History",
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              /> */}
            </GridItem>
          </GridContainer>
        
      </div>
    </div>
  );
}
