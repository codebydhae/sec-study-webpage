import './mainmenu.css';

function MainMenu() {
  return (
    <div className="main-menu">
      <button className="main-button" onClick="">
        <p>STUDY GUIDE</p>
      </button>
      <button className="main-button" onClick="">
      <p>FLASH CARDS</p>
      </button>
      <button className="main-button" onClick="">
      <p>OFFICIAL DOCS</p>
      </button>
      <button className="main-button" onClick="">
      <p>ABOUT</p>
      </button>
    </div>
  );
}

export default MainMenu;