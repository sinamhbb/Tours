import React, {useState} from 'react';

function Tour({name,id,info,image,price,removeTour}){
    const [readMore, setReadMore] = useState(false);
return (
<article className="single-tour">
    <img src={image} alt={id} />
    <footer>
        <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>            
        </div>
        <div>
         <p>{
              readMore ? info : `${info.substring(0,200)}...`
              
         }
         <button onClick={() => {setReadMore(!readMore)}}>{readMore ? "Show Less'" : "Show More"}</button>
         </p>
         <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    </footer>
    
    
</article>)
}

export default Tour;