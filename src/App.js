import "./App.css";
function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <h1 className="logo">로고</h1>
        <ul>
          <li>Home</li>
          <li>Cart</li>
        </ul>
      </nav>

      <div className="main-bg"></div>

      <div className="container-item">
        <ul>
          <li>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="아이템1"
              width="60%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </li>
          <li>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="아이템3"
              width="60%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </li>
          <li>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="아이템3"
              width="60%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
