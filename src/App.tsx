//import { useEffect } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";

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

  return (
    <main>
      <h2>Great things are in the works — stay tuned!</h2>
    </main>
  );
}

export default App;
