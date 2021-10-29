import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Dragon Ball']);
    // const categories = ['Date Note', 'Dragon Ball', 'Naruto'];
    
    // const handleAdd = () =>{
    //     const name = 'Hola';
        
    //     // setCategories( [...categories, name] );        
    //     setCategories( cats => [...cats, name] );        
    // }

     return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <ol>
            {
                categories.map( (category) => 
                    <GifGrid 
                    key={category}
                    category={ category } 
                    />
                )
            }
        </ol>
    </>

    );
}

export default GifExpertApp;