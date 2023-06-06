import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id )
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
      });
  }, []);

  const navigate = useNavigate();
  const handleSubmitExcluir = () => {
    const resposta_id = fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      })
      .then((response) => response.json())
      .then((json) => {
        navigate("/");
      });
  };
  const handleSubmitEditar = () => {
    navigate("/editar-post/" + id);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Detalhes do Post</h1>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title text-capitalize">{post.title}</h5>
                <p className="card-text">
                 {post.body}
                </p>
                <Button variant="danger" type="submit" onClick={handleSubmitExcluir}>Excluir</Button>
                <Button variant="secondary" type="submit" onClick={handleSubmitEditar}>Editar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
