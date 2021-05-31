export default function header() {
  const user = JSON.parse(localStorage.getItem("user") as string);

  if (user && user.authorization) {
    return {
      Authorization: user.authorization,
      "Content-Type": "application/json",
      "content-type": "multipart/form-data",
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
}
