import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

import logger from "./logger";
import 'bootstrap/dist/css/bootstrap.min.css';

export default applyMiddleware(thunk, logger);
