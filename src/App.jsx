
import './App.css'
import Countries from './Component/Countries/Countries'


// Api
// https://openapi.programming-hero.com/api/all
// https://openapi.programming-hero.com/api/alpha/116
// https://openapi.programming-hero.com/api/lang/english
// https://openapi.programming-hero.com/api/name/bangladesh
//---------------------------------------------------------------------


function App() {

  return (
    <>

      <h1 className='heading' >World on the go...</h1>
      <div>
         <Countries></Countries>
      </div>
     
      
    </>
  )
}

export default App
