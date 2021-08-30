export const initialState = {
    urls: [],
};

function customCompare(a, b) {
    if (a.points > b.points) {
        return -1;
    } else if (a.points === b.points) {
        return (a.modifiedAt < b.modifiedAt ? 1 : -1);
    } else {
        return 1;
    }
}


let sortType = true;

const reducer = (state, action) => {
    //console.log("1", sortType)
    let returnState
    switch (action.type) {
        case 'ADD_URL':
            returnState = {
                ...state,
                urls: [action.payload, ...state.urls],
            };
            break;
        case 'REMOVE_URL':
            returnState = {
                ...state,
                urls: [...state.urls].filter((url) => url.id !== action.payload),
            }
            break;
        case 'UPDATE_URL':
            returnState = {
                ...state,
                urls: state.urls.map((url) => {
                    if (url.id !== action.payload.id) {
                        return url;
                    }

                    return {
                        ...url,
                        points: action.payload.points,
                        modifiedAt: action.payload.modifiedAt
                    };
                }),
            };
            break;
        case 'SET_URL':
            returnState = {
                ...state,
                urls: action.payload
            };
            break;
        case 'SORT_URL':
            if (action.payload !== undefined) {
                sortType = action.payload;
            }
            returnState = {
                ...state,
                urls: state.urls.sort(customCompare)
            }
            break;
        default:
            returnState = state;
            break;
    }
    //console.log("2", sortType)
    returnState.urls = action.type === 'SORT_URL' && sortType === false ? returnState.urls.reverse() : returnState.urls
    returnState.urls.length > 0 ? localStorage.setItem('data', JSON.stringify(returnState.urls)) : localStorage.removeItem('data')
    return returnState;
};

export default reducer;