const initialState = {
    likesCount: 0
  };
  
  const LikesHandler = (state = initialState, action) => {
    switch (action.type) {
      case 'like':
        return {
          ...state,
          likesCount: state.likesCount + 1
        };
      case 'dislike':
        if (state.likesCount > 0) {
          return {
            ...state,
            likesCount: state.likesCount - 1
          };
        } else {
          return state;
        }
      default:
        return state;
    }
  };
  
  export default LikesHandler
   