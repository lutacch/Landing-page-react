import React from "react";



function Jumbotron() {
  return (
    <div className="hola card ms-5 me-5 mt-2 mb-2">
  <div className="card-body m-3">
    <h5 className="card-title fs-1 text-start">A Warm Welcome!</h5>
    <p className="card-text text-start text-muted">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
    <button type="button" className="btn btn-danger position-absolute top-70 start-0 ms-4">Call to action!</button>
  </div>
</div>
  );
}

export default Jumbotron;