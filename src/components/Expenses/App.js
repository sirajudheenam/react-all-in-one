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
    return <Main />;
}
