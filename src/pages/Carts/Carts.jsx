import "./Carts.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((item) => item.id !== cart.id)); // เปลี่ยนจาก cart เป็น item
                  }}
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Item: {carts.length} items - total Price: $
        {carts
          .reduce((prev, cart) => {
            return prev + cart.price;
          }, 0)
          .toFixed(2)}
      </h4>
      <button>Checkout</button>
    </div>
  );
}

export default Carts;
