import { ControllsContainer, PageLabel, ControllButton } from "./styled";

const PageControlls = () => {
  return (
    <ControllsContainer>
      <ControllButton>Prev</ControllButton>
      <PageLabel>1</PageLabel>
      <PageLabel>2</PageLabel>
      <PageLabel>3</PageLabel>
      <ControllButton>Next</ControllButton>
    </ControllsContainer>
  );
};

export default PageControlls;
