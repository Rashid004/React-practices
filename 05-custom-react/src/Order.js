/** @format */
import "./Order.css";
function Order() {
  return (
    // <div className="order__container">
    <div className="order__section">
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Burger img"
      />

      <div className="order__info">
        <h3>Best Burger</h3>
        <p>
          Life is too short to miss out on the beautiful things like a double
          cheeseburger Man who invented the hamburger was smart; man who
          invented the cheeseburger was a genius.
        </p>
        <button>Order Now</button>
      </div>
    </div>
    // </div>
  );
}

export default Order;
