import React from 'react'
import Truncate from 'react-truncate';

import './cards.css'

const img = "clapperboard.png"

export default props =>         
  <div className="card-component">
    <div className="card-content">
      <div className="card-img-box">
        <img src="http://br.web.img3.acsta.net/c_215_290/pictures/16/10/05/19/59/363613.jpg" className="card-image" alt="img-film"></img>
        <div className="card-img-info">
          <span className="film-year">2017</span>
          <span className="film-rating"><p>7.3</p></span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="film-title">Logan teste hidden text fsdfdsfdsfsdfsd</span>
            <span className="film-genre">Action, Adventure, Fantasy</span>
            <span className="film-duration">2h 20m</span>
          </div>
          <div className="film-like">
            <i className="fa fa-heart-o fa-2x"></i>
          </div>
        </div>
        <div className="film-synopsis">
          <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
          Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
          </Truncate>
        </div>
        <div className="film-view">
         <img alt="clapper" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
      </div>
    </div>   
    <div className="card-content">
      <div className="card-img-box">
        <img src="http://br.web.img3.acsta.net/c_215_290/pictures/16/10/05/19/59/363613.jpg" className="card-image" alt="img-film"></img>
        <div className="card-img-info">
          <span className="film-year">2017</span>
          <span className="film-rating"><p>7.3</p></span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="film-title">Logan teste hidden text fsdfdsfdsfsdfsd</span>
            <span className="film-genre">Action, Adventure, Fantasy</span>
            <span className="film-duration">2h 20m</span>
          </div>
          <div className="film-like">
            <i className="fa fa-heart fa-2x"></i>
          </div>
        </div>
        <div className="film-synopsis">
          <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
            Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
          </Truncate>
        </div>
        <div className="film-view">
          <span className="film-price">R$ 16,56</span>
        </div>
      </div>
    </div> 
    <div className="card-content">
      <div className="card-img-box">
        <img src="http://br.web.img3.acsta.net/c_215_290/pictures/16/10/05/19/59/363613.jpg" className="card-image" alt="img-film"></img>
        <div className="card-img-info">
          <span className="film-year">2017</span>
          <span className="film-rating"><p>7.3</p></span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="film-title">Logan teste hidden text fsdfdsfdsfsdfsd</span>
            <span className="film-genre">Action, Adventure, Fantasy</span>
            <span className="film-duration">2h 20m</span>
          </div>
          <div className="film-like">
            <i className="fa fa-heart fa-2x"></i>
          </div>
        </div>
        <div className="film-synopsis">
          <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
            Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
          </Truncate>
        </div>
        <div className="film-view">
         <img alt="clapper" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
      </div>
    </div> 
    <div className="card-content">
      <div className="card-img-box">
        <img src="http://br.web.img3.acsta.net/c_215_290/pictures/16/10/05/19/59/363613.jpg" className="card-image" alt="img-film"></img>
        <div className="card-img-info">
          <span className="film-year">2017</span>
          <span className="film-rating"><p>7.3</p></span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="film-title">Logan teste hidden text fsdfdsfdsfsdfsd</span>
            <span className="film-genre">Action, Adventure, Fantasy</span>
            <span className="film-duration">2h 20m</span>
          </div>
          <div className="film-like">
            <i className="fa fa-heart fa-2x"></i>
          </div>
        </div>
        <div className="film-synopsis">
          <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
            Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
          </Truncate>
        </div>
        <div className="film-view">
         <img alt="clapper" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
      </div>
    </div> 
    <div className="card-content">
      <div className="card-img-box">
        <img src="http://br.web.img3.acsta.net/c_215_290/pictures/16/10/05/19/59/363613.jpg" className="card-image" alt="img-film"></img>
        <div className="card-img-info">
          <span className="film-year">2017</span>
          <span className="film-rating"><p>7.3</p></span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="film-title">Logan teste hidden text fsdfdsfdsfsdfsd</span>
            <span className="film-genre">Action, Adventure, Fantasy</span>
            <span className="film-duration">2h 20m</span>
          </div>
          <div className="film-like">
            <i className="fa fa-heart fa-2x"></i>
          </div>
        </div>
        <div className="film-synopsis">
          <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
            Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
          </Truncate>
        </div>
        <div className="film-view">
         <img alt="clapper" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
      </div>
    </div> 
    <div className="card-content">
      <div className="card-img-box">
        <img src="http://br.web.img3.acsta.net/c_215_290/pictures/16/10/05/19/59/363613.jpg" className="card-image" alt="img-film"></img>
        <div className="card-img-info">
          <span className="film-year">2017</span>
          <span className="film-rating"><p>7.3</p></span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="film-title">Logan teste hidden text fsdfdsfdsfsdfsd</span>
            <span className="film-genre">Action, Adventure, Fantasy</span>
            <span className="film-duration">2h 20m</span>
          </div>
          <div className="film-like">
            <i className="fa fa-heart fa-2x"></i>
          </div>
        </div>
        <div className="film-synopsis">
          <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
            Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
          </Truncate>
        </div>
        <div className="film-view">
         <img alt="clapper" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
      </div>
    </div> 
    <div className="card-content">
      <div className="card-img-box">
        <img src="http://br.web.img3.acsta.net/c_215_290/pictures/16/10/05/19/59/363613.jpg" className="card-image" alt="img-film"></img>
        <div className="card-img-info">
          <span className="film-year">2017</span>
          <span className="film-rating"><p>7.3</p></span>
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className="card-header-title">
            <span className="film-title">Logan teste hidden text fsdfdsfdsfsdfsd</span>
            <span className="film-genre">Action, Adventure, Fantasy</span>
            <span className="film-duration">2h 20m</span>
          </div>
          <div className="film-like">
            <i className="fa fa-heart fa-2x"></i>
          </div>
        </div>
        <div className="film-synopsis">
          <Truncate lines={4} trimWhitespace ellipsis={<span>...</span>}>
            Andy (Martin Freeman) corre contra o tempo para salvar sua filha. Infectado por um vírus de uma pandemia zumbi, ele tem apenas 48 horas para encontrar um lugar seguro a fim de proteger a criança. A salvação que o pai procura pode estar em um tribo aborígene isolada, mas para ter acesso ao grupo, ele terá que ajudar uma jovem indígena em uma missão perigosa. 
          </Truncate>
        </div>
        <div className="film-view">
         <img alt="clapper" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iZHJpdmUtdmlkZW8iPgoJCTxwYXRoIGQ9Ik00MDgsNTFsNTEsMTAyaC03Ni41bC01MS0xMDJoLTUxbDUxLDEwMkgyNTVMMjA0LDUxaC01MWw1MSwxMDJoLTc2LjVsLTUxLTEwMkg1MUMyMi45NSw1MSwwLDczLjk1LDAsMTAydjMwNiAgICBjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWg0MDhjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MUg0MDh6IiBmaWxsPSIjMTI5NzkzIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
        </div>
      </div>
    </div> 
  </div>  