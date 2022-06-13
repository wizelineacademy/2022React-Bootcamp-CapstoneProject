import * as Styles from "./pagination-styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PaginationComponent() {
  return (
    <Styles.StyledContainer>
      <Styles.ListItem>
        <Styles.Button>
          <FaArrowLeft />
          <span>Anterior</span>
        </Styles.Button>
      </Styles.ListItem>
      <Styles.ListItem>
        <Styles.NumberButton className="active">1</Styles.NumberButton>
      </Styles.ListItem>
      <Styles.ListItem>
        <Styles.NumberButton>2</Styles.NumberButton>
      </Styles.ListItem>
      <Styles.ListItem>
        <Styles.NumberButton>3</Styles.NumberButton>
      </Styles.ListItem>
      <Styles.ListItem>
        <Styles.Button>
          <span>Siguiente</span>
          <FaArrowRight />
        </Styles.Button>
      </Styles.ListItem>
    </Styles.StyledContainer>
  );
}
