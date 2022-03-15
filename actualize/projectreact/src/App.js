import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "Dan", message: "Hello there" },
    { name: "John", message: "I am John Snow" },
    { name: "The Enchanter", message: "Some people call me...Tim" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;

// <Tweet name="Dev Dan" message="Feed me waffles" />
// <Tweet name="John Snow" message="I dont want it" />
// <Tweet name="Dragon Lady" message="Whatevs" />
// <Tweet name="Poople" message="Lend me your rears" />
