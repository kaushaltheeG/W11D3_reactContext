import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const clickHandler = e => {
    // console.log(e);
    console.log(e.target.className);
    if (e.target.className === "on") setThemeName('day');
    else setThemeName('night');
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={clickHandler}>DAY</div>
      <div className="off" onClick={clickHandler}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;