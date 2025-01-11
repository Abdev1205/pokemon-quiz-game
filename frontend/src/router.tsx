import { createBrowserRouter } from "react-router-dom";
import ConfigProvider from "./provider/ConfigProvider";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ConfigProvider>
        <App />
      </ConfigProvider>
    ),
  },
]);

export default router;
