import React, { useEffect, useState, useRef } from 'react';
import './Animation.css';

const fieldWidth = 700;
const fieldHeight = 500;
const ballDiameter = 120;

const maxLeft = fieldWidth - ballDiameter - 6;
const maxTop = fieldHeight - ballDiameter - 6;

const vx = 5;
const vy = 5;
const rotateSpeed = 20;

function Animation() {
    const [top_, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [rotateDirection, setRotateDirection] = useState(1);
  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [currentBall, setCurrentBall] = useState(null);
  
  const ballRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(calculate, 25);
    return () => {
      clearInterval(interval);
    };
  }, [running, top_, left, rotationAngle, rotateDirection, goRight, goDown]);

  function toggleRun() {
    setRunning(!running);
  }

  function calculate() {
    if (running) {
      let newLeft = left;
      let newTop = top_;
      let newGoRight = goRight;
      let newGoDown = goDown;
      let newRotateDirection = rotateDirection;

      // Horizontal movement
      if (newGoRight) {
        newLeft += vx;
        if (newLeft > maxLeft) {
          newGoRight = false;
          newRotateDirection *= -1;
        }
      } else {
        newLeft -= vx;
        if (newLeft <= 0) {
          newGoRight = true;
          newRotateDirection *= -1;
        }
      }

      // Vertical movement
      if (newGoDown) {
        newTop += vy;
        if (newTop >= maxTop) {
          newGoDown = false;
          newRotateDirection *= -1;
        }
      } else {
        newTop -= vy;
        if (newTop <= 0) {
          newGoDown = true;
          newRotateDirection *= -1;
        }
      }

      setLeft(newLeft);
      setTop(newTop);
      setGoRight(newGoRight);
      setGoDown(newGoDown);
      setRotateDirection(newRotateDirection);

      // Update rotation angle
      let newRotationAngle = rotationAngle + rotateSpeed * newRotateDirection;
      if (newRotationAngle >= 360 || newRotationAngle <= -360) {
        newRotationAngle = 0;
      }
      setRotationAngle(newRotationAngle);
    }
  }

  function changeBall(type) {
    let ballImage;
  
    switch (type) {
      case 'basketball':
        ballImage = 'https://shop.molten.co.th/cdn/shop/products/B6G2000_M1.jpg?v=1673849960';
        break;
      case 'football':
        ballImage = 'https://png.pngtree.com/png-clipart/20230504/original/pngtree-football-sports-vector-clipart-ball-png-image_9140052.png';
        break;
      case 'volleyball':
        ballImage = 'https://e7.pngegg.com/pngimages/523/371/png-clipart-volleyball-mikasa-sports-mikasa-ball-mikasa-mva-200-volleyball-volleyball-sphere.png';
        break;
      case 'avatar':
        ballImage = 'https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/464315525_1628869598509330_7528167637628589420_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a_PR_Uci_QYQ7kNvgFXR40Y&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&_nc_gid=ATDBecn9aLUHuv9VprqEjrI&oh=00_AYDdzXgeXLn789cEEWhZm7uBuRCti2XDR91D3FZIEdBqTg&oe=671E992A';
        break;
      case 'cartoon':
        ballImage = 'https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/464288171_1628896068506683_5898212287497422944_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XJ3UyLD-Hy0Q7kNvgG9um2Q&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&_nc_gid=A0rhZV8hD63Zfj8-azsOXOk&oh=00_AYAoxGHNFZc4uB3yfE4O4e8lgvZa0L0ext2aIpmYrNuWrw&oe=671EA619';
        break;
      case 'logo':
        ballImage = 'https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/464296914_1628896408506649_2590778922273031206_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JeTwDVkQCSAQ7kNvgFfxzlY&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=Ary1wPJtJX9PGrHSe8GAuU9&oh=00_AYDXNeRVvhG1SuwutgwmaTBOoc1zUZ49_6RLeYrT_K8n6w&oe=671E9E35';
        break;
      case 'none':
      default:
        ballImage = null; // ไม่มีลูกบอล
    }
  
    console.log(`Changing ball to: ${type}`);
    setCurrentBall(ballImage);
  }
  

  const ballStyle = {
    left: `${left}px`,
    top: `${top_}px`,
    transform: `rotate(${rotationAngle}deg)`,
    backgroundImage: currentBall ? `url(${currentBall})` : '',
    backgroundSize: '120%',
    backgroundPosition: 'center',
    backgroundColor: currentBall === null ? 'white' : '',
  };

  return (
    <div className="container">
      <div className="field" id="field">
        <div id="ball" ref={ballRef} style={ballStyle}></div>
      </div>
      <div className="control">
        <button id="run" className={`btn ${running ? 'btn-danger' : 'btn-success'}`} onClick={toggleRun}>
          {running ? 'Stop' : 'Run'}
        </button>

        <button className="btn btn-outline-primary" onClick={() => changeBall('basketball')}>
          Basketball
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeBall('football')}>
          Football
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeBall('volleyball')}>
          Volleyball
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeBall('avatar')}>
          Avatar
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeBall('cartoon')}>
          Cartoon
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeBall('logo')}>
          Logo
        </button>
        <button className="btn btn-outline-primary" onClick={() => changeBall('none')}>
          None
        </button>
      </div>
    </div>
  );
}

export default Animation;
