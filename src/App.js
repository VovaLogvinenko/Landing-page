import Header from 'components/header/Header';
import Main from 'components/main/Main';
import Footer from 'components/modals/footer/Footer';
import 'components/scripts/animation-script'
import 'components/scripts/loadOnTop'
import 'scss/index.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
