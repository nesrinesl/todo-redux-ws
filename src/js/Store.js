import { createStore } from "redux";
import { todoReducer } from "./Reducer";


const Store = createStore(todoReducer )

export default Store ;