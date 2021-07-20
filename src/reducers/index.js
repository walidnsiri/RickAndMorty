import { combineReducers } from "redux";

import {Characters} from "./Characters";
import {Episodes} from "./Episodes"


export const reducers = combineReducers({
    Characters,
    Episodes

})