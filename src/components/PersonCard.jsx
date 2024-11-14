import { useState } from "react";

const PersonCard = (props) => {
  const { lastName, firstName, startingAge, hairColor } = props;
  const [age, setAge] = useState(startingAge);
  const increaseAge = (age) => setAge(age + 1);
  return (
    <div className="card shadow w-50 mb-5 mx-auto">
      <div className="card-body mx-auto">
        <h3 className="card-title fw-bold">
          {lastName}, {firstName}
        </h3>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button className="btn btn-primary" onClick={() => increaseAge(age)}>
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    </div>
  );
};
export default PersonCard;
