import { useState } from "react";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {

        setCategories([ ...categories, 'Valorant' ])
        //setCategories( cat => [ ...categories, 'Valorant' ]) otra forma de hacerlo



    }

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* input */}

            {/* listado de Gif */}
            <button onClick = { onAddCategory } >Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key = {category}>{category}</li>
                })}
                {/* <li></li> */}
            </ol>

            {/* Gif Item */}

    
        </>
    )
}

