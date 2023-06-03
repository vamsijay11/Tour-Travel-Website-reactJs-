import React,{useEffect} from 'react';
import './main.css'
import img from '../../Assets/img.jpg';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {id:1,
        imgsrc:img,
        destTitle:'Bora Bora',
        location :'New Zealand',
        grade:'CULTURAL RELAX',
        fees : '$700',
        description :'the epitope of romance , Bora bora is one of the best ravel destination in the world.this place is known for its luxurious stays and adventurous activities'

    },
    {id:2,
        imgsrc:img1,
        destTitle:'machu pichu',
        location :'Australia',
        grade:'CULTURAL RELAX',
        fees : '$600',
        description :'the epitope of romance , Bora bora is one of the best ravel destination in the world.this place is known for its luxurious stays and adventurous activities'

    },
    {id:3,
        imgsrc:img2,
        destTitle:'lovers',
        location :'armenia',
        grade:'CULTURAL RELAX',
        fees : '$500',
        description :'the epitope of romance , Bora bora is one of the best ravel destination in the world.this place is known for its luxurious stays and adventurous activities'

    }
    ,
    {id:4,
        imgsrc:img3,
        destTitle:'lovers',
        location :'armenia',
        grade:'CULTURAL RELAX',
        fees : '$500',
        description :'the epitope of romance , Bora bora is one of the best ravel destination in the world.this place is known for its luxurious stays and adventurous activities'

    },
    {id:5,
        imgsrc:img4,
        destTitle:'lovers',
        location :'armenia',
        grade:'CULTURAL RELAX',
        fees : '$500',
        description :'the epitope of romance , Bora bora is one of the best ravel destination in the world.this place is known for its luxurious stays and adventurous activities'

    }
    ,
    {id:6,
        imgsrc:img5,
        destTitle:'lovers',
        location :'armenia',
        grade:'CULTURAL RELAX',
        fees : '$500',
        description :'the epitope of romance , Bora bora is one of the best ravel destination in the world.this place is known for its luxurious stays and adventurous activities'

    },
    {id:7,
        imgsrc:img6,
        destTitle:'lovers',
        location :'armenia',
        grade:'CULTURAL RELAX',
        fees : '$500',
        description :'the epitope of romance , Bora bora is one of the best ravel destination in the world.this place is known for its luxurious stays and adventurous activities'

    }
]

const Main = () =>
{

useEffect(()=>{
    Aos.init({duration:2000})
},[])
    return(
        <section className='main container section'>
            <div className='secTitle'>
                <h3 data-aos='fade-right'className='title'>
                    Most visited destinations
                </h3>
            </div>

            <div className='setContent grid'>
                {
                    Data.map(({id,imgsrc,destTitle,location,grade,fees,description}) => {
                        return(
                            <div key={id} data-aos='fade-up' className='singleDestination'>
                            <div className="imgDiv">
                                <img src={imgsrc} alt={destTitle}/>
                            </div>
                            <div className='cardInfo'>
                                <h4 className='destTitle'>{destTitle}</h4>
                                <span className='continent flex'>
                                <HiOutlineLocationMarker className='icons'/>
                                <span className='name'>{location}</span>
                                </span>

                                <div className='fees flex'>
                                    <div className='grade'>
                                        <span>{grade}<small>+1</small></span>
                                        </div>
                                    <div className='price'>
                                        <h5>{fees}</h5>
                                        </div>
                                </div>
                                <div className='desc'>
                                        <p>{description}</p>
                                        </div>
                                <button className='btn flex'>
                                    DETAILS<HiOutlineClipboardCheck className='icon'/>
                                </button>

                                

                                    

                            </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>



    )
}

export default Main;
