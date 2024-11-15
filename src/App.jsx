import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interest from "./components/Interest"
function App() {
  return (
    <div className="container">
      <div className="box">
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
