import { styled } from "@mui/system";

const Loader1 = styled("div")({
  backgroundColor: "transparent",
  borderTop: "5px solid #000",
  borderRight: "5px solid #000",
  borderLeft: "5px solid rgba(0,0,0, 0.3)",
  borderBottom: "5px solid rgba(0,0,0, 0.3)",
  height: "24px",
  width: "24px",
  borderRadius: "50%",
  animation: "linear 2s spin infinite",
});

export const Loader = () => {
  return <Loader1 />;
};
