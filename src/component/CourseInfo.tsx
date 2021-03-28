import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";

const CourseInfo = (props: any) => {
  const { index, title, description } = props;
  return (
    <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
      <Grid
        container
        direction="row"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <DoneIcon />
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11}>
          <Grid container direction="column">
            <Grid item xs={10} sm={10} md={8} lg={8}>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item xs={10} sm={10} md={8} lg={8}>
              <Typography variant="body1">{description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CourseInfo;
