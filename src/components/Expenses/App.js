import React from 'react';
import Main from "./Main";
import "./ExpensesApp.css";

export async function action() {
    return null;
}

export async function loader({ request }) {
    return null;
}

export default function Expenses() {
    return (
        <div>
            <header className="demo-header">
                <div className="demo-header__badge">CRUD · useState</div>
                <h1 className="demo-header__title">Expenses Tracker</h1>
                <p className="demo-header__desc">Full CRUD expense tracking app demonstrating component composition, lifting state up, and controlled forms.</p>
            </header>
            <Main />
        </div>
    );
}
