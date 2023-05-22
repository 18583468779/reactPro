import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import "antd/dist/reset.css";
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
