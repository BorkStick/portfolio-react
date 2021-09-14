import React from "react";
import { projects } from "../data/projects.json";
import { Link } from "react-router-dom";
// import "./productgrid.css";

export default function ProjectPage() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="container justify-content-center">
        <div className="row ">
          <div className="col-sm ">One of three columns</div>
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
      <div>
        {projects.map((data, key) => {
          

          return (
            <div key={key}>
              <Link
                to={`/projects/${data.slug}`}
                className=""
                id="product-grid-link"
              >
                <div className="card">
                  <img
                    className="card-img-top img-fluid"
                    src={data.image}
                    alt={data.title}
                    id="product-grid-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
