export default function formReducer( showFormState = false, action) { 
    switch (action.type){
        case "TOGGLE":{
            showFormState = !showFormState
            return showFormState
        }
        case "CLOSEFORM":
            return false
        default:
            return showFormState        
    }
}