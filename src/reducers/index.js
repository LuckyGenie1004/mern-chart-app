import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import {
  FORGOT_PASSWORD,
  NEW_USER_DATA,
  AUTH_USER,
  LOGIN_USER_DATA,
  RESET_PASSWORD_DATA,
  CONVERSATIONS,
  USERS,
  ACTIVE_CONVERSATION,
  MESSAGE_DATA,
  PROFILE_DATA,
} from "../actions/types";

export default combineReducers({
  newUserData: commonReducer(NEW_USER_DATA, null),
  loginUserData: commonReducer(LOGIN_USER_DATA, null),
  auth: commonReducer(AUTH_USER, {}),
  forgotPassword: commonReducer(FORGOT_PASSWORD, null),
  resetPasswordData: commonReducer(RESET_PASSWORD_DATA, null),
  conversations: commonReducer(CONVERSATIONS, { data: [], notifications: 0 }),
  users: commonReducer(USERS, []),
  activeConversation: commonReducer(ACTIVE_CONVERSATION, null),
  message: commonReducer(MESSAGE_DATA, { message: "", state: "" }),
  profileData: commonReducer(PROFILE_DATA, {
    username: "",
    email: "",
  }),
});
