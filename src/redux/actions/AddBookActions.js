import {
    TITLE_ADD,
    DESCRIPTION_ADD,
    ADD_BOOKS,
    ADD_BOOKS_SUCCESS,
    ADD_BOOKS_FAILURE
} from "./types";
import {Actions} from "react-native-router-flux"


export const titleAdd = (text) => {
    return{
        type:TITLE_ADD,
        payload:text
    };
};

export const descriptionAdd = (text) => {
    return{
        type:DESCRIPTION_ADD,
        payload:text
    };
};

export const createBooks = ({title,description}) => {
    return (dispatch) => {
        dispatch({
            type:ADD_BOOKS
        })
        fetch("http://192.168.0.102:3000/api/Books",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({title,description})
        })
        .then(res=>res.json())
        .then(() => {
            dispatch({
                type:ADD_BOOKS_SUCCESS
                
            });
        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type:ADD_BOOKS_FAILURE
            })
        })
    }
}
