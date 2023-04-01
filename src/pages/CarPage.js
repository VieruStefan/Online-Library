import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CarPage = ({ match }) => {
  let carId = useParams().id //= match.params.id;
  let [car, setCar] = useState(null);
  useEffect(() => {
    getCar()
  // eslint-disable-next-line
  }, [carId]);

  let getCar = async () => {
    let response = await fetch(`/api/cars/${carId}/`);
    let data = await response.json();
    setCar(data);
  };

  // let updateCar = async() =>{
  //   fetch(`/api/cars/${carId}`,{
  //     method: "PUT",
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(car)
  //   })
  // }
  
  return (
    <div>
       {/* onChange={(e) => {setCar()}} */}

      <Link to='../'>Back</Link>
      <p>{car?.name}</p>
    </div>
  );
};

export default CarPage;
