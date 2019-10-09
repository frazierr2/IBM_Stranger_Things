export const UPDATE_LANGUAGE = "language:updateLanguage";

export function updateLanguage(newLanguage) {
  //   console.log("ACTION: ", newLanguage);
  return {
    type: UPDATE_LANGUAGE,
    payload: {
      language: newLanguage
    }
  };
}
