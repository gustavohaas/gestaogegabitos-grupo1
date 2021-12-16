import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./style";
import { useState } from "react";
import { ImCheckmark2 } from "react-icons/im";

const Checkbox = () => {

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    }

    return (
        <CheckboxContainer check={check} onClick={handleCheck}>
            <HiddenCheckbox check={check} onChange={handleCheck}/>
            <StyledCheckbox check={check}>
                <ImCheckmark2/>
            </StyledCheckbox>
        </CheckboxContainer>
    )
}

export default Checkbox;