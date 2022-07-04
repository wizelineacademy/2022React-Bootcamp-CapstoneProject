import { AppRouter } from "./router";
import { NavbarState } from "./context";

function App() {
  return (
    <NavbarState>
      <AppRouter />
    </NavbarState>
  );
}

export default App;
