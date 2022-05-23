import React, { useEffect, useState } from 'react';
import searchCss from './Search.module.css';
import api  from 'services/api';
// import PromotionList from '../List/List';
import PromotionCard from '../Card/Card';
import { Link } from 'react-router-dom';
import UIButton from 'components/UI/Button/Button';


const PromotionSearch = () =>{

    const [promotions, setPromotions] = useState([]);
    const [search, setSearch ] = useState('');
    const [onDelete, setOnDelete] = useState(null);

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


    }, [search, onDelete] );    

    const handleDelete = async (id) => {

      // setPromotions(promotions.filter((item) => item.id !== id));
      const method = 'delete';
      const url = `/promotions/${id}`;
      await api[method](url)
        .then((response) => {
          setOnDelete(id);
          return (<>Deletando....</>)
        });
  
    }

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
          {promotions.map( (promotions) => (
            <PromotionCard promotion={promotions} key={promotions.id}
              onClickDelete={ () => handleDelete(promotions.id)}
            />
            )
          )}

          {/* <PromotionList searchPromotion={search} loading={!promotions.length} /> */}
        </>
    )
}

export default PromotionSearch;