import { ReactNode } from "react";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ShopDetails from "../pages/ShopDetails";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

interface IPagesList {
  id: string;
  title: string;
  path: string;
  element: ReactNode;
  is_visible: boolean;
  for_header: boolean;
}

const pageList: IPagesList[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    element: <Home />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "about",
    title: "About Us",
    path: "/about",
    element: <About />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "shop",
    title: "Shop",
    path: "/shop",
    element: <Shop />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "shopDetails",
    title: "Shop Details",
    path: "/shop/:id",
    element: <ShopDetails />,
    is_visible: true,
    for_header: false,
  },
  {
    id: "blog",
    title: "Blog",
    path: "/blog",
    element: <Blog />,
    is_visible: true,
    for_header: true,
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
    element: <Contact />,
    is_visible: true,
    for_header: true,
  },
];

export default pageList;
