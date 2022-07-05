import { AppRouter } from "./router";
import { NavbarState, ShopState } from "./context";

function App() {
  return (
    <ShopState>
      <NavbarState>
        <AppRouter />
      </NavbarState>
    </ShopState>
  );
}

export default App;
