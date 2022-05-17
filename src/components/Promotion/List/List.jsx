import React from 'react';
import PromotionCard from '../Card/Card';
import list from './List.module.css'
import api  from 'services/api';

import { useNavigate } from 'react-router-dom';

const PromotionList = ({loading, promotions }) =>{
    const navigate = useNavigate();

    function onDelete(id) {

      const method = 'delete';
      const url = `/promotions/${id}`;
      api[method](url)
        .then((response) => {
          navigate('/');
        });
  
    }

    if (loading){
        return <div>carregando...</div>
    }

    return (
        <>
          {promotions.map( (promotions) => (
              <PromotionCard 
                promotion={promotions} 
                key={promotions.id} 
                className={list.promototionList}
                // onClickDelete={ () => console.log(`Deleted ${promotions.id}`) }
                onClickDelete={ () => onDelete(promotions.id)}
                />
            )
            )
          } 
        </>
    )
}

export default PromotionList
