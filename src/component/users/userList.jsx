import axios from "axios";
import React from "react";
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    }
  }
  componentDidMount() {
    axios("https://dummyjson.com/users").then((res) => {
      this.setState({
        users: res.data.users,
      });
    });
  }
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
