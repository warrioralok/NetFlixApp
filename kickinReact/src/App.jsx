import  NetFlix, { Footer,Header }  from "./components/NetFlix"

export default function App(){
  return (
    <>
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