import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { FaWhatsapp } from 'react-icons/fa';


export default function Hero() {

    return(
      <main className='main'>
        <section className='sec1 '>
          <h6 className='mobile heromsgs border-bottom'>TOUCHSTONE FASHION</h6>
          <img src="images/LP.jpg" alt=""  className='heroImg'/>
          
          <img src="images/prev.png" alt="" className='mobile heropic' />
          {/* <img src="images/rm.png" alt="" className='tablet-desktop heropic1' /> */}
          {/* <img src="images/men.png" alt="" className='desktop heropic2' /> */}
          {/* <img src="images/rm.png" alt="" className='mobile heropic1' /> */}
          <div className='heromsg mt-3 tagline'>
            <h2><span className='mobile'>Welcome to </span>Touchstone fashion Empire</h2>
            <p style={{fontWeight:'normal'}} className=''>
            We specialize on Fashion and designs, 
            Sales of unisex wears, supplies of fabrics and fashion 
            accessories, training and general merchandise.</p>
          </div>
          <h6 className='contact border rounded'>Contact Us</h6>
        </section>
        <section className='tablet-desktop'>
            <div className='service'>
            <h2 className='heromsg pb-3 mt-5'>Our Services</h2>
              <div className='servimg'>
                <figure className='frame1 '>
                  <img src="images/fashion1.jpg" alt="" className='cdimg' />
                  <figcaption className='pic-text'>Fashion Design</figcaption>
                </figure>
                <figure className='frame1 '>
                  <img src="images/uni.jpg" alt="" className='cdimg'/>
                  <figcaption className='pic-text'>Unisex wears</figcaption>
                </figure>
                <figure className='frame1 '>
                  <img src="images/fabric1.jpg" alt="" className='cdimg'/>
                  <figcaption className='pic-text'> Fabric sells</figcaption>
                </figure>
                <figure className='frame1 '>
                < img src="images/download1.jpg" alt="" className='cdimg'/>
                  <figcaption className='pic-text'>Accessories</figcaption>
                </figure>
                <figure className='frame1 '>
                  <img src="images/large.webp" alt="" className='cdimg'/>
                  <figcaption className='pic-text'>Training</figcaption>
                </figure>  
              </div>
              
            </div>
        </section>

        <section className='sec2 border-top mx-1  my-5 pb-5 mobile'> 
          <h2 className='buy mt-4'>Need Our Products/Services?</h2>
          <p className='' style={{textAlign:'center'}}>Call/Chat Us Today </p>
          <h1 className='phoneNum border rounded'> <FaWhatsapp/> 07068162269</h1>         
        </section>

        <section className='sec3 mx-2 mobile'>
        <h3 className='heromsg border mx-5' style={{textAlign:'center'}} >View Our Showcase</h3>   
          <figure className="frame">
            <img src="images/men.jpg" alt="" /> 

            <figcaption className="pic-text">Men Outfits</figcaption>
          </figure>

          <figure className="frame">
            <img src="images/women3.jpg" alt=""  /> 
            <figcaption className="pic-text">Women Outfits</figcaption>
          </figure>

          <figure className="frame">
            <img src="images/child.jpg" alt=""  /> 
 
            <figcaption className="pic-text">Children Outfits</figcaption>
          </figure>
          <figure className="frame">
            <img src="images/couple1.jpg" alt=""  /> 

            <figcaption className="pic-text">Others</figcaption>
          </figure>
        </section>

        <section className='showcaseContainer tablet-desktop'>
        {/* <h1 className="page_title">View Showcase</h1> */}
        <div className='gen-flex border-right border-bottom'>
          <div >
            <div className="row">
              <div className="showcase">
                <div className="test_box box-01 col-xs-6 col-md-4">
                  <div className="inner">
                    <a href="#" class="test_click">
                      <div className="flex_this">
                        <h1 className="test_title">Men </h1>
                        <span className="test_link">View</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="test_box box-02 col-xs-6 col-md-4">
                  <div className="inner">
                    <a href="#" className="test_click">
                      <div className="flex_this">
                        <h1 className="test_title">Women </h1>
                        <span className="test_link">View</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="test_box box-03 col-xs-6 col-md-4">
                  <div className="inner">
                    <a href="#" className="test_click">
                      <div className="flex_this">
                        <h1 className="test_title">Children </h1>
                        <span className="test_link">View</span>
                      </div>
                    </a>
                  </div>
                </div>             
              </div>             
            </div>
            <div className="row">
              <div className='showcase show1'>
                <div className="test_box box-04 col-xs-6 col-md-4">
                  <div className="inner">
                    <a href="#" className="test_click">
                      <div className="flex_this">
                        <h1 className="test_title">Couples </h1>
                        <span className="test_link">View</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="test_box box-05 col-xs-6 col-md-4">
                  <div className="inner">
                    <a href="#" className="test_click">
                      <div className="flex_this">
                        <h1 className="test_title">Coperate </h1>
                        <span className="test_link">View</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="test_box box-06 col-xs-6 col-md-4">
                  <div className="inner">
                    <a href="#" className="test_click">
                      <div className="flex_this">
                        <h1 className="test_title">Native </h1>
                        <span className="test_link">View</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='show'>
            <h6><span> CLIENTS' PHOTOS </span></h6>
            <h3>VIEW OUR SHOWCASE</h3>
            <p>Don't be into trends. Don't make fashion own you, <br />
              but you decide what you are, what you want 
              to express<br /> by the way you dress and the way to live. View our showcase.</p>
            <p>Chinyere Amadi <br />CEO Touch Stone Empire</p>
            
          </div>
          </div>
        </section>

        <section className='sec4 mx-2 '>
          <div className='mx-3 aboutleft'>
            <h1 className='heromsg pt-5' style={{textShadow:'none'}}>About Us</h1>
            <hr className='mx-5'/>
            <h5 className='aboutH5 mobile'>Mission:</h5>
            <p className='aboutP'>To exceed customers expectations by prompt and 
              unchallangable quality deliveries of our wears,
              unquestionable integrity and customer relationship management.</p>
              <span className="test_link border tablet-desktop" style={{marginLeft:'15em'}}>Read more</span>

            <p className='aboutP mobile'>To maintain a leading brand in the fashion industry through, commitment, research,
              innovation and insight into customers needs.
            </p>

            <p className='aboutP mobile'>To empower and transform lives through our skills and acquisition arm.</p>
            <hr className='mx-5  mobile'/>

            <h5 className='aboutH5 mobile'>Vision:</h5>
            <p className='aboutP mobile'>To become a global leading fashion brand that immortalizes integrity and Excellence.</p>
            <hr className='mx-5 mobile'/>

            <h5 className='aboutH5 mobile'>Motto:</h5>
            <span className='d-flex mobile justify-content-between' ><p className='aboutP pb-5 mobile'>Excellence at a glance</p>
              <p style={{backgroundColor:'#CC9933', fontWeight:'bold', fontFamily:"'Roboto Slab', serif", marginBottom: '4em'}} className='border rounded py-1 px-2 mobile'>Contact Us</p>
            </span>
            
          </div>
          
          <div className='aboutright tablet-desktop'>
            <img src="images/0005.jpg" alt="" style={{width:'38%'}}/>
          </div>
        
        </section>


      </main>
    );
   }

 