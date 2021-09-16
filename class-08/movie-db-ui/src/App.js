import './App.css';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/context';
import { Routes } from './components/routes';

function App() {
  return (
    <section className='grid-container'>
      <Header />
      <main>
        <AuthProvider>
          <Router>
            <Routes />
          </Router>
        </AuthProvider>
      </main>
      <Footer />
    </section>
  );
}

export default App;
