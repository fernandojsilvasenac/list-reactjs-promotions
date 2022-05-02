import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import formCss from './Form.module.css';

//2
const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0,
}



const PromotionForm = () =>{
    // const [values, setValues] = useState(id ? null: initialValue);
    //2.1
    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

    const { id } = useParams();

    //4
    function onSubmit(ev) {
        ev.preventDefault(); //não execute o comportamento default do form
    
        // const method = id ? 'put' : 'post';
        // const url = id
        //   ? `http://localhost:5000/promotions/${id}`
        //   : 'http://localhost:5000/promotions'
    
        // axios[method](url, values)
        //   .then((response) => {
        //     history.push('/');
        //   });

        axios.post('http://localhost:5000/promotions', values)
          .then((response) => {
            navigate('/');
          });

    }
    
      //3 em mudança...
    //   console.log(values)
      function onChange(ev) {
        const { name, value } = ev.target;
        // console.log({name, value})
                               //[name] = title,  
        setValues({ ...values, [name]: value });
      }
    

    return( //1 //label = id
        <div>
        <h1>Promo Show</h1>
        <h2>Nova Promoção</h2>
        {/* {!values
          ? (
            <div>Carregando...</div>
          ) : ( */}
            <form onSubmit={onSubmit}> {/** 4 colocar o onSubmit*/ }
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="title">Título</label>
                 <input id="title" name="title" type="text"  onChange={onChange}  /> {/*value={values.title} */}
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="url">Link</label>
                <input id="url" name="url" type="text" onChange={onChange} /> {/**value={values.url}  */}
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="imageUrl">Imagem (URL)</label>
                <input id="imageUrl" name="imageUrl" type="text" onChange={onChange}  /> {/**value={values.imageUrl} */}
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="price">Preço</label>
                <input id="price" name="price" type="number" onChange={onChange}  /> {/**value={values.price} */}
              </div>
              <div>
                <button type="submit">Salvar</button>
              </div>
            </form>
          {/* )} */}
      </div>    )
}

export default PromotionForm;