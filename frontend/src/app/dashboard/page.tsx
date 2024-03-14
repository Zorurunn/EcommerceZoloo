import { HeaderCard } from "./_components/HeaderCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Grid, Stack } from "@mui/material";
import { BestSelledProducts } from "./_components/BestSelledProducts";
import { Sales } from "./_components/Sales";
import { CustomInput, GeneralCard } from "@/components";
export default function Home() {
  return (
    <Stack gap={2} height={"100%"}>
      {/* HEADER CARDS */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <HeaderCard
            title="Орлого"
            icon={<AttachMoneyIcon sx={{ fontSize: 20 }} />}
            value={235000}
            date="Өнөөдөр"
          />
        </Grid>
        <Grid item xs={4}>
          <HeaderCard
            title="Захиалга"
            icon={<ContentPasteIcon sx={{ fontSize: 20 }} />}
            value={58}
            date="Өнөөдөр"
          />
        </Grid>
        <Grid item xs={4}>
          <HeaderCard
            title="Хэрэглэгч"
            icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />}
            value={980}
            date="Өнөөдөр"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} flexGrow={1} mb={3}>
        <Grid item xs={6}>
          <BestSelledProducts />
        </Grid>
        <Grid item xs={6} container spacing={2}>
          <Grid item xs={12}>
            <Sales />
          </Grid>
          <Grid item xs={12}>
            <Sales />
          </Grid>

          {/* <BestSelledProducts /> */}
        </Grid>
      </Grid>
      {/* <Stack
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
        overflow={"hidden"}
        // height={"70%"}
      >
        <BestSelledProducts />
        <BestSelledProducts />
      </Stack> */}
    </Stack>
  );
}
