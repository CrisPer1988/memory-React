import React, { useState } from 'react'
import iconDataPro from '../utils/iconsDataPro'
import "./styles/pro.css"

const Pro = () => {
 

    const [cards, setCards] = useState(iconDataPro.sort(() => Math.random() - 0.5))

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
        }, 400);

    }

  return (
    <div className="App">
        <header>
            <h2 className='titlle__pro'>Pro</h2>
        </header>
            
            <div className='contaniner__cards-pro'>
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

export default Pro