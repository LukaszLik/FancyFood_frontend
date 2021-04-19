export default function header() {
  const user = JSON.parse(<string>localStorage.getItem("user"));

  if (user && user.authorization) {
    return {
      Authorization: user.authorization,
    };
  } else {
    return {};
  }
}
