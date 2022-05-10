import { getItem } from "./storage";
import {store} from '../redux/redux'

export const isUserAuth = () => {
    // const user = store.getState().user
    // const token = store.getState().token
    const token = getItem("token");
    return !!token;
}

