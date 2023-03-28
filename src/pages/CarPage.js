import React, { useState, useEffect } from "react";

const CarPage = ({ match }) => {
  let carId = match.params.id;
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

  return (
    <div>
      <p>{car?.name}</p>
    </div>
  );
};

export default CarPage;
