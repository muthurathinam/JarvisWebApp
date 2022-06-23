import "./App.css";
import "./Common.css";
import Home from "./path/Home";
import BaseCard from "./path/BaseCard";
import RefreshCard from "./path/RefreshCard";
import { CardType } from "./path/CardType";

export default function App() {
    const cardPath = window.location.pathname.slice(1);
    let bodyComponent = <Home />;
    switch (cardPath) {
        case CardType.BaseCard:
            bodyComponent = <BaseCard />;
            break;

        case CardType.RefreshCard:
            bodyComponent = <RefreshCard />;
            break;
    }
    return (
        <div className="flexColumn app">
            <header className="flexRow header">Welcome to Jarvis!</header>
            <main className="mainContent">{bodyComponent}</main>
        </div>
    );
}
