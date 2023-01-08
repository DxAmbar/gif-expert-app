import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {

        setCategories([ 'Valorant', ...categories ])
        //setCategories( cat => [ ...categories, 'Valorant' ]) otra forma de hacerlo

    }

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory setCategories={ setCategories }/>

            {/* listado de Gif */}
            
            <ol>
                { categories.map( category => {
                    return <li key = { category }>{ category }</li>
                })}
                {/* <li></li> */}
            </ol>

            {/* Gif Item */}

    
        </>
    )
}

