import React from "react";
import { connect } from "react-redux";
import { login, logout } from "./auth.redux";
import "./App.css";

class App extends React.Component {
  render() {
    const login = this.props.login;
    const logout = this.props.logout;
    console.log(this.props.auth);
    return (
      <div className="app">
        <div className="login" onClick={login}>
          登录
        </div>
        <div className="logout" onClick={logout}>
          退出
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return state;
};
const actionCreators = { login, logout };

export default connect(
  mapStatetoProps,
  actionCreators
)(App);
