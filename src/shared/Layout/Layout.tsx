import { Main } from "../Main/Main"
import { Footer } from '../Footer/Footer'
import { Header } from "../Header/Header"
import "./Layout.css"
import { Outlet } from "react-router-dom"

export function Layout(){
    return(
        <div className="Layout">
            <Header></Header>
            <Main><Outlet></Outlet></Main>
            <Footer></Footer>
        </div>
    )   
}