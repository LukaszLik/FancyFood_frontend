export default function header() {
  const user = JSON.parse(localStorage.getItem("user") as string);

  if (user && user.authorization) {
    return {
      Authorization: user.authorization,
    };
  } else {
    return {};
  }
}
