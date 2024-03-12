import { sideBarLines } from "@/constants";
import { Stack } from "@mui/material";
import React from "react";
// import * as iis from "@mui/icons-material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";

export const SideBarDashboard = () => {
  const a = { SettingsIcon };
  return (
    <Stack>
      {sideBarLines.map((item) => {
        return (
          <Stack>
            {item.name}
            <Stack>{/* <SettingsIcon /> */}</Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
