export const SIGNUP_USER = "SIGNUP_USER";
export const NEW_USER_DATA = "NEW_USER_DATA";

export const newUserDataState = {
  emptyFields: "empty fields",
  typing: "typing",
  submitting: "submitting",
  submitted: "submitted",
  failed:
    "failed,Something went wrong! Maybe user with this email already exists or is invalid",
  lengthValidation: "validation,Password length should be greater than 12",
  unmatchedValidation: "validation,Password and Confirm password are not same",
};