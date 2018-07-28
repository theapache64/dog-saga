export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE';

const initialState = {
  dog: null
};

export const dogReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case FETCH_DOG_REQUEST:
      return {
        ...state,
        dog: {
          dog: "https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif"
        }
      }

    case FETCH_DOG_FAILURE:
      return {
        ...state,
        dog: {
          dog: "https://safebytes.com/wp-content/uploads/2017/03/warning_exclamation.png"
        }
      }

    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        dog: action.payload
      }
    default:
      return initialState;
  }
}