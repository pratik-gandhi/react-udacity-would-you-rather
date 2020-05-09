import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { loadingBarMiddleware } from "react-redux-loading"

import logger from "./logger";
import 'bootstrap/dist/css/bootstrap.min.css';

export default applyMiddleware(loadingBarMiddleware(), thunk, logger);
