export const axiosError = function (error) {
  console.error(error.response || error.message || error);
};
