export interface EmailVerifyResponse {
  data: {
    status: "valid" | "invalid" | "unknown";
  };
}

const verifyEmail = (email: string) => {
  const url =
    import.meta.env.VITE_APP_HUNTER_URL +
    "?" +
    "email=" +
    email +
    "&api_key=" +
    import.meta.env.VITE_APP_HUNTER_API_KEY;

  return fetch(url);
};

export default verifyEmail;
