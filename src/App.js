import { useEffect } from 'react';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import Footer from 'components/modals/footer/Footer';
import 'components/scripts/loadOnTop'
import 'scss/index.scss'

function App() {
  useEffect(() => {
      const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.9,
        };
      
        function animLoad(entry) {
          entry.forEach((change) => {
            if (change.isIntersecting) {
              change.target.classList.add("active");
            }
          });
        }
      
        const anim = document.body.querySelectorAll(".lazy-anim");
        const observer = new IntersectionObserver(animLoad, options);
      
        anim.forEach((e) => {
          observer.observe(e);
        });
  })

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
