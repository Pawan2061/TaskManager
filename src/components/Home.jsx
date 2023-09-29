import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
   
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-4">
                Task list manager web app simplifies your life by helping you
                manage tasks effortlessly. Stay in control, prioritize, and
                achieve your goals with ease.
              </p>
              <div className="flex gap-4 ml-20">
                <Link to="/addTasks">
                  <button className="btn btn-primary">Add Tasks</button>
                </Link>
                <Link to="/showTasks">
                  <button className="btn btn-primary">Display Tasks</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Home
