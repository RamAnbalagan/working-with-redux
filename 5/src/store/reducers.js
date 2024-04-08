const initialState = {
    notes: [
        {
            id: '278',
            title: 'An example note',
            details: 'This is an example of a note'
        },
        {
            id: '279',
            title: 'Another example note',
            details: 'Another example of a note'
        },
        {
            id: '280',
            title: 'just another example note',
            details: 'So many example notes'
        }
    ],
    name : 'Shriram'
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NOTE': 
            return {
                ...state,
                notes:[...state.notes, action.note]
            };
        case 'REMOVE_NOTE':
            return {
                ...state,
                notes: state.notes.filter( note => note.id !==action.note.id)
            };
        case 'GET_NOTES':
            return {
                ...state,
                notes: state.notes
            }
        default:
            return state;
    }
}