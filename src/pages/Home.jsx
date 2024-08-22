import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const StartDex = () => {
    navigate("/dex");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Welcome to the Pokemon Dex</h1>
      <button
        onClick={StartDex}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
