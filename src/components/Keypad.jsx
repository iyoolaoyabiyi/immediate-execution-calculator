import { buttons } from '../utils/helpers';

export default function Keypad( { clickFunc } ) { 
  
  return (
    <div className="keypad pt-5">
      {buttons.map(button => (
        <button 
          key={button.id} 
          id={button.id} 
          className={`
            btn 
            ${button.id === "clear" || button.id === "backspace" ? "btn-danger" : "btn-primary"} 
            ${button.id === "equals" ? "btn-success" : ""} 
            fs-5`
            }
            onClick={clickFunc}
          >
              {button.value}
          </button>
      ))}
    </div>
  );
}