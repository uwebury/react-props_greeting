import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Uwe" />
      <Greeting name="Coach" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
