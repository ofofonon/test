import * as React from 'react';
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from "./components/Footer";
import Testimonials from './components/Testimonial';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from "react-icons/cg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './server'
import Portfolio from './components/Portfolio';



 const App = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Navbar className='fixedNav'/>
      <MainContent/>
      <div className='test mb-0'>
      <h1 className='heromsg pt-3 test'>Testimonial</h1>
      
      <Carousel responsive={responsive}  className='pb-5'>
        <div><CgProfile className='profile ' style={{clear:'left'}}/>
          <p className='aboutP mt-3 mx-5'>"My experience with Touchstone empire is an unforgatable one.
                Through unmatchable design i found my husband"
          </p>
        </div>

        <div><CgProfile className='profile' />
          <p className='aboutP mt-3 mx-5'>"My experience with Touchstone empire is an unforgatable one.
                Through unmatchable design i found my husband"
          </p>
        </div>

        <div><CgProfile className='profile' />
          <p className='aboutP mt-3 '>"My experience with Touchstone empire is an unforgatable one.
                Through unmatchable design i found my husband"
          </p>
        </div>

        <div><CgProfile className='profile' />
          <p className='aboutP mt-3 '>"My experience with Touchstone empire is an unforgatable one.
                Through unmatchable design i found my husband"
          </p>
        </div>

        <div><CgProfile className='profile' />
          <p className='aboutP mt-3 '>"My experience with Touchstone empire is an unforgatable one.
                Through unmatchable design i found my husband"
          </p>
        </div>

        <div><CgProfile className='profile' />
          <p className='aboutP mt-3 '>"My experience with Touchstone empire is an unforgatable one.
                Through unmatchable design i found my husband"
          </p>
        </div>

        <div><CgProfile className='profile' />
          <p className='aboutP mt-3 mx-5'>"My experience with Touchstone empire is an unforgatable one.
                Through unmatchable design i found my husband"
          </p>
        </div>
        
      </Carousel>
      </div>
      <Footer/>
    </div>

        
          
  );  
    
}

export default App;

