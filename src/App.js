import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json)); 
  }, []);


  return (
    <div >
      {users.map((userData, index) => (
        <UserCard
          key={index}
          name={userData.name}
          username={userData.username}
          
          phone={userData.phone}
          email={userData.email}
          website={userData.website}
        />
      ))}
    </div>
  );
}

export default App;
