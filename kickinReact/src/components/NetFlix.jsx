import seriesData from '../api/seriesData.json';

const NetFlix = () =>{
//   let name = 'DareDevil';
//   let rating = '8.2';
//   let desc = 'Daredevil is the Man Without Fear! Blinded as a youngster by radioactive chemicals, Matt Murdock soon found that his other senses had been heightened to extraordinary levels.';
//   let age = 18;
  return(
  <>
  {seriesData.map((index) =>{
      return <div className="container" key={index.name}>
        <img src={index.imageUrl} alt="img/poster.jpg" height="30%" width="40%"/>
        <div>
          <h3>Name: {index.name}</h3>
          <h4>Rating : {index.rating}</h4>
          <p className='des'>{index.description}</p>
          <p>Cast: {index.cast}</p>
          <p>Category : {index.genre}</p>
          {/* { age >= 18  && <div className="watchButton">Watch Now</div> } */}
          <a href={index.watchUrl} target='_blank'><div className="watchButton">Watch Now</div></a>
        </div>
    </div>
    })}
  </>
  )
}

export const Footer = () => {
    return(
        <p className="footer">copyright @AlokSingh 2024</p>
    ) 
}

export const Header = () =>{
    return(
        <header><img src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" alt="" /></header>
    )
}
export default NetFlix;