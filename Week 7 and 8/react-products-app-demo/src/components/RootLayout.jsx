import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"

function RootLayout() {
  return (
    <div>
        <Header/>
        <div className="mx-10 min-h-screen">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout