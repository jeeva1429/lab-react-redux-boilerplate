import { createStore } from 'redux';
import LikesHandler from './reducers';
const store = createStore(
    LikesHandler
)
export default store