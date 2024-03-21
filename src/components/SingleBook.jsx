import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <>
      <Card
        data-testid="list-books"
        id="cardStyle"
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{
          border: props.selectedBook === props.book.asin ? "3px solid yellow" : "none",
        }}
      >
        <Card.Img variant="top" src={props.book.img} id="imgCard" />
        <Card.Body>
          <Card.Title style={{ color: "white" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
