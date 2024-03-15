import DashboardIcon from "@mui/icons-material/Dashboard";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SellIcon from "@mui/icons-material/Sell";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";

// CardStep3
export const CardFormStep3Experience = ["Сонгох", "b", "c"];

export const CardFormStep3Products = ["a", "b", "c"];

export const GENERAL_CATEGORIES = ["Сонгох", "b", "c"];

export const SUB_CATEGORIES = ["Сонгох", "b", "c"];

// Dashboard layout side bar
export const SIDEBAR_LINES = [
  {
    name: "Хяналтын самбар",
    icon: DashboardIcon,
    href: "/dashboard",
  },
  {
    name: "Захиалга",
    icon: ContentPasteIcon,
    href: "/dashboard",
  },
  {
    name: "Орлого",
    icon: SellIcon,
    href: "/dashboard/income",
  },
  {
    name: "Бүтээгдэхүүн",
    icon: ListAltIcon,
    href: "/dashboard/product",
  },
  {
    name: "Тохиргоо",
    icon: SettingsIcon,
    href: "/",
  },
];

export const SIDEBAR_WIDTH = 240;
export const NAVBAR_HEIGHT = 50;
