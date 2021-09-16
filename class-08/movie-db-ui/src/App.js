import './App.css';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/context';
import { Routes } from './components/routes';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from './components/layout/nav';

function App() {
  return (
    <section className='grid-container'>
      <Header />
      <main className="bg-smokey">
        <AuthProvider>
          <Router>
            <NavigationBar />
            <Routes />
          </Router>
        </AuthProvider>
      </main>
      <Footer />
        <ToastContainer />
    </section>
  );
}

export default App;
