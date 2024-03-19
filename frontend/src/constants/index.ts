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
    href: "/dashboard/order",
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
    href: "/dashboard/settings",
  },
];

// order detials
export const ORDERINGS = [
  {
    orderID: "#12345678",
    name: "Zoloosoko",
    user: "Zoloosoko@gmail.com",
    date: "2023-01-09",
    time: "10:58",
    price: "12000",
    s: "delivered",
  },
  {
    orderID: "#12345678",
    name: "Zoloosoko",
    user: "Zoloosoko@gmail.com",
    date: "2023-01-09",
    time: "10:58",
    price: "12000",
    s: "ondelivery",
  },
  {
    orderID: "#12345678",
    name: "Zoloosoko",
    user: "Zoloosoko@gmail.com",
    date: "2023-01-09",
    time: "10:58",
    price: "12000",
    s: "neworder",
  },
  {
    orderID: "#12345678",
    name: "Zoloosoko",
    user: "Zoloosoko@gmail.com",
    date: "2023-01-09",
    time: "10:58",
    price: "12000",
    s: "ondelivery",
  },
  {
    orderID: "#12345678",
    name: "Zoloosoko",
    user: "Zoloosoko@gmail.com",
    date: "2023-01-09",
    time: "10:58",
    price: "12000",
    s: "ondelivery",
  },
  {
    orderID: "#12345678",
    name: "Zoloosoko",
    user: "Zoloosoko@gmail.com",
    date: "2023-01-09",
    time: "10:58",
    price: "12000",
    s: "ondelivery",
  },
  {
    orderID: "#12345678",
    name: "Zoloosoko",
    user: "Zoloosoko@gmail.com",
    date: "2023-01-09",
    time: "10:58",
    price: "12000",
    s: "ondelivery",
  },
];

// order tabs
export const TABS = [
  {
    label: "Бүгд",
  },
  {
    label: "Шинэ захиалага",
  },
  {
    label: "Бэлтгэгдэж байна",
  },
  {
    label: "Хүргэлтэнд гарсан",
  },
  {
    label: "Хүргэгдсэн",
  },
  {
    label: "Цуцлагдсан",
  },
];

// order section status map
export const STATUS_MAP = {
  delivered: {
    backgroundColor: "#C1E6CF",
    color: "#0A4E22",
    title: "Хүргэгдсэн",
  },
  neworder: {
    backgroundColor: "#FFFFFF",
    color: "text.secondary",
    title: "Шинэ захиалга",
  },
  ondelivery: {
    backgroundColor: "#B7DDFF",
    color: "#1890FF",
    title: "Хүргэлтэнд гарсан",
  },
  inprogress: {
    backgroundColor: "#ECEDF0",
    color: "text.secondary",
    title: "Бэлтгэгдэж байна",
  },
};

// order list

interface Data {
  ID: number;
  order: string;
  pay: number;
  date: string;
}

function createData(
  ID: number,
  order: string,
  pay: number,
  date: string
): Data {
  return { ID, order, pay, date };
}
export const ROWS = [
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),

  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
  createData(
    12345678,
    "Zoloosoko0526@gmail.com 99119009",
    135000,
    "2022-03-25"
  ),
];

export const SIDEBAR_WIDTH = 240;
export const NAVBAR_HEIGHT = 50;

export const ProductInfos = [
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
  {
    name: "laptop",
    img: "/instagram.svg",
    code: "0001",
    category: "notebooks",
    price: "1'000'000",
    remainder: "7",
    soldOut: "13",
    createdAt: "2024",
  },
];
