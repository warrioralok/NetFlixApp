import  NetFlix, { Footer,Header }  from "./components/NetFlix"
//import { EventHandling } from "./components/EventHandling"
//import { EventProps } from "./components/EventProps"
//import {EventPropagation} from './components/EventPropagation'
export default function App(){
  return (
    <>
    {/* <EventHandling/> */}
    <Header/>
    <div className="parent">
    <NetFlix/>
    </div>
    <div style={{clear:'both'}}>
      <Footer/>
    </div>
    {/* <EventPropagation/> */}
    {/* <EventProps/> */}
    </>
  )
}