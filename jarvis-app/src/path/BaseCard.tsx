import { CardType } from "./CardType";
import { useState } from "react";
import React from "react";

function BaseCard() {
    const [card, setCard] = useState({});

    React.useEffect(() => {
        fetch(`/getCard?cardType=${CardType.BaseCard}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => setCard(res))
            .catch((err) => err);
    }, []);

    return <div className="content flexRow">{JSON.stringify(card)}</div>;
}

export default BaseCard;
