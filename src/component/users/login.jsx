import React, { Component } from "react";
import { connect } from "react-redux";
import UserSlice from "./userSlice";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login = () => {
    this.props.dispatch(UserSlice.actions.login({ name: this.state.username }));
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button
            type="button"
            onClick={this.login}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
