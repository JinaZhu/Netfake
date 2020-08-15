if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const config = {
  omdgAPIKey: process.env.REACT_APP_OMDG_API,
};

export default config;
