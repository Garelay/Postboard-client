export default function currentIdReducer(currentId = 0, action) {
    switch (action.type) {
        case "SETCURRENTID": {
            // currentId = action.payload
            return action.payload;}  
        default:
            return currentId;
    }
}