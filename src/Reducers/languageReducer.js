import { UPDATE_LANGUAGE } from "../Actions/languageActions";

export default function languageReducer(state = "", { type, payload }) {
  // console.log("type: ", type);
  // console.log("payload: ", pacyload);
  switch (type) {
    case UPDATE_LANGUAGE:
      return payload.language;
    default:
      return state;
  }
}
