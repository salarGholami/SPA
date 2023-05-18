import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import routers from "./Router";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {routers.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
