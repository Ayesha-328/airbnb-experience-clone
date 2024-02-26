import React from 'react'

function Card(props) {
  let tagText;
  if (props.data.openSpots===0){
    tagText="sold out";
  }
  else if(props.data.location==="Online"){
    tagText="online";
  }


  return (
    <div className="card-container">
        <img src={props.data.coverImg} alt="card" className="card-image"/>
        <svg id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" display= "block" fill= "rgba(0, 0, 0, 0.5)" height= "24px" width=" 24px" stroke= "#ffffff" stroke-width= "2" overflow= "visible"><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>

        {/* !props.status means props.status === 0 ===false ! of it will gives us true  */}
        {/* {!props.status && <span className="tag">Sold out</span>}  */}
        {tagText && <span className="tag">{tagText}</span>} 
        <svg width="20" height="15" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#FE395C"/>
</svg>
<span className="rating">{props.data.stats.rating}</span>
<span className="details">({props.data.stats.reviewCount}) . {props.data.location}</span>
<p className="desc">{props.data.title}
</p>
<p className="price">From ${props.data.price} <span className="person"> / person</span></p>


    </div>
  )
}

export default Card