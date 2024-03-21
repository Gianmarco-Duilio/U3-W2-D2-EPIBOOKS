import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Verifica del componente Welcome", () => {
  it("Welcome alert viene montato correttamente", () => {
    render(<Welcome />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
  });
  it("Welcome button viene montato correttamente", () => {
    render(<Welcome />);
    const button = screen.getByRole("button"); // verifica che ci sia un bottone a caso nella pagina
    expect(button).toBeInTheDocument();
  });
});
