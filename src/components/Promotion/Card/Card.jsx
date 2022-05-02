import React from 'react';
import card from './card.module.css';

function PromotionCard({promotion}) {

    return (
      <div className={card.promotionCard}>
       <img className={card.promotionCardImage}  src={promotion.imageUrl} alt={promotion.title}  />
       <div className={card.promotionInfo}>
        <h1 className={card.promotionCardTitle}>{promotion.title}</h1>
        <span className={card.promotionCardPrice}>R$ {promotion.price}</span>
        <footer className={card.promotionCardFooter}>
            <div className={card.promotionCardComment}>
                {promotion.comments.length > 0 && (
                    <div>
                        "{promotion.comments[0].comment}"
                    </div>
                )}
            </div>
            <div className={card.promotionCardCommentsCount}>
                {promotion.comments.length}{' '}
                {promotion.comments.length >1 ? 'Comentários' : 'Comentário'}
            </div>
            <a 
            href={promotion.url} 
            rel="noopener"
            className={card.promotionCardLink}
            >
                IR PARA O SITE
            </a>
        </footer>
       </div>
      </div>
    );
  }
  
export default PromotionCard;