import { dashboard, expenses, transactions, trend } from "../utils/Icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "All Users",
    icon: transactions,
    link: "/employees",
  },
  {
    id: 3,
    title: "Collected Amount",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Given Amount",
    icon: expenses,
    link: "/dashboard",
  },
  {
    id: 5,
    title: "Total Money",
    icon: transactions,
    link: "/all_money",
  },
];
