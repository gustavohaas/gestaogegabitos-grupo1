import { Collapse, Box } from "./style";
import { useState } from "react";

const Collapsible = ({ title, children }) => {
    const [collapsible, setCollapsible] = useState(false);

    return (
        <>
            <Collapse collapsible={collapsible} onClick={() => setCollapsible(!collapsible)}>{title}</Collapse>
            <Box className="content" hidden={!collapsible}>
                {children}
            </Box>
        </>
    );
};

export default Collapsible;