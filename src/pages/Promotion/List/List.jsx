import React, { useEffect, useState } from 'react';
import PromotionCard from '../../../components/Promotion/Card/Card';
import styled from 'styled-components';
import axios from 'axios';

const LayoutContainer = styled.div`
        max-width: 800px;
        margin: 30px auto;
`;

const PagesPromotionList = () => {

    const promotions = {
        "id": 1,
        "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
        "price": 1799,
        "imageUrl": "https://m.media-amazon.com/images/I/61o0lt6Sh6L._AC_SL1000_.jpg",
        "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=gatry0b-20&linkId=e4a1146599e36741a720a6a952cbc328&language=pt_BR",
        "comments": [
          {
            "id": 1,
            "comment": "TELA HD"
          }
        ]
      };
      
      const [promotion, setPromotion] = useState([]);

      useEffect( ()=> {
          axios.get('http://localhost:5000/promotions?_embed=comments')
            .then((response) =>{
            console.log(response.data);
            setPromotion(response.data);
          })
      }, []);

      
  return (
    <div>
        <LayoutContainer>
            <PromotionCard promotion={promotion} />
        </LayoutContainer>
    </div>
  );
};

export default PagesPromotionList;
