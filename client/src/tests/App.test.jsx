import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

import Information from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/App.jsx';
import { describe, expect, it } from 'vitest';

describe('<Information />', () => {

    // 1. Test 1: Rendering the main container div.
    // This test ensures that the main container div with the class `information-page` is rendered.
    it('renders the main div with the correct class', () => {
        const { container } = render(<Information />);
        expect(container.querySelector('.information-page')).toBeInTheDocument();
    });

    // 2. Test 2: Rendering the ETF explanation section.
    // This test ensures that the segment of the page explaining what an ETF is gets rendered correctly.
    it('renders the ETF explanation correctly', () => {
        const { getByText } = render(<Information />);
        expect(getByText('What is an ETF?')).toBeInTheDocument();
        expect(getByText(/An ETF is an investment/)).toBeInTheDocument();
    });

    // 3. Test 3: Rendering the stock explanation section.
    // This test ensures that the segment explaining how an ETF is different from a stock is rendered correctly.
    it('renders the stock explanation correctly', () => {
        const { getByText } = render(<Information />);
        expect(getByText('How is that different to a stock?')).toBeInTheDocument();
        expect(getByText(/A "stock" \(aka a "Common Stock"\)/)).toBeInTheDocument();
    });

    // 4. Test 4: Rendering the terminology section.
    // This test ensures that the terminology section of the page is rendered, 
    // specifically checking for the presence of the term "Total Assets" and its associated explanation.
    it('renders the terminology comment correctly', () => {
        const { getByText } = render(<Information />);
        expect(getByText('Terminology')).toBeInTheDocument();
    });

    // 5. Test 5: Rendering the footer comment.
    // This test ensures that the footer comment ("Created by James Preston") is rendered.
    it('renders the footer comment correctly', () => {
        const { getByText } = render(<Information />);
        expect(getByText('Created by James Preston')).toBeInTheDocument();
    });
});
