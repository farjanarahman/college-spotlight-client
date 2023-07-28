// import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './Header.css'

import img1 from '../../../assets/images/clg1.jpg'
import img2 from '../../../assets/images/clg2.jpg'
import img3 from '../../../assets/images/stdnt1.jpg'
const Header = () => {
    return (
        // <div className="carousel w-full">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img src={img1}className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide4" className="btn btn-circle text-sky-600">❮</a>
        //             <a href="#slide2" className="btn btn-circle text-sky-600">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src={img2}className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle text-sky-600">❮</a>
        //             <a href="#slide3" className="btn btn-circle text-sky-600">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src={img3}className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide3" className="btn btn-circle text-sky-600">❮</a>
        //             <a href="#slide1" className="btn btn-circle text-sky-600">❯</a>
        //         </div>
        //     </div>
        // </div>

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="image-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div>
                        <h2 className="carousel-title font-extrabold text-4xl text-center">Welcome to <br /> <span className=' font-extrabold text-sky-500'>College</span><span className="text-orange-500">Spotlight</span></h2>
                        <p className='mt-5 w-3/5 font-medium text-white text-center'>Your go-to source for unbiased, data-driven insights on colleges and universities, helping you make informed decisions for your educational journey. Explore and discover the perfect fit for your future today.</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle text-sky-600">❮</a>
                    <a href="#slide2" className="btn btn-circle text-sky-600">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="image-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold text-center">Slide 2 Overlay</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle text-sky-600">❮</a>
                    <a href="#slide3" className="btn btn-circle text-sky-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="image-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">

                    <h2 className="text-white text-4xl font-bold text-center">Slide 3 Overlay</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle text-sky-600">❮</a>
                    <a href="#slide1" className="btn btn-circle text-sky-600">❯</a>
                </div>
            </div>
        </div>


    );
};

export default Header;