import useTheme from '../../hooks/useTheme';
import modeIcon from '../../assets/mode-icon.svg';

// style
import './ThemeSelector.css';

const themeColors = ['#235789', '#F26157', '#E2C044', '#690500'];

export default function ThemeSelector() {
  const { changeColor, mode, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
          alt="dark/light toggle icon"
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
