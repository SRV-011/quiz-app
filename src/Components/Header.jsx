import img from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={img} alt="react quiz logo" />
      <h1>REACTQUIZ</h1>
    </header>
  );
}
