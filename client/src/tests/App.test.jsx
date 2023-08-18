import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

import Information from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/components/Information.jsx';
import HomePage from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/components/HomePage';
import SearchPage from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/components/SearchPage';
import { describe, expect, it } from 'vitest';
import SignUpPage from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/src/components/SignUpPage';
import LogoutPage from '../components/LogoutPage';

    // Test 1. This test ensures that the footer comment ("Created by James Preston") is rendered on HomePage.
    it('1. renders the footer comment correctly - Home Page', () => {
            const { getByText } = render(<HomePage />);
            expect(getByText('Created by James Preston')).toBeInTheDocument();
        });

    // Test 2. This test ensures that the footer comment ("Created by James Preston") is rendered on LoginPage.
    it('2. renders the footer comment correctly - Sign Up Page', () => {
        const { getByText } = render(<SignUpPage/>);
        expect(getByText('Created by James Preston')).toBeInTheDocument();
    });


    // Test 3. This test ensures that the footer comment ("Created by James Preston") is rendered on Information Page.
    it('3. renders the footer comment correctly - Information Page', () => {
        const { getByText } = render(<Information />);
        expect(getByText('Created by James Preston')).toBeInTheDocument();
    });

    
    // Test 4. This test ensures that the footer comment ("Created by James Preston") is rendered on LogoutPage.
    it('5. renders the footer comment correctly - Logout Page', () => {
        const { getByText } = render(<LogoutPage />);
        expect(getByText('Created by James Preston')).toBeInTheDocument();
    });


    // Test 5.  This test ensures that the footer comment ("Created by James Preston") is rendered on SearchPage.
    it('5. renders the footer comment correctly - Search Page', () => {
            const { getByText } = render(<SearchPage />);
            expect(getByText('Created by James Preston')).toBeInTheDocument();
        });

