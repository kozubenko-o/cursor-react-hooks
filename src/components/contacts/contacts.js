import React from "react";
import Contact from "../contact/contact";

function Contacts(props) {
    return props.dataContscts.map((el, i) => {
        return (
                    <Contact key={i} contact={el}/>)
    });
}

export default Contacts;