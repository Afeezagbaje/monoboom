import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../../components/userCard/userCard";

const Home = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const headers = (token) => {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
  };

  const url = "http://127.0.0.1:8000/api/v1/users/";

  const fetchData = async () => {
    await axios
      .get(url, headers(token))
      .then((response) => {
        console.log(response);
        // const data = response.data;
        setUsers(response.data.users);
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("TypeOf: ", typeof(users));
  console.log("Users: ", users);

  const allUsers = users ? (
    users.map((user, index) => {
      return <UserCard key={user.id} name={user.name} email={user.email} />;
      // <div key={index}>
      //   <h1>{user.name}</h1>;
      //   <h3>{user.email}</h3>;
      // </div>
    })
  ) : (
    <h1>No Users</h1>
  );

  return (
    <div style={{color: "white"}}>
      {/* <h1>Home</h1> */}
      {allUsers}
    </div>
  );
};

export default Home;
