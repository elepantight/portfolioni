import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200,
    margin: 10,
    backgroundColor: '#C3CDD7',
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
    fontFamily: "Quicksand",
    color: '#197acf',
  },
  second: {
    fontFamily: "Quicksand",
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: 45,
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

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
              Noroff
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2018-2020
            </Typography>
            <Typography className={classes.second} variant="body2" component="p">
              FRONTEND DEVELOPER
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color='#197acf'
              gutterBottom
            >
              Subway Norge
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2019-Present
            </Typography>
            <Typography className={classes.second}
            variant="body2" component="p">
              IT-TECHNICIAN
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
              Jensens Bøfhus
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2017-Present
            </Typography>
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography  className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
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
            <Typography className={classes.second} variant="body2" component="p">
              SOCIAL SCIENCE AND ECONOMICS
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
