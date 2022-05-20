import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordinator";

const Header = () => {
    

    const navigate = useNavigate();

    

    const changeName = () => {
        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }
    }

    return (
        <div>
            <div>
                <button onClick={ () => goBack(navigate) }><p>{"<"}</p></button>
            </div>
            <div>
                <p>nome</p>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    );
}

export default Header;