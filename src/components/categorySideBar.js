import styled from "styled-components";
import { Category } from "./common/categories";

const SideBarStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    .sideBar{
        border: 2px solid #3d1d0f;
        padding: 10px;
        margin: 10px;
        text-align: left;
        width: 250px;
    }
`

export const SideBar = ({setActiveCategory, activeCategory}) => {
    return (
        <SideBarStyled>
            <div className="sideBar">
                <Category categoryCall='SideBar' setActiveCategory={setActiveCategory} 
                activeCategory={activeCategory}/>
            </div>
        </SideBarStyled>
    )
}