import React, { useState } from "react";

export function useCard(cardType: string) {
    const [card, setCard] = useState({});

    React.useEffect(() => {
        const data = {
            cardType,
        };
        fetch(`/getCard`, {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => setCard(res))
            .catch((err) => err);
    }, [cardType]);

    return card;
}
