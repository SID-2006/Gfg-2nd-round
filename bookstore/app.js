function Navbar() {
  return (
    <nav className="navbar">
      <h1>BookVerse</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Authors</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h2>Discover Your Next Favorite Book</h2>
      <p>Explore the best-selling books curated just for you.</p>
    </section>
  );
}

function FeaturedBooks() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/81Y+K9D1AHL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Ikigai",
      author: "Héctor García",
      price: "₹350",
      image: "https://m.media-amazon.com/images/I/816c8N6jC7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "₹399",
      image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg"
    }
  ];

  return (
    <section className="featured">
      <h2>Featured Books</h2>
      <div className="book-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p className="price">{book.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

//made without using AI
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 BookVerse. All rights reserved.</p>
        <div className="socials">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <Footer />
    </>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));

