import { Button, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

type BackTabsType = {
  text: string;
  href: string;
};

export const BackTabs = (props: BackTabsType) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      gap={3}
      borderBottom={2}
      borderColor={"#eee"}
      borderRadius={"0px 0px 8px 8px"}
      sx={{ fontSize: "16px", py: "12px", px: "16px" }}
      bgcolor={"#ffff"}
    >
      <Link href={props.href}>
        <ChevronLeftIcon />
      </Link>
      <Typography>{props.text}</Typography>
    </Stack>
  );
};
