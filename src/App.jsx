import "./index.css";

const donburiData = [
  {
    name: "Oyakodon",
    ingredients:
      "Succulent chicken thigh simmered with eggs and onions in a savory dashi sauce",
    price: 16,
    photoName: "donburis/Oyakodon.jpg",
    soldOut: false,
  },
  {
    name: "Gyudon",
    ingredients:
      "Thinly sliced premium beef and onions simmered in a rich, sweet-savory soy sauce",
    price: 18,
    photoName: "donburis/Gyudon.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Katsudon",
    ingredients:
      "Crispy deep-fried chicken cutlet, gently simmered with eggs and onions in a flavorful broth",
    price: 18,
    photoName: "donburis/Chicken-Katsudon.jpg",
    soldOut: false,
  },
  {
    name: "Eggplant-Don",
    ingredients:
      "Tender eggplant slices pan-seared and glazed with a sweet soy-based sauce",
    price: 14,
    photoName: "donburis/Soy-Glazed-Eggplant.jpg",
    soldOut: false,
  },
  {
    name: "Mapo Tofu",
    ingredients:
      "Silky tofu and minced pork stir-fried in a bold, spicy Sichuan-style sauce",
    price: 14,
    photoName: "donburis/Mapo-Tofu.jpg",
    soldOut: true,
  },
  {
    name: "Tendon",
    ingredients:
      "Crispy tempura shrimp and seasonal vegetables drizzled with a light, umami-rich tempura sauce",
    price: 18,
    photoName: "donburis/Ten-Don.jpg",
    soldOut: false,
  },
  {
    name: "Poke Bowl",
    ingredients:
      "Fresh sushi-grade tuna and salmon, marinated in a house-made soy citrus sauce, topped with avocado and sesame",
    price: 20,
    photoName: "donburis/Poke-Bowl.jpg",
    soldOut: false,
  },
  {
    name: "Unadon",
    ingredients:
      "Charcoal-grilled eel glazed with a sweet, smoky kabayaki sauce, served over a bed of fluffy rice",
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
  const donburis = donburiData;
  const numDonburis = donburis.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numDonburis > 0 ? (
        <>
          <p>
            Experience authentic Japanese cuisine with our selection of 8 rice
            bowl dishes (donburi). Each bowl is crafted with fresh, locally
            sourced or premium imported ingredients from Japan. Each bowl is
            served with comforting miso soup to complete your meal.
            Deliciousness guaranteed!
          </p>
          <ul className="donburis">
            {donburiData.map((donburi, index) => {
              return (
                <Donburi
                  key={index}
                  name={donburi.name}
                  ingredients={donburi.ingredients}
                  photoName={donburi.photoName}
                  price={donburi.price}
                  soldOut={donburi.soldOut}
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

function Donburi({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`donburi ${soldOut ? "sold-out" : ""}`}>
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
  const closeHour = 20;
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
