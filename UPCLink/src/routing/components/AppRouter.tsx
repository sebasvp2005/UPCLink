import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import { HomePage } from "../../Home/pages/Home";


export const AppRouter = (): ReactElement => {

  return (
    <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        

    </Routes>
  )
}