import './App.css';
import { FaUserPen } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";

function App() {
  function clickBtnSideBar(event: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex h-screen justify-center items-center" style={{ backgroundImage: 'url("./resume_bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className="home-tab-nav" style={{height: '86vh', width: '53px', backgroundColor: 'rgb(31 31 31)' }}>
        <button id='btnPersonal' className='btnIcon' 
          onClick={clickBtnSideBar}><FaUserPen className='iconButton' />
        </button>
        <button id='btnEducation' className='btnIcon' 
          onClick={clickBtnSideBar}><PiStudentFill className='iconButton'/>
        </button>
        <button id='btnLocation' className='btnIcon' 
          onClick={clickBtnSideBar}><IoLocationSharp className='iconButton'/>
        </button>
        <button id='btnProfXp' className='btnIcon'
          onClick={clickBtnSideBar}><MdWorkHistory className='iconButton'/>
        </button>
      </div>
    </div>
  );
}

export default App;
