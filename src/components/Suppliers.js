import React, { useState } from 'react';
import Select from 'react-select';

import './Supplier.css'

const suppliers = [
    { label: 'Messi', value: 'Messi' },
    { label: 'Ronaldo', value: 'Ronaldo' },
    { label: 'Mbappe', value: 'Mbappe' },
]

const DBSuppliers = ['Messi', 'Ronaldo', 'Mbappe'];

const DBSuppliers2 = [
    { id: 123, name: 'Messi', adress: 'FB Address' },
    { id: 124, name: 'Ronaldo', adress: 'IG Address' },
    { id: 125, name: 'Mbappe', adress: 'YT Address' },
]

export const Suppliers = () => {

    const handleSelectChange = ( event ) => {
        console.log(event);
    }

    return (
        <div className = " Suppliers-container ">
            <Select
                // defaultValue = { suppliers[0] }
                options = { DBSuppliers2.map(sup => ({ label: sup.name, value: sup.id })) }
                onChange = { handleSelectChange }
            />
        </div>
    )
}
