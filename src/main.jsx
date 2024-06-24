import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Story from "./components/Story/Story.jsx";
import Modules from "./components/Modules.jsx";
import UpcomingBatch from "./components/UpcomingBatch.jsx";
import Wip from "./components/WIP.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/story", element: <Story /> },
      { path: "/modules", element: <Modules /> },
      { path: "/upcoming-batch", element: <UpcomingBatch /> },
      { path: "/:wip", element: <Wip /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
