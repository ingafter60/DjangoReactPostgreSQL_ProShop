// src/App.js
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
