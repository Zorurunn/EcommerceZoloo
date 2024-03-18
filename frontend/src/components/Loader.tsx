import { Stack } from "@mui/material";
import { makeStyles } from "@mui/system";

const useStyles = makeStyles({
  spinningAnimation: {
    animation: "$spin 2s linear infinite", // Adjust the duration and timing function as needed
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

export const Loader = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.spinningAnimation}>
      <Stack></Stack>
    </Stack>
  );
};
