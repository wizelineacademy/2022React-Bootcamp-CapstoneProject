import { createGlobalStyle } from 'styled-components';
import { device } from './mediaquery';

export const GlobalStyles = createGlobalStyle`
	:root {
		/* dark shades of primary color*/
		--clr-primary-1: hsl(22, 89%, 50%);
		--clr-primary-2: hsl(22, 89%, 29%);
		--clr-primary-3: hsl(22, 89%, 37%);
		--clr-primary-4: hsl(22, 89%, 45%);
		/* primary/main color */
		--clr-primary-5: hsl(22, 89%, 52%);
		/* lighter shades of primary color */
		--clr-primary-6: hsl(22, 89%, 60%);
		--clr-primary-7: hsl(22, 89%, 67%);
		--clr-primary-8: hsl(20, 89%, 74%);
		--clr-primary-9: hsl(22, 89%, 81%);
		--clr-primary-10: hsl(22, 89%, 88%);
		/* darkest grey - used for headings */
		--clr-grey-1: hsl(209, 61%, 16%);
		--clr-grey-2: hsl(211, 39%, 23%);
		--clr-grey-3: hsl(209, 34%, 30%);
		--clr-grey-4: hsl(209, 28%, 39%);
		/* grey used for paragraphs */
		--clr-grey-5: hsl(210, 22%, 49%);
		--clr-grey-6: hsl(209, 23%, 60%);
		--clr-grey-7: hsl(211, 27%, 70%);
		--clr-grey-8: hsl(210, 31%, 80%);
		--clr-grey-9: hsl(212, 33%, 89%);
		--clr-grey-10: hsl(210, 36%, 96%);
		--clr-white: #fff;
		--clr-black: #222;
		--transition: all 0.3s linear;
		--spacing: 0.1rem;
		--radius: 0.25rem;
		--light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		--dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		--max-width: 1170px;
		--fixed-width: 620px;
	}

	*,
	::after,
	::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%; /* 1REM = 10px */

		@media only screen and ${device.tablet} {
			font-size: 72.5%; /* 1REM = 10px */
		}

		@media only screen and ${device.laptop} {
			font-size: 82.5%; /* 1REM = 10px */
		}
	}
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background: var(--clr-grey-1);
		color: var(--white);
		line-height: 1.5;
		font-size: 0.875rem;
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
	hr {
		border: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5 {
		letter-spacing: var(--spacing);
		text-transform: capitalize;
		line-height: 1.25;
		margin-bottom: 0.75rem;
	}
	h1 {
		font-size: 2.5rem;
		color: var(--clr-grey-3);
		background-color: var(--clr-grey-10);
		text-align: center;
		padding: .5rem;
	}
	h2 {
		font-size: 2rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	h4 {
		font-size: 1.25rem;
	}
	h5 {
		font-size: 0.875rem;
	}
	p {
		margin-bottom: 1.25rem;
		color: var(--clr-grey-3);
	}
	iframe {
		display: none;
	}
	@media only screen and ${device.laptop} {
		h1 {
			font-size: 2rem;
		}
		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.5rem;
		}
		h4 {
			font-size: 1rem;
		}
		h5 {
			font-size: 1rem;
		}
		body {
			font-size: 1rem;
		}
		h1,
		h2,
		h3,
		h4 {
			line-height: 1;
		}
	}
	/*  global classes */

	a {
		&.btn {
			display: block;
			width: 148px;
			margin: 2rem auto;
			text-align: center;
			text-transform: uppercase;
			background: var(--clr-primary-5);
			color: var(--clr-primary-10);
			padding: 0.375rem 0.75rem;
			letter-spacing: var(--spacing);
			font-weight: 400;
			transition: var(--transition);
			font-size: 0.875rem;
			cursor: pointer;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
			border-radius: var(--radius);
			border-color: transparent;
			cursor: pointer;
		}
	}

	h1 {
		.inside & {
			background-color: var(--clr-grey-1);
			color: var(--clr-white);
			padding: 2rem 1rem 1rem 1rem;
			margin: 0 auto;
			text-align: left;
			font-weight: normal;
			font-size: 1.5rem;
			max-width: var(--max-width);
			width: 100%;

			@media only screen and ${device.laptop} {
				padding: 3rem 1rem 4rem;
				font-size: 2.5rem;
				text-align: right;
			}
		}
	}

	/* section */
`;

export default GlobalStyles;
