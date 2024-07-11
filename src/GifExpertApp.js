import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  
    // useStateSnipet
    const [categories, setcategories] = useState(['Dragon Ball']);

    // const handleAdd = () =>{
    //     // setcategories ( [ 'Haikyu', ...categories ] );
    //     setcategories( cats => [ ...cats, 'Haikyu' ] );
    // }
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category} 
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}