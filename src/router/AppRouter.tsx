import { Route, Routes } from "react-router-dom";
import pageList from "../constants/pageList";

const AppRouter = () => {
  return (
    <Routes>
      {pageList
        .filter((page) => page.is_visible)
        .map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
    </Routes>
  );
};

export default AppRouter;
