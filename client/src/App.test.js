import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Visualizador de Archivos/i);
  expect(titleElement).toBeInTheDocument(); // Verifica si está en el DOM
});
