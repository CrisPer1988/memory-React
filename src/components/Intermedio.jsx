 import React, { useState } from 'react'
 import iconDataIntemedio from '../utils/iconsDataIntemedio.js'
import "./styles/intermedio.css"

const Intermedio = () => {

    const [cards, setCards] = useState(iconDataIntemedio.sort(() => Math.random() - 0.5))

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
        }, 1000);

    }

  
    return (
        <div className="App">
            <h2 className='titlle__intermedio'>Intermedio</h2>
            <div className='contaniner__cards-intermedio'>
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






export default Intermedio