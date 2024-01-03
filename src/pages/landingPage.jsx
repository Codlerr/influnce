import React from 'react'
import Logos from '../components/logos'
import sale from '../assets/sale.png'
import CategoryCard from '../components/categoryCard'
import VideoCard from '../components/videoCard'
import Beach from '../beachWear'
import BeachwearCards from '../components/beachwearCards'
import multi from '../assets/multi.png'
import Colors from '../colors'
import Colors2 from '../colors2'
import Banner from '../components/banner'
import velvet from '../assets/velvet.png';
import tweed from '../assets/tweed.png';
import woven from '../assets/woven.png';
import Embroid  from '../assets/embroid.png';
import Crewel from '../assets/crewel.png';
import Linen from '../assets/linen.png';
import fur from '../assets/fur.png';
import Jacuard from '../assets/jacuard.png';
import Leather from '../assets/leather.png';
import Chenille from '../assets/chenille.png';
import Metallic from '../assets/metallic.png';
import Satin from '../assets/satin.png';
import WhatsHappening from '../components/whatsHappening'
import NewArrivals from '../components/newArrivals'
import { Link } from 'react-router-dom'
import Comments from '../components/comments'
function LandingPage() {
  return (
    <div>
      <div className='px-20'>
      <Banner />
        <p className='text-center mt-8 text-[#0D0D0C] text-xl font-semibold'>Brand’s We’ve helped elevate & grow</p>
        <div>
          <Logos/>
        </div>
        <p className='text-[#0D0D0C] font-extrabold text-4xl text-center my-8'>New Arrivals</p>
      </div>
      <Link to='/products'>
      <NewArrivals/>
      </Link>

      <div className='px-20'>
        <div className='flex mt-16 justify-between'>
          <p className='w-2/4 text-4xl font-semibold'>Exceptional <span className='text-[#005342] font-museo-moderno'>INFLUENCERS</span> for
            exceptional brands.</p>
          <p className='text-2xl font-semibold underline cursor-pointer'>See all </p>
        </div>
        <div>
          <p className='text-[#0D0D0C] w-2/4 text-xl font-medium mt-5'>Influencers boost fashion brands through relatable content,<br></br>
            expanding visibility, trust, and sales with their engaged followers.</p>
        </div>
        <div>
          <VideoCard />
        </div>
      </div>
      <div className='my-20'>
        <img src={sale} alt='' className='w-full' />
      </div>
      <div className='px-20'>
        <p className='text-[#0D0D0C] font-semibold mt-15 text-4xl text-center'>Shop By Category </p>
        <div className='my-16'>
          <CategoryCard />
        </div>
        <div className='flex justify-between'>
          <p className='w-2/4 text-4xl font-semibold'>Beach wear collection from KARI</p>
          <p className='text-2xl font-semibold underline cursor-pointer'>See all</p>
        </div>
        <div className='flex'>
          {Beach.map((item, index) => (
            <BeachwearCards
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className='px-20'>
        <div className='mt-24'>
          <p className='text-[#0D0D0C] text-4xl font-bold text-center'>Color is a fabulous place to start</p>
          <p className='text-center text-xl mt-3 font-semibold'>Influencers boost fashion brands through relatable content</p>
        </div>
        <div className='flex justify-around mx-16 mt-20'>
        {Colors.map((item) => (
          <div>
            <div className={`p-5 border rounded-full w-20 h-20`} style={{ backgroundColor: item.color }}></div>
            <p className='text-[#0D0D0C] text-center font-semibold mt-3 text-lg'>{item.name}</p>
          </div>
        ))}
        </div>

        <div className='flex justify-around mx-16 mt-20'>
          <div>
            <div className='p-5 bg-white border border-[#000000] rounded-full w-20 h-20'></div>
            <p className='text-[#0D0D0C] text-center font-semibold mt-3 text-lg'>white</p>
          </div>
          {Colors2.map((item) => (
            <div>
              <div className={`p-5 border rounded-full w-20 h-20`} style={{ backgroundColor: item.color }}></div>
              <p className='text-[#0D0D0C] text-center font-semibold mt-3 text-lg'>{item.name}</p>
            </div>
          ))}
          <div>
            <div className='p-5 bg-black border rounded-full w-20 h-20'></div>
            <p className='text-[#0D0D0C] text-center font-semibold mt-3 text-lg'>Black</p>
          </div>
          <div>
            <img src={multi} alt='' className='w-20 h-20' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Multi</p>
          </div>
        </div>
      </div>


      <div className='px-20'>
        <div className='mt-24'>
          <p className='text-[#0D0D0C] text-4xl font-bold text-center'>All authentic, choose by fabric</p>
          <p className='text-center text-xl mt-3 font-semibold'>Influencers boost fashion brands through relatable content</p>
        </div>
        <div className='flex justify-around mx-16 mt-20'>
          <div>
            <img src={velvet} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Velvet</p>
          </div>
          <div>
            <img src={tweed} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Tweed</p>
          </div>
          <div>
            <img src={woven} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Woven</p>
          </div>
          <div>
            <img src={Embroid} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Embroid</p>
          </div>
         
          <div>
            <img src={Crewel} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Crewel</p>
          </div>
          <div>
            <img src={Linen} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Linen</p>
          </div>
        </div>

        <div className='flex justify-around mx-16 mt-20'>
          <div>
            <img src={fur} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Fur</p>
          </div>
          <div>
            <img src={Jacuard} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Jacuard</p>
          </div>
          <div>
            <img src={Leather} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Leather</p>
          </div>
          <div>
            <img src={Chenille} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Chenille</p>
          </div>
          <div>
            <img src={Metallic} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Metallic</p>
          </div>
          <div>
            <img src={Satin} alt='' className='w-20 h-20 rounded-full' />
            <p className='text-[#0D0D0C] text-center mt-3 text-lg font-semibold'>Satin</p>
          </div>
        </div>
        </div>
        <div className='px-20'>
        <WhatsHappening />
      </div>
    </div>
  )
}

export default LandingPage
