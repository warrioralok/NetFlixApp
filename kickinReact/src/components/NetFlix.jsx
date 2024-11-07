const NetFlix = () =>{
  let name = 'DareDevil';
  let rating = '8.2';
  let desc = 'Daredevil is the Man Without Fear! Blinded as a youngster by radioactive chemicals, Matt Murdock soon found that his other senses had been heightened to extraordinary levels.';
  let age = 18;
  return(
  <>
      <div className="container">
        <img src="img/poster.jpg" alt="img/poster.jpg" height="30%" width="40%"/>
        <div>
          <h3>Name: {name}</h3>
          <h4>Rating : {rating}</h4>
          <p>{desc}</p>
          <p>Category : { age >= 18 ? 'A' : 'U'}</p>
          { age >= 18  && <div className="watchButton">Watch Now</div> }
        </div>
    </div>
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
        <header>Logo</header>
    )
}
export default NetFlix;