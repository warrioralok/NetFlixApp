// import PropTypes from 'prop-types';
import styless from './SeriesCard.module.css';

export const SeriesCard = ({index}) =>{

   const {name, imageUrl,rating, description,cast,genre, watchUrl} = index;
   
    return(
        <div className="container" key={name}>
        <img src={imageUrl} alt="img/poster.jpg" height="30%" width="40%"/>
        <div>
          <h3>Name: {name}</h3>
          <h4 className='my-2'>Rating : <span className={`${styless.rating} ${rating >= 8.5 ? styless.superhit : styless.average}`}>{rating}</span></h4>
          <p className='des my-3'>{description}</p>
          <p>Cast: {cast.map((cast)=>{
            return cast
          }).join(', ')}</p>
          <p>Category : {genre.map((index) => {
            return index;
          }).join(',')}</p>
          {/* { age >= 18  && <div className="watchButton">Watch Now</div> } */}
          <a href={watchUrl} target='_blank'><div className="watchButton">Watch Now</div></a>
        </div>
    </div>
    )
}

//Define prop types for validation
// SeriesCard.propTypes = {
//     index: PropTypes.shape({
//       imageUrl: PropTypes.string,
//       name: PropTypes.string,
//       rating: PropTypes.string,
//       description: PropTypes.string,
//       cast: PropTypes.string,
//       genre: PropTypes.string,
//       watchUrl: PropTypes.string,
//     }).isRequired,
//   };