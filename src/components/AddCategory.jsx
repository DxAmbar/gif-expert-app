import { useState } from "react"

export const AddCategory = () => {

    const [InputValue, setInputValue] = useState('One punch');

    const onInputChange = ({ target }) =>{// o = (event) => {
        /*console.log(event.target.value);
        setInputValue(event.target.value);*/
        //console.log( target.value );
        setInputValue( target.value );

    }

    const onSubmit = ( event ) => {
        event.preventDefault();

    }

    return (

        <form onSubmit={ ( event ) => onSubmit( event )}>
            <input 
                type="text" 
                placeholder="Buscar gifs"   
                value = { InputValue }
                //onChange = { (event) => onInputChange(event) }
                onChange = { onInputChange}
            />
        </form>
    )
}
