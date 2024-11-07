export default function App(){
  return (
    <>
    <div className="parent">
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    <NetFlix/>
    </div>
    </>
  )
}

const NetFlix = () =>{
  let name = 'DareDevil';
  let rating = '8.2';
  let desc = 'Daredevil is the Man Without Fear! Blinded as a youngster by radioactive chemicals, Matt Murdock soon found that his other senses had been heightened to extraordinary levels.';
  let age = 15;
  return(
  <>
      <div className="container">
        <img src="img/poster.jpg" alt="img/poster.jpg" height="30%" width="40%"/>
        <div>
          <h3>Name: {name}</h3>
          <h4>Rating : {rating}</h4>
          <p>{desc}</p>
          <p>Category : { age >= 18 ? 'A' : 'U'}</p>
        </div>
    </div>
  </>
  )
}