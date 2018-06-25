export const select = (client) => {
  alert (client.general.firstName);
  return {
    type: "CLIENT_SELECTED",
    payload: client
  }
};
