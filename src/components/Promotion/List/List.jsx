import React, {useState, useEffect} from 'react';
import PromotionCard from '../Card/Card';
import list from './List.module.css'
import api  from 'services/api';

const PromotionList = ({loading, searchPromotion }) =>{
    const [promotions, setPromotions] = useState([]);

    useEffect( () => {
       const params = {};
       if (searchPromotion) {
         params.title_like = searchPromotion;
       }
      

      api.get('/promotions?_embed=comments', { params })
      .then(
        (response) => {
            setPromotions(response.data);
        }
      );


    }, [] );    

    function onDelete(id) {

      setPromotions(promotions.filter((item) => item.id !== id));
      const method = 'delete';
      const url = `/promotions/${id}`;
      api[method](url)
        .then((response) => {});
  
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
