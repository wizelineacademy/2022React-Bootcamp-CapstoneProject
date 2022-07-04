import { LogoContainer } from "./styled";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/home">
      <LogoContainer src="/assets/logo.webp" alt="logo" {...props} />
    </Link>
  );
};

export default Logo;
