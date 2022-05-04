import React from 'react';
import { useParams } from 'react-router-dom';
import UIContainer from 'components/UI/Container/Container';
import PromotionForm from 'components/Promotion/Form/Form';

const PagesPromotionForm = () =>{
    const { id } = useParams();

    return(
        <UIContainer>
            <PromotionForm id={id ? Number.parseInt(id, 10) : null} />
        </UIContainer>
    )
}

export default PagesPromotionForm;
