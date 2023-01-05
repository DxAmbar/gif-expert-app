import { useState } from "react";


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* input */}

            {/* listado de Gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                {/* <li></li> */}
            </ol>

            {/* Gif Item */}

    
        </>
    )
}

