import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

//testare:
// la visualizzazione dei commenti
// la visualizzazione e il funzionamento  dell'aggiunta di commenti

describe("Visualizzazione CommentArea", () => {
  it("comment area esiste", () => {
    render(<CommentArea />);
    const showCommentArea = screen.getByTestId("comment-area");
    expect(showCommentArea).toBeInTheDocument();
  });
});
