import Footer from "./Footer";
import Header from "./Header";
import TopHeader from "./TopHeader";

function MainLayout({children}){
    return(
        <>
        <TopHeader/>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default MainLayout