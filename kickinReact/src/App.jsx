import  NetFlix, { Footer,Header }  from "./components/NetFlix"
//import { EventHandling } from "./components/EventHandling"
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
    </>
  )
}