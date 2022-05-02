import React from 'react';
import { useParams } from 'react-router-dom';
import UIContainer from 'components/UI/Container/Container';
import PromotionForm from 'components/Promotion/Form/Form';

const PagesPromotionForm = () =>{
    const { id } = useParams();

    return(
        <UIContainer>
            <PromotionForm />
        </UIContainer>
    )
}

export default PagesPromotionForm;