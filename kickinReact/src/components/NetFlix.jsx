import seriesData from '../api/seriesData.json';
import { SeriesCard } from './SeriesCard';

const NetFlix = () =>{
//   let name = 'DareDevil';
//   let rating = '8.2';
//   let desc = 'Daredevil is the Man Without Fear! Blinded as a youngster by radioactive chemicals, Matt Murdock soon found that his other senses had been heightened to extraordinary levels.';
//   let age = 18;
  return(
  <>
  {seriesData.map((index) =>{
      return (
        <SeriesCard key={index.name} index={index}/>
      )
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
        <header>NetFlix</header>
    )
}
export default NetFlix;