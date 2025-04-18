import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from ".";
import { PRDOPage } from "./PRDOPage";
import { JLCPayroll } from "./JLCPayrollPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/prdo",
    element: <PRDOPage/>
  },
  {
    path: "/jlcpayroll",
    element: <JLCPayroll/>
  }
])


export function App() {
  return (
    <RouterProvider router={router}/>
  );
}
