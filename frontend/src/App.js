// src/App.js
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
