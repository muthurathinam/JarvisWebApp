import React from "react";
import { useState } from "react";
import { CardType } from "./CardType";

function RefreshCard() {
    const [card, setCard] = useState({});

    React.useEffect(() => {
        fetch(`/getCard?cardType=${CardType.RefreshCard}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => setCard(res))
            .catch((err) => err);
    }, []);
    return <div className="content flexRow">{JSON.stringify(card)}</div>;
}

export default RefreshCard;
