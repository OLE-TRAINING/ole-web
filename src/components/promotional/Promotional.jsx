import React from 'react'
import Truncate from 'react-truncate';

import './promotional.css'

export default props =>   
  <div className="promo-content">
    <img className="promo-img" src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="terra"  width="1000" height="300"/>
    <div className="promo-img-info">
      <div className="promo-title-like">
        <div className="promo-title-content">
          <span className="promo-title">Fúria de Titãs 2</span>
          <span className="promo-infos">Fantasy, Animation, Family | Duração: 1h 52m | 2017</span>
          <div className="promo-synopsis">
            <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
              Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
            </Truncate>
          </div>
        </div>
        <div className="promo-like">
          <i className="fa fa-heart outline-white fa-3x"></i>
        </div>
      </div>
      <div className="promo-price-rating">
        <div className="promo-price">
          R$ 16,99
        </div>
        <div className="promo-rating">
          <div className="rating-1">
            <span className="promo-score">Nota</span>
            <span className="promo-info"> baseada em 3.546 avaliações</span>
          </div>
          <div className="rating-1">
            <div>
              <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
              <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
              <i className="fa fa-star fa-2x star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o fa-2x star" aria-hidden="true"></i>
              <i className="fa fa-star-o fa-2x star" aria-hidden="true"></i>
            </div>
            <span className="promo-score2">6.8</span>
          </div>
        </div>
      </div>
    </div>
  </div> 