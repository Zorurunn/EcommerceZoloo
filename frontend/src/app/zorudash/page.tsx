import { HeaderCard } from "./_components/HeaderCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Stack } from "@mui/material";
import { BestSelledProducts } from "./_components/BestSelledProducts";
export default function Home() {
  return (
    <Stack pr={3} gap={2} height={"100vh"}>
      {/* HEADER CARDS */}
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}
      >
        <HeaderCard
          title="Орлого"
          icon={<AttachMoneyIcon sx={{ fontSize: 20 }} />}
          value={235000}
          date="Өнөөдөр"
        />
        <HeaderCard
          title="Захиалга"
          icon={<ContentPasteIcon sx={{ fontSize: 20 }} />}
          value={58}
          date="Өнөөдөр"
        />
        <HeaderCard
          title="Хэрэглэгч"
          icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 20 }} />}
          value={980}
          date="Өнөөдөр"
        />
      </Stack>

      <Stack
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
        height={"70%"}
      >
        <BestSelledProducts />
        <Stack></Stack>
      </Stack>
    </Stack>
  );
}
