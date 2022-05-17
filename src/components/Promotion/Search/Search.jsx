import React, { useEffect, useState } from 'react';
import searchCss from './Search.module.css';
import api  from 'services/api';
import PromotionList from '../List/List';
import { Link } from 'react-router-dom';
import UIButton from 'components/UI/Button/Button';


const PromotionSearch = () =>{

    const [promotions, setPromotions] = useState([]);
    const [search, setSearch ] = useState('');

    useEffect( () => {
       const params = {};
       if (search) {
         params.title_like = search;
       }
      

      api.get('/promotions?_embed=comments', { params })
      .then(
        (response) => {
            setPromotions(response.data);
        }
      );


    }, [search] );    


    return (
        <>
          <header className={searchCss.promotionSearchHeader}>
            <h1>Buscapé Promoções</h1>
            <UIButton to="/create" component={Link} theme="contained-success">Nova Promoção</UIButton>
          </header>
          <input 
            type="search"
            className={searchCss.promotionSearchInput} 
            placeholder="Buscar"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
          {/* {promotions.map( (promotions) => (
              <PromotionCard promotion={promotions} key={promotions.id}/>
            )
            )
          }  */}
          <PromotionList promotions={promotions} loading={!promotions.length} />
        </>
    )
}

export default PromotionSearch;