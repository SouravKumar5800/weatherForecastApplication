import { useEffect, useState } from "react";
import "./toggleButton.css";

export const ToggleButton = ({onChangeState = () => {}}) => {
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        onChangeState(isChecked);
    }, [isChecked]);

    return (
        <div className="toggle toggle--daynight">
			<input type="checkbox" id="toggle--daynight" className="toggle--checkbox" onClick={() => {
                setIsChecked((prev) => !prev);
            }} checked={isChecked}/>
			<label className="toggle--btn" for="toggle--daynight">
                <span className="toggle--feature"></span>
            </label>
		</div>
    )
}