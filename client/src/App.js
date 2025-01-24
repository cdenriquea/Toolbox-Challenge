import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "./features/fileSlice";
import { Container, Table, Spinner, Alert, Form, Card } from "react-bootstrap";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { data: files, status, error } = useSelector((state) => state.files);

  const [selectedFile, setSelectedFile] = useState("");

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    const fileName = event.target.value;
    setSelectedFile(fileName);
    dispatch(fetchFiles(fileName));
  };

  return (
    <Container className="py-4">
      {/* Card del Filtro */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title className="text-center mb-3">
            <h2>Visualizador de Archivos</h2>
          </Card.Title>
          <Form.Group controlId="fileFilter" className="mb-3">
            <Form.Label>
              <strong>Filtrar por Nombre de Archivo:</strong>
            </Form.Label>
            <Form.Select
              value={selectedFile}
              onChange={handleFilterChange}
              aria-label="Filtrar archivos"
              className="shadow-sm"
            >
              <option value="">Todos los Archivos</option>
              {files.map((file) => (
                <option key={file.file} value={file.file}>
                  {file.file}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Loading Spinner */}
      {status === "loading" && (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      )}

      {/* Error Alert */}
      {status === "failed" && (
        <Alert variant="danger" className="text-center shadow-sm">
          {error}
        </Alert>
      )}

      {/* Tabla de Datos */}
      {status === "succeeded" && (
        <Card className="shadow-sm">
          <Card.Body>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre del Archivo</th>
                  <th>Texto</th>
                  <th>Número</th>
                  <th>Hexadecimal</th>
                </tr>
              </thead>
              <tbody>
                {files.flatMap(({ file, lines }) =>
                  lines.map(({ text, number, hex }, index) => (
                    <tr key={`${file}-${index}`}>
                      <td>{file}</td>
                      <td>{text}</td>
                      <td>{number}</td>
                      <td>{hex}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default App;
