import axios from "axios";

const API_URL = "http://localhost:8081/api/";

class AuthService {
//   login(username: string, password: string) {
//     return axios
//       .post(API_URL + "signin", {
//         username,
//         password
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(response.data));
//         }

//         return response.data;
//       });
//   }

//   logout() {
//     localStorage.removeItem("user");
//   }

  register(email: string, firstName: string, lastName: string, password: string) {
    return axios.post(API_URL + "v1/registration", {
      email,
      firstName,
      lastName,
      password
    });
  }

//   getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user')!);;
//   }
}

export default new AuthService();