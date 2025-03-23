import { StrictMode } from 'react';
import ReactDOM from "react-dom";

import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.scss';

const root = document.getElementById("root");
ReactDOM.render(<App />, root);