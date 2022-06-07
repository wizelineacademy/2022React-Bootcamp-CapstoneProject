import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe("Logo testings", () => {
    test('Logo must have src = "/static/logo.svg" and alt = "logo/name"', () => {
        render(<Logo image="/static/logo.svg" />);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', '/static/logo.svg');
        expect(logo).toHaveAttribute('alt', 'logo/name');
    })
});