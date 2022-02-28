import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import Card, { Cards } from "../../components/card/card";

const Home = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState({});

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
        const data = response.data
        setUsers({...users, data});
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
      return users 
  };

  // useEffect(() => {
  //   fetchData();
  // }, [users]);
  return (
    <div>
      <h1>Home</h1>
      <Cards text="Welcome to the home page"/>
    </div>
  )};

export default Home;
