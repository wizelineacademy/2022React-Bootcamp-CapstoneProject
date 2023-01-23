import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders learn react link', () => {
	render(<Header />);
	const logoElement = screen.getByText(/velby/i);
	expect(logoElement).toBeInTheDocument();
});
