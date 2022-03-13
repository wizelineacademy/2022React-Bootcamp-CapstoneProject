import { HomePage } from "./homePage.js";
import { ProductListPage } from "./productListPage.js";
import { useState } from "react"
import { Header } from "./common/header/header.js";
import { Footer } from "./common/footer/footer.js";
import { Loader } from "./loading.js";

function viewSwitch(activeState, setActiveState) {
    let activeView;
    switch (activeState) {
        case 'HP':
             activeView = <HomePage setActiveState={setActiveState}/>;
             break;
        case 'PL':
             activeView = <ProductListPage setActiveState={setActiveState}/>;
             break;
        case 'Loading':
            activeView = <Loader/>;
            setTimeout(() => setActiveState('PL'), 2000);
            break;
        default: 
             activeView = <HomePage setActiveState={setActiveState}/>;
    }
    return activeView;
}
export const ViewLayout = () => {
    
    const [activeState, setActiveState] = useState('PL');

    return (
        <>
        <Header setActiveState={setActiveState}/>
        {viewSwitch(activeState, setActiveState)}
        <Footer />
        </>
    )

}
