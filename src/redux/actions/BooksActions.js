import {
    FETCHING_BOOKS_REQUEST,
    FETCHING_BOOKS_SUCCESS,
    FETCHING_BOOKS_FAILURE,
    CLEAR_POSTS
} from "./types";
import axios from "axios";


export const fetchingBooksRequest = () => ({
    type:FETCHING_BOOKS_REQUEST
});

export const fetchingBooksSuccess = (data) => ({
    type:FETCHING_BOOKS_SUCCESS,
    payload:data
});


export const fetchingBooksFailure = (error) => ({
    type:FETCHING_BOOKS_FAILURE,
    payload:error
});


// export const fetchBooks = () => {
//     return (dispatch) => {
//         dispatch(fetchingBooksRequest())
//             axios.get("http://192.168.0.102:3000/api/Books")
//                 .then((response)=>{
//                     dispatch(fetchingBooksSuccess(response.data))
//                     // console.log(response.data)
//                 })
//                 .catch ((error) =>  {
//                     dispatch(fetchingBooksFailure(error))
//                 });
//     }
// }


// this also works 

export const fetchBooks = () => {  
    return (dispatch) => {
       dispatch(fetchingBooksRequest())
            fetch("http://192.168.0.102:3000/api/Books")
            .then(res => res.json())
            .then((data) =>{
                dispatch(fetchingBooksSuccess(data));
            })
            .catch ((error) =>  {
                dispatch(fetchingBooksFailure(error))
            });
    }
}

export const clearPosts =  () => {
    return(dispatch)=>{
        dispatch({type: CLEAR_POSTS})
    }
      
  }


// export const postBooksSuccess = (data) => ({
//     type:POST_BOOKS_SUCCESS,
//     payload:data
// });

// export const createBooksRequest = ({ prop, value}) => ({
//     type:CREATE_BOOKS_REQUEST,
//     payload:{ prop, value}
// });



// export const createBooks = ({title,description}) => {
//     console.log("title = ",title,"description = ", description);
//     return (dispatch) => {
//         fetch("http://192.168.0.102:3000/api/Books",{
//             method:"POST",
//             headers:{
//                 "content-type":"application/json"
//             },
//             body:JSON.stringify(title,description)
//         })
//         .then(res=>res.json())
//         .then(() => {
//             dispatch(createBooksRequest({title,description}));
//             Actions.home({type:"reset"})
//         })
//     }
// }



// export function createBooks({title,description}) {
//     console.log(title,description);
//     return function(dispatch) {
//         axios.post("http://192.168.0.102:3000/api/Books",
//             { 
//                 headers: {
//                     "content-type":"application/json"
//                 }
//             }
//         )
//       .then((response) => {
//         console.log('books response', response);
//         dispatch({
//           type: CREATE_BOOKS_REQUEST,
//         });
//       })
//       .catch((response) => console.log('error', response));
//     };
//   }


// export const createBooks = ({title,description}) => {
//     console.log("title = ",title,"description = ", description);
//     return (dispatch) => {
//       return axios.post("http://192.168.0.102:3000/api/Books", {title,description})
//         .then(response => {
//           dispatch(createBooksRequest(response.data))
//         })
//         .catch(error => {
//           throw(error);
//         });
//     };
//   };
  
//   export const createBooksRequest =  (data) => {
//     return {
//       type: CREATE_BOOKS_REQUEST,
//       payload: {
//         title: data.title,
//         description: data.description
//       }
//     }
//   };