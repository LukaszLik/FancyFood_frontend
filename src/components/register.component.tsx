import { TextField } from '@material-ui/core';
import { Component } from 'react';
import Form from "react-validation/build/form";
import { Button } from "@material-ui/core";


export default class Register extends Component {
    form: any;
    constructor(props) {
      super(props);
      this.handleRegister = this.handleRegister.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  
      this.state = {
        username: "",
        email: "",
        password: "",
        successful: false,
        message: ""
      };
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  
    handleRegister(e) {
      e.preventDefault();
  
      this.setState({
        message: "",
        successful: false
      });
  
      this.form.validateAll();
  
    //   if (this.checkBtn.context._errors.length === 0) {
    //     AuthService.register(
    //       this.state.username,
    //       this.state.email,
    //       this.state.password
    //     ).then(
    //       response => {
    //         this.setState({
    //           message: response.data.message,
    //           successful: true
    //         });
    //       },
    //       error => {
    //         const resMessage =
    //           (error.response &&
    //             error.response.data &&
    //             error.response.data.message) ||
    //           error.message ||
    //           error.toString();
  
    //         this.setState({
    //           successful: false,
    //           message: resMessage
    //         });
    //       }
    //     );
    //   }
    }
  

render() {
    return (
        <div className="form-container">
            <Form className="form-group" noValidate autoComplete="off" onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}>
                <TextField id="filled-basic" value={this.state.username} label="Imię i nazwisko" variant="filled" />
                <TextField id="filled-basic" label="Email" variant="filled" />
                <TextField id="filled-basic" label="Hasło" variant="filled" />
                <TextField id="filled-basic" label="Powtórz hasło" variant="filled" />
                <Button type="submit" value="Submit"></Button>
            </Form>
        </div>
    );
}
}