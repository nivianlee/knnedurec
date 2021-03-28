import * as React from "react";
import { Box, Grid, Button, Typography, Link } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const TopBar = () => {
  const theme = useTheme();
  const matchesAboveSM = useMediaQuery(theme.breakpoints.up("sm"));

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
        <Grid
          item
          xs={4}
          sm={4}
          md={6}
          lg={6}
          container
          direction="row"
          spacing={matchesAboveSM ? 4 : 2}
          alignItems="center"
        >
          <Grid item>
            <Link component="button" variant="body2">
              Courses
            </Link>
          </Grid>
          <Grid item>
            <Link component="button" variant="body2">
              About
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          lg={4}
          container
          direction="row"
          spacing={2}
          justify="flex-end"
        >
          <Grid item>
            <Button variant="outlined" color="primary">
              <Typography variant="caption">Log in</Typography>
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
