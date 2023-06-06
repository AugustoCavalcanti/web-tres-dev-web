import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditPost () {
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

    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const json = Object.fromEntries(formData.entries());
        // You can pass formData as a fetch body directly:
    
        const resposta_id = fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
            method: 'PUT',
            body: JSON.stringify({
              id: id,
              title: json.postTitulo,
              body: json.postConteudo,
              userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            navigate("/post/" + json.id);
          });
      };
    return <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Novo Post</h1>
          <Form method="post" id="cadastrar-post" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="postTitulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o título do post"
                name="postTitulo"
                value={post.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postConteudo">
              <Form.Label>Conteúdo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o conteúdo do post"
                name="postConteudo"
                value={post.body}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </>
}