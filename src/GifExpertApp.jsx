
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setcategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {

      if ( categories.includes(newCategory) ) return;

        
       
        //Primera forma para agregar una categoria (Recomendada)
        setcategories([ newCategory,...categories ]);
        
        //Segunda forma para agregar una categoria
        //setcategories( cat =>[...cat, 'Konoha'] );

    }

  return (
    <>
        
        <h1>GifExpertApp</h1>

        
        <AddCategory 
        
        onNewCategory={ (value) => onAddCategory(value) }

        />
        

          
            { 
            categories.map( (category) =>(
                <GifGrid key={category}  category={category}/>
             ) )
          }
        
           

    </>
  )
}
