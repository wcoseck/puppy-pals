import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null); // Move this outside of featPup
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log("puppyList: ", puppyList);
  console.log(featuredPup);

  const handleClick = (id) => {
    setFeatPupId(id); // Set the clicked puppy's id
  };

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}

      <div className="featPup">
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
