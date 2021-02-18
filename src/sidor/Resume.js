import React, { useRef, useEffect } from "react";

import { TweenMax, Power1, Power2, Power3, Bounce, Elastic } from "gsap";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    width: 200,
    height: 200,
    margin: 10,
    backgroundColor: "#243447",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      backgroundColor: "#f3f4f4",
    },
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
    fontFamily: "Quicksand",
    color: "#c51f5d",
  },
  second: {
    fontSize: 18,
    fontFamily: "Quicksand",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: 15,
    color: '#141d26',
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
    fontFamily: "Raleway",
  },
});

export default function SimpleCard() {
  let logoItem = useRef(null);

  const classes = useStyles();

 /* useEffect(() => {
    console.log(logoItem);
    TweenMax.to(
      logoItem,
      1,
      {
        opacity: 1,
        y: -50,
        ease: Elastic.easeInOut,
        stagger: 0.1,
      },
      "<0.5"
    );
  }, []); */

  return (
    <div className="resume-container">
      <div className="resume-cards">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NOROFF
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2018-2020
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              FRONTEND DEVELOPER
            </Typography>
          </CardContent>
        </Card>
        <Card
          className={classes.root}
        >
          <CardContent>
            <Typography className={classes.title} color="#197acf" gutterBottom>
              SUBWAY NORGE
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2019-Present
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              IT-TECHNICIAN
            </Typography>
          </CardContent>
        </Card>
        <Card
          className={classes.root}
          ref={(el) => {
            logoItem = el;
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              JENSENS BØFHUS
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2017-Present
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              KITCHEN EMPLOYEE
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              COCA COLA
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2015-2016
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              WAREHOUSE EMPLOYEE
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="resume-cards">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI{" "}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2014-2016
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              COMPUTER TECHNOLOGY
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI{" "}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2014-2016
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              COMPUTER COORDINATION AND SUPPORT
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2014-2016
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              ADMINISTRATION OF NETWORK AND SERVER EQUIPMENT
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2014-2016
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              NETWORK ADMINISTRATION
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="resume-cards">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI{" "}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2014-2016
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              NETWORK TECHNOLOGY
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              COOP AS
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2013-2014
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              WAREHOUSE EMPLOYEE
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              TINE AS
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2012-2012
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              WAREHOUSE EMPLOYEE
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              INFOKOMP{" "}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2008-2011
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              SOCIAL SCIENCE AND ECONOMICS
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
