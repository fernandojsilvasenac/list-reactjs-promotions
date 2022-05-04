import React from 'react';
import { useParams } from 'react-router-dom';

<<<<<<< HEAD
const PagesPromotionForm = () => {
  const { id } = useParams();

  return (
    <div>
      {!id 
        ? 'FORM NOVO'
        : 'FORM EDITAR'
      }      
      {id && <div>id: {id}</div>}
    </div>
  );
}

export default PagesPromotionForm;
=======
const PagesPromotionForm = () =>{
    const { id } = useParams();

    return(
        <div>
        {!id
         ? 'FORM NOVO REGISTRO'   
         : 'FORM EDITAR REGISTRO'   
        }    
            {id && <div> id: {id} </div>}
        </div>
    )
}

export default PagesPromotionForm;
>>>>>>> ab9830dc1e36f21e14dc7b9186de86b3bc617624
