import { useRoutes } from "react-router-dom";
import routes from "./Routes";

function App() {
  const router = useRoutes(routes);
  return (
    <div className="  m-auto h-full">
      <div className="m-auto  sm:py-0 h-full">{router}</div>
    </div>
  );
}

export default App;
