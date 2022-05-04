import React from 'react';
import { useParams } from 'react-router-dom';
import UIContainer from 'components/UI/Container/Container';
import PromotionForm from 'components/Promotion/Form/Form';

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
        <UIContainer>
            <PromotionForm id={id ? Number.parseInt(id, 10) : null} />
        </UIContainer>
    )
}

export default PagesPromotionForm;
>>>>>>> ab9830dc1e36f21e14dc7b9186de86b3bc617624
