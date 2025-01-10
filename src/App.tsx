//import { useEffect } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";

import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import HomePage from "./components/HomePage";

//const client = generateClient<Schema>();

function App() {
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  //useEffect(() => {
  //  client.models.Todo.observeQuery().subscribe({
  //    next: (data) => setTodos([...data.items]),
  //  });
  //}, []);

  //function createTodo() {
  //  client.models.Todo.create({ content: window.prompt("Todo content") });
  //}

  const {theme} = useContext(ThemeContext);

  return (
    <main className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <div className="app-container">
      <HomePage />
      </div>
    </main>
  );
}

export default App;
