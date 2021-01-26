import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log("ERROR:: " + err));
  });
  return (
    <div>
      <div className="row">
        {posts.map((post) => (
          <div className="col s6" key={post.id}>
            <div className="card">
              <div className="card-content">
                <div className="card-title">{post.title}</div>
                <p className="timestamp">{post.createdAt}</p>
                <p>{post.body}</p>
              </div>
              <div className="card-action">
                <a href="#">Edit</a>
                <a href="#" className="delete-btn">
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
