import "./index.css";

const pizzaData = [
  {
    name: "Oyakodon",
    ingredients: "Tender chicken thigh, eggs and onion",
    price: 16,
    photoName: "donburis/Oyakodon.jpg",
    soldOut: false,
  },
  {
    name: "Gyudon",
    ingredients: "Thinly sliced premium beef and onion in savory-sweet sauce",
    price: 18,
    photoName: "donburis/Gyudon.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Katsudon",
    ingredients: "Crisky deep-fried chicken cutlet, eggs and onion",
    price: 18,
    photoName: "donburis/Chicken-Katsudon.jpg",
    soldOut: false,
  },
  {
    name: "Eggplant-Don",
    ingredients: "Thinly sliced eggplant seared and coated with seet soy sauce",
    price: 14,
    photoName: "donburis/Soy-Glazed-Eggplant.jpg",
    soldOut: false,
  },
  {
    name: "Mapo Tofu",
    ingredients: "Ground pork and silken tofu",
    price: 14,
    photoName: "donburis/Mapo-Tofu.jpg",
    soldOut: true,
  },
  {
    name: "Tendon",
    ingredients:
      "Crispy deep-fried shrimp and vegetables drizzled with special sauce",
    price: 18,
    photoName: "donburis/Ten-Don.jpg",
    soldOut: false,
  },
  {
    name: "Poke Bowl",
    ingredients:
      "Mix of sushi-grade tuna and salmon, marinated with special sauce",
    price: 20,
    photoName: "donburis/Poke-Bowl.jpg",
    soldOut: false,
  },
  {
    name: "Unadon",
    ingredients: "Eel seared over charcoal served with special sauce",
    price: 25,
    photoName: "donburis/Unadon-Eel.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast Donburi Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Experience authentic Japanese cuisine with our selection of 8 rice
            bowl dishes (donburi). Each dish is crafted with fresh, locally
            sourced or premium imported ingredients from Japan. Each bowl is
            served with comforting miso soup to complete your meal.
            Deliciousness guaranteed!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, index) => {
              return (
                <Pizza
                  key={index}
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  photoName={pizza.photoName}
                  price={pizza.price}
                  soldOut={pizza.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : `$${price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
