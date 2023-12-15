import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

function Home() {
  return (
   
    <Layout>
       <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-gray-600">
              We're dedicated to providing high-quality services and products to
              meet your needs.
            </p>
            <Link to='/signup'><button className="btn btn-primary mt-2">Get Started</button></Link>
            
          </div>
        </div>
      </div>

      </Layout>
             

              

      
  );
}

export default Home;
