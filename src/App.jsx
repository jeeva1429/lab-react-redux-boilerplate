import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementLike, decrementLike } from './reduxStore/actions';

function App() {
  const currentLikes = useSelector((state) => state.likesCount);
  const dispatch = useDispatch();

  const likedIt = () => {
    dispatch(incrementLike());
  };

  const notLikedIt = () => {
    dispatch(decrementLike());
  };

  return (
    <>
      <p>{currentLikes}</p>
      <button onClick={likedIt}>Like</button>
      <button onClick={notLikedIt}>Unlike</button>
    </>
  );
}

export default App;
