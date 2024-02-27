const defaultHost = "https://api.valantis.store:41000";
// const defaultHost = "https://jsonplaceholder.typicode.com/";

export const HOST =
  (process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_HOST
    : process.env.REACT_APP_HOST) || defaultHost;