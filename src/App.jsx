import Result from "./components/Result";
import Summary from "./components/Summary";
import { items } from "./constants/data.js";

function App() {
  return (
    <main>
      <Result data={items} />
      <Summary data={items} />
    </main>
  );
}

export default App;
