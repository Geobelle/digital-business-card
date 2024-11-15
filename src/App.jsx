import About from "./components/about"
import Footer from "./components/footer"
import Info from "./components/info"
import Interest from "./components/interest"
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
