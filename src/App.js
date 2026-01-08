import "./App.css";

function App() {
  const name = "Tom";
  // 객체 사용
  const naver = {
    name: "네이버",
    url: "https://www.naver.com",
  };
  return (
    <div className='App'>
      <h1
        style={{
          color: "#f0f",
          backgroundColor: "green",
        }}
      >
        Hello, {name}. <p>{2 + 3}</p>
        <a href={naver.url}>{naver.name}</a>
      </h1>
    </div>
  );
}

export default App;
