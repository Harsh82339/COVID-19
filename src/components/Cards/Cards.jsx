import React from "react";
import {
  Card,
  CardContent,
  typograpgy,
  Grid,
  Typography,
} from "@material-ui/core";
import styles from "./Cards.module.css";
import Countup from "react-countup";
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading...";
  }
  return (
    <div>
      {/* <img src="./../../images.jpg" alt="sds"></img> */}
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" >
        <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              INFECTED
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).getHours()}:{new Date(lastUpdate).getMinutes()}:{new Date(lastUpdate).getSeconds()}, IST</Typography>
            <Typography variant="body2">No of Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography> 
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).getHours()}:{new Date(lastUpdate).getMinutes()}:{new Date(lastUpdate).getSeconds()}, IST</Typography>
            <Typography variant="body2">No of Recoviers</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              DEATHS
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).getHours()}:{new Date(lastUpdate).getMinutes()}:{new Date(lastUpdate).getSeconds()}, IST</Typography>
            <Typography variant="body2">No of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default Cards;
