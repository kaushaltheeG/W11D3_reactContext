import './ClimateStats.css';
import { useTemp } from '../../context/ClimateContext';

function ClimateStats() {
  const { temperature, humidity } = useTemp();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;