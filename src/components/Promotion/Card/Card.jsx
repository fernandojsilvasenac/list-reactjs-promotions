import React from 'react';
import card from './Card.module.css'

const PromotionCard = ({ promotion }) => (

  <div className={card.promotionCard} >
    <img
      src={promotion.imageUrl}
      alt={promotion.title}
      className={card.promotionCardImage}
    />
    <div className={card.promotionCardInfo}>
      <h1 className={card.promotionCardTitle}>{promotion.title}</h1>
      <span className={card.promotionCardPrice}>R$ {promotion.price}</span>
      <footer className={card.promotionCardFooter}>
        {promotion.comments.length > 0 && (
          <div className={card.promotionCardComment}>
            "{promotion.comments[0].comment}"
          </div>
        )}
        <div className={card.promotionCardCommentsCount}>
          {promotion.comments.length}{' '}
          {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
        </div>
        <a
          href={promotion.url}
          target="_blank"
          rel="noopener noreferrer"
          className={card.promotionCardLink}
        >
          IR PARA O SITE
        </a>
      </footer>
    </div>
  </div>
);

export default PromotionCard;
