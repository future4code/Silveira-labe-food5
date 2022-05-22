import styled from "styled-components";
import { mainColor, primaryColor, secondaryColor } from "../../Constants/colors";
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import { Tab } from "@material-ui/icons";

export const StyledDivRestaurant = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid ${mainColor};
    border-radius: 10px;
    width: 100%;
    height: 30vh;
    margin-top: 10px;

    .time-shipping {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
    }

    .restaurant-name {
        color: ${secondaryColor};
    }

    p {
        color: ${mainColor};
        margin: 3% 4% 0 4%;
    }
`;

export const StyledDivImage = styled.div `
    width: 100%;
    height: 70%;

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

`;

export const StyledSearch = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ${mainColor};
    width: 100%;
    height: 50px;
    margin: 2% 0;
    
    .input-search {
        width: 80%;
        height: 90%;
        border: none;
        background-color: none;
        
    }

    .input-search::placeholder {
        color: ${mainColor};
    }

    .input-search:focus {
        outline: none;
    }
`;

export const StyledSearchIcon = styled(SearchIcon) `
    color: ${mainColor};
`;

export const StyledAppBar = styled(AppBar) `
    /* text-transform: 'capitalize';

    &:active {
        background-color: beige;
    } */
`;