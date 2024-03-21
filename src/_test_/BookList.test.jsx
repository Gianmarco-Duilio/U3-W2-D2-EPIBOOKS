import BookList from "../components/BookList";
import { render, screen, fireEvent } from "@testing-library/react";
import fantasy from "../data/fantasy.json";

describe("Creazione di card e ricerca", () => {
  it("Tutti i libri sono stati renderizzati", () => {
    render(<BookList books={fantasy} />);
    const listOfBooks = screen.queryAllByTestId("list-books");
    expect(listOfBooks).toHaveLength(150);
  });
  it(() => {});
});
