import { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) =>{// o = (event) => {
        /*console.log(event.target.value);
        setInputValue(event.target.value);*/
        //console.log( target.value );
        setInputValue( target.value );

    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( InputValue.trim().length <= 1) return; 

        setCategories( (categories) => [ InputValue, ...categories] )
        setInputValue('');
        
    }

    return (

        <form onSubmit={ onSubmit }>  {/* o { ( event ) => onSubmit( event )}> */}
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
