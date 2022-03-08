import { Logo } from "../header/logo"
import { Header } from "../header"
import React from "react";
import {within, render} from 'react-testing-library';

jest.mock(Header, () => 
    <div data-testid="header">
        <Header/>
    </div>
);

test("Logo is in header", () => {
    const getByTestId = render(<Header />);
    const Header = getByTestId('header');
    const logoInHeader = within(Header).getAllByTestId('header');
    expect(logoInHeader.length).toBe(1);
});

describe ("Logo should exist", () => {
    if(React.isValidElement(Logo)) {
        console.log("Logo exists!");
    }
});
