import { ReactNode } from "react"
import { Main } from "../Main/Main"
import { Footer } from '../Footer/Footer'
import { Header } from "../Header/Header"
// 3=====э
import "./Layout.css"
import { Outlet } from "react-router-dom"
// интерфейс тоже не нужен 
interface ILayoutProps {
    // children специальное свойство React компонента указывается в props позволяет добавить другие элементы 
    // между открывающим и закрывающим тегом самого компонента 
    children?: ReactNode
}

// props Здесь это не надо
export function Layout(props:ILayoutProps){
    // const styles = {
    //     backgroundColor: '',
    //     color: "",
        
    // }
    return(
        <div className="Layout">
            <Header></Header>
            <Main><Outlet></Outlet></Main>
            <Footer></Footer>
            {/* props для Layout уже не используются нужно удалить */}
            {props.children}
        </div>

    )   
}