import React from "react";
import style from "./contact.module.scss"
import imgMale from "../../access/img/male.png";
import imgFemale from "../../access/img/female.png";
import imgNa from "../../access/img/na.png";
import imgEmptyPhoto from "../../access/img/empty-photo.png";

function Contact(props) {

    let gender;

    switch (props.contact.gender) {
        case "female":
            gender = imgFemale;
            break;
        case "male":
            gender = imgMale;
            break;
        default:
            gender = imgNa;
    }

    return (
        <div className={style.contact}>
            <img className={style.photo} src={imgEmptyPhoto}/>
            <img className={style.gender} src={gender}/>
            <p className={style.name}>
                <span>{props.contact.firstName} </span>
                <span>{props.contact.lastName}</span>
            </p>
            <p className={style.number}>
                <span>{props.contact.phone} </span>
            </p>
        </div>
    );
}

export default Contact;