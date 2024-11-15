import './index.css';
import StanfordLogo from './Images/stanford.png';
import LseLogo from './Images/lse.png';
import KingsLogo from './Images/kings.png';
import SharanTestimonial from './Images/sharan.jpg';
import DorothyTestimonial from './Images/dorothy.jpg';
import ProgramOverviewImage from './Images/DSC01598.jpg'
import PrizeImage from './Images/DSC01766.jpg'
import WhoImage1 from './Images/DSC01764.jpg'
import WhoImage2 from './Images/DSC01558.jpg'
import ExpectImage from './Images/DSC01714.jpg'
import Reese from './Images/reese.jpg'
import Remus from './Images/remus.jpg'
import Sally from './Images/sally.jpg'
import Jyim from './Images/Jyim.jpg'
import Brian from './Images/brian.jpg'
import Stanley from './Images/stanley.jpg'

function App() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 px-5 py-10">
        <div className="col-span-4 lg:col-start-2 lg:col-end-4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col gap-5">
              <p className="text-center text-lg lg:text-2xl font-spaceGrotesk font-semibold">
                Experience Silicon Valley in London
              </p>
            <h1 className="text-4xl lg:text-6xl font-medium text-center font-spaceGrotesk"><span className=" text-secondary">ASES</span> x <span className="text-primary">London</span></h1>
            <h1 className="text-4xl lg:text-6xl font-medium text-center font-spaceGrotesk">Startup Bootcamp</h1>

            <p className="text-center text-lg lg:text-2xl font-spaceGrotesk font-medium">Join our 10 week course to get you started on your startup journey and a chance to go to Stanford expenses paid!</p>
            </div>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-4 rounded-md font-bold text-lg lg:text-2xl">Apply Now</a>
            <div className="flex flex-col">
              <p className="text-center font-roboto lg:text-lg font-medium p-5">
                In collaboration with
              </p>
              <div className="flex flex-row justify-center items-center gap-5">
                <img src={StanfordLogo} alt="Stanford Logo" className="w-20 h-20 lg:w-32 lg:h-32" />
                <img src={KingsLogo} alt="Kings Logo" className="w-20 h-20 lg:w-32 lg:h-32" />
                <img src={LseLogo} alt="LSE Logo" className="w-20 h-20 lg:w-32 lg:h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-5 py-10 bg-secondary">
        <div className="col-span-4 lg:col-start-2 lg:col-end-4 flex flex-col justify-center gap-5 items-center">
          <div className="flex flex-col gap-5 py-5">
            <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk text-white">Programme Overview</h1>
            <p className="text-white font-roboto lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className="lg:p-5 flex justify-center items-center">
            <img src={ProgramOverviewImage} alt="Program Overview" className="w-full lg:w-3/4 rounded-lg drop-shadow-lg" />
          </div>
          <div className="flex flex-col gap-5 py-5">
            <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk text-white">Prize</h1>
            <p className="text-white font-roboto lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className="lg:p-5 flex justify-center items-center">
            <img src={PrizeImage} alt="Prize" className="w-full lg:w-3/4 rounded-lg drop-shadow-lg" />
          </div>
          <div className="flex flex-col gap-5 py-5">
            <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk text-white">Who are we looking for?</h1>
            <p className="text-white font-roboto lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className="flex flex-row gap-5 pb-5">
            <img src={WhoImage1} alt="Who 1" className="w-full lg:w-1/2 rounded-lg drop-shadow-lg" />
            <img src={WhoImage2} alt="Who 2" className="w-full hidden lg:block lg:w-1/2 rounded-lg drop-shadow-lg" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-5 py-10 bg-white">
        <div className="col-span-4 lg:col-start-2 lg:col-end-4 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk text-black">What to expect</h1>
            <p className="text-black font-roboto lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <div className="flex justify-center items-center py-10">
              <img src={ExpectImage} alt="Expect" className="w-full lg:w-3/4 rounded-lg drop-shadow-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk text-black">Dates</h1>
            <p className="text-black font-roboto lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk text-black">Costs</h1>
            <p className="text-black font-roboto lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-4 rounded-md font-bold text-lg lg:text-2xl">Apply Now</a>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-5 py-10 bg-primary">
        <div className="col-span-4 lg:col-start-2 lg:col-end-4 flex flex-col justify-center items-center gap-5 py-5">
          <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk text-white pb-5">Testimonials</h1>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2 items-center ">
              <a href="https://www.linkedin.com/in/dorothy-yuan/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={DorothyTestimonial} alt="Testimonial 1" className="rounded-full w-1/2" />
              </a>
              <div className="flex flex-col px-10 items-center">
                <p className="text-white font-roboto py-5 font-medium lg:text-lg">"At the ASES Summit, I had the chance to learn directly from CEOs and venture capitalists of industry-leading companies like Tesla and Zynga. The experience of connecting with top-tier talent, many of whom have become close friends, left me feeling more inspired, supported, and empowered than ever before."</p>
                <p className="text-white font-roboto lg:text-lg">Dorothy Yuan</p>
                <p className="text-white font-roboto lg:text-lg">University of York, Stanford University</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center ">
              <a href="https://www.linkedin.com/in/sharan-mansukhani-17306a234/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={SharanTestimonial} alt="Testimonial 1" className="rounded-full w-1/2" />
              </a>
              <div className="flex flex-col px-10 items-center">
                <p className="text-white font-roboto py-5 font-medium lg:text-lg">"The ASES Summit was transformative for me. Being exposed to another startup ecosystem and hearing from the top players in the space felt like a year’s worth of learnings compounded in a single week. To top it off, the people at the summit are curated to give you unique perspectives on different ecosystems globally and have a great vibe overall."</p>
                <p className="text-white font-roboto lg:text-lg">Sharan Mansukhani</p>
                <p className="text-white font-roboto lg:text-lg">De La Salle University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-5 py-10 bg-secondary">
        <div className="col-span-4 lg:col-start-2 lg:col-end-4 flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk py-5 text-white">Our Network Partners</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10">
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/brian-donohugh/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={Brian} alt="Brian" className="rounded-full w-1/2" />
              </a>
              <p className="text-white font-roboto lg:text-lg pt-5">Brian Donohugh</p>
              <p className="text-white font-roboto text-center lg:text-lg lg:px-10 px-5">Co-President @ Stanford ASES 24/25</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/j-jw-yim/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={Jyim} alt="Jyim" className="rounded-full w-1/2" />
              </a>
              <p className="text-white font-roboto lg:text-lg pt-5">J Yim</p>
              <p className="text-white font-roboto text-center lg:text-lg lg:px-10 px-5">Co-President @ Stanford ASES 24/25</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/remuspn/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={Remus} alt="Remus" className="rounded-full w-1/2" />
              </a>
              <p className="text-white font-roboto lg:text-lg pt-5">Remus Poon</p>
              <p className="text-white font-roboto text-center lg:text-lg lg:px-10 px-5">Co-Director @ ASES London</p>
              <p className="text-white font-roboto text-center lg:text-lg lg:px-10 px-5 ">Founder @ Calmi</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/reesewong1/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={Reese} alt="Reese" className="rounded-full w-1/2" />
              </a>
              <p className="text-white font-roboto lg:text-lg pt-5">Reese Wong</p>
              <p className="text-white font-roboto text-center lg:text-lg lg:px-10 px-5">Chairman of LSE Entrepreneurs</p>
              <p className="text-white font-roboto text-center lg:text-lg lg:px-10 px-5">Co-Director @ ASES London</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/sallylo079/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={Sally} alt="Sally" className="rounded-full w-1/2" />
              </a>
              <p className="text-white font-roboto lg:text-lg pt-5">Sally Lo</p>
              <p className="text-white font-roboto text-center lg:text-lg px-5 lg:px-10">Co-President @ Kings Entrepreneurs</p>
              <p className="text-white font-roboto text-center lg:text-lg px-5 lg:px-10">Co-Founder @EduCrate</p>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/stanleytanudjaja/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={Stanley} alt="Stanley" className="rounded-full w-1/2" />
              </a>
              <p className="text-white font-roboto lg:text-lg pt-5">Stanley Tanudjaja</p>
              <p className="text-white font-roboto text-center lg:text-lg px-5 lg:px-10">Founder @ Giants Collective</p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 px-5 py-10 bg-white">
        <div className="col-span-4 lg:col-start-2 lg:col-end-4 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-4xl font-semibold font-spaceGrotesk py-5">Contact</h1>
            <p className="text-black font-roboto lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
