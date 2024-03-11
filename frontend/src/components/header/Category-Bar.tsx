import { Stack, Typography } from "@mui/material";
import { Dehaze } from "@mui/icons-material";
import { Container } from "@mui/material";

const categories = [
  { title: "qwerty" },
  { title: "qwertyuio" },
  { title: "qwertyuiops" },
  { title: "1" },
];

export const CategoryBar = () => {
  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack
          p={2}
          width={"100%"}
          direction={"row"}
          gap={"5%"}
          alignItems={"center"}
        >
          <Dehaze sx={{ width: "30px", height: "30px" }} />
          <Stack direction={"row"} gap={"12%"}>
            {categories.map((item, index) => (
              <Typography fontSize={18} fontWeight={700} key={item.title}>
                {item.title}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
