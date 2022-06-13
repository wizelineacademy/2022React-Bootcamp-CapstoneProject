import styled from 'styled-components';

export const Wrapper = styled.div`
	background: var(--clr-grey-10);
	max-width: var(--max-width);
  grid-template-columns: repeat(4, minmax(25vw, auto));
  gap: 0;
	border-radius: var(--radius);
  transition: var(--transition);

	.container {
    position: relative;
    border-radius: var(--radius);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.active{
    background: var(--clr-grey-9);
  }

	img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }

	.container:hover img {
    opacity: 0.5;
  }

	.details {
    margin-top: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
		padding: .5rem;
    text-transform: capitalize;
  }

	.counter {
    margin-top: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem auto;
		padding: .5rem;
  }

	.details h5,
  .details p {
    margin-bottom: 0;
    font-weight: 400;
  }
  .details p, .counter p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    font-weight: bold;
  }
  .counter p {
    color: var(--clr-black);
  }
`
