import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Lista() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Lista de Posts</h1>
            {posts.map((post) => {
              return (
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <Link to={`/post/${post.id}`} className="linkPost">
                        <div className="card-body">
                          <h5 className="card-header text-capitalize">{post.title}</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
