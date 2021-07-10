export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after ...
    token:"BQABNaUuFSMhf9IEf5i0ag9sHRIMqrlSjPVUiUJAlMSDFHSqwkCH2zogPIfo-_zNHmefoA3WBwfwSgn-_7zvsjgCe-HrZnjrC5xTxu__VJV0YEvxxsukHDhHGHXdsTx5LreIKqQ6u7QleF2dmMz7T9vmslfiGPQVbgjFJb8q6EihQk6pu36h"
}

const reducer=(state,action)=>{
    //pro tip.. do console
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }
            default:
                return state
    }

}

export default reducer;