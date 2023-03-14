import React, { useState } from 'react';
import Select from 'react-select';

import './Supplier.css'

const players = [
  { player: 'Lionel Messi', age: 34, team: ['FC Barcelona'] },
  { player: 'Cristiano Ronaldo', age: 37, team: ['Manchester United', 'Real Madrid', 'Juventus'] },
  { player: 'Robert Lewandowski', age: 33, team: ['Bayern Munich'] },
  { player: 'Kylian Mbappé', age: 23, team: ['Paris Saint-Germain', 'AS Monaco'] },
  { player: 'Neymar Jr.', age: 30, team: ['Paris Saint-Germain', 'FC Barcelona'] },
  { player: 'Kevin De Bruyne', age: 30, team: ['Manchester City'] },
  { player: 'Virgil van Dijk', age: 30, team: ['Liverpool', 'Southampton', 'Celtic'] },
  { player: 'Mohamed Salah', age: 29, team: ['Liverpool', 'AS Roma', 'Chelsea'] },
  { player: 'Sadio Mané', age: 29, team: ['Liverpool', 'Southampton', 'Red Bull Salzburg'] },
  { player: 'Jan Oblak', age: 29, team: ['Atlético Madrid'] },
]


export const Suppliers = ({dato}) => {
    const handleSelectChange = ( event ) => {
        console.log(event);
        return
    }

    return (
        <div className = " Suppliers-container ">
            <Select
                // defaultValue = { suppliers[0] }
                options= { players.map(sup => ({ label: sup.player })) }
                onChange = { handleSelectChange }
            />
        </div>
        
    )

}
