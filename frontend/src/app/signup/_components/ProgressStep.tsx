import { stepNodeType } from "@/common/types";
import { Container, Stack, Typography } from "@mui/material";

export default function ProgressStep({ step }: { step: number }) {
  // step iig props oor awah eswel provider aas awah
  // temporarily used static step number

  return (
    <Container maxWidth="xl">
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          maxWidth={"800px"}
        >
          {new Array(3).fill(0).map((_, index) => (
            <Node
              key={index}
              isActive={index + 1 < Number(step)}
              order={index * 2 + 1}
            >
              {index + 1}
            </Node>
          ))}
          <Stack
            flexGrow={1}
            order={2}
            height={4}
            sx={{ background: Number(step) > 2 ? "#121316" : "#eee" }}
          />
          <Stack
            flexGrow={1}
            order={4}
            height={4}
            sx={{ background: Number(step) > 3 ? "#121316" : "#eee" }}
          />
        </Stack>
      </Stack>
    </Container>
  );
}

const Node = (props: stepNodeType) => {
  const { children, isActive = false, order } = props;
  return (
    <Stack
      width={32}
      height={32}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"50%"}
      order={order}
      sx={{
        color: isActive ? "#fff" : "#000",
        background: isActive ? "#121316" : "#eee",
      }}
    >
      {children}
    </Stack>
  );
};
