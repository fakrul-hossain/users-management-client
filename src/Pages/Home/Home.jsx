import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user);
    fetch("http://localhost:5000/users",{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log(data);
      const newUsers = [...users,data]
      setUsers(newUsers);
      form.reset();
    })
  }

  return (
    <div className=" text-center mt-24">
      <h1>User Management System</h1>
      <h2>Numbers of users: {users.length}</h2>
      <form onSubmit={handleAddUser} className="">
            <input required placeholder="Inter your name" className="border w-3/12 mt-2 rounded-md bg-slate-100 border-green-600" type="text" name="name" /><br />
            <input required placeholder="Inter your email" className="border w-3/12 mt-2 rounded-md bg-slate-100 border-green-600" type="email" name="email" /><br />
            <input className="border mt-2 rounded-md bg-slate-100" type="submit" value="Add User" />

      </form>
      <div className="">
    {
        users.map(user => 
        <p key={user.id}>{user.name}</p>)
    }

      </div>
    </div>
  );
};

export default Home;
