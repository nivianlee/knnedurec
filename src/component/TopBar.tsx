import * as React from "react";
import { Box, Grid, Button, Typography } from "@material-ui/core";

const TopBar = () => {
  return (
    <Box style={{ padding: "32px" }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item xs={2}>
          <Typography variant="h6">LEARN</Typography>
        </Grid>
        <Grid item xs={6} container direction="row" spacing={4}>
          <Grid item>
            <Button>
              <Typography variant="body2">Courses</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Typography variant="body2">About</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          container
          direction="row"
          spacing={2}
          justify="flex-end"
        >
          <Grid item>
            <Button variant="outlined" color="primary">
              <Typography variant="caption">Login</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              <Typography variant="caption">Sign Up</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TopBar;
