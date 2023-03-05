import React, { useState } from 'react'
import iconData from "../utils/iconsData"


const Basico = () => {
    const [cards, setCards] = useState(iconData.sort(() => Math.random() - 0.5))

    const [prevIndexCard, setPrevIndexCard] = useState(-1)

    const selectCard = index => {

        cards[index].status = "selected"
        setCards([...cards])
        if (prevIndexCard === -1) {
            setPrevIndexCard(index)
        } else {
            validateCards(index)
        }
    }

    const validateCards = newIndexCard => {
        setTimeout(() => {
            if (cards[prevIndexCard].icon === cards[newIndexCard].icon) {
                cards[prevIndexCard].status = "up"
                cards[newIndexCard].status = "up"
            } else {
                cards[prevIndexCard].status = "down"
                cards[newIndexCard].status = "down"
            }
            setCards([...cards])
            setPrevIndexCard(-1)
        }, 1300);

    }
   
    return (
        <div className="App">
            <h2 className='tittle__basico'>Básico</h2>
            <div className='contaniner__cards caard'>
                {
                    cards.map((card, i) => (
                        <div onClick={() => selectCard(i)} className={`card ${card.status}`} key={card.id}>
                            {
                                card.status !== "down" && (
                                    <i className={card.icon}></i>
                                )
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Basico