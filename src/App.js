import React, {useEffect, useState} from "react";
import Contacts from "./components/contacts/contacts"
import './App.css';
import imgMale from "./access/img/male.png";
import imgFemale from "./access/img/female.png";
import imgNa from "./access/img/na.png";
import {contacts} from "./database/data";

function App() {
    const genderShow = [
        {
            gender: "male",
            genderData: "male",
            show: true
    }, {
            gender: "female",
            genderData: "female",
            show: true
    }, {
            gender: "na",
            genderData: undefined,
            show: true
    }]

    const [state, setState] = useState(contacts);
    const [search, setSearch] = useState("");
    const [genderShowState, setGenderShowState] = useState(genderShow);

    const checkedGender = (e) => {
        setGenderShowState(() => genderShowState.map(el => {
            if (el.gender === e.target.id)
                el.show = e.target.checked
            return el;
        }));
    }

    const changeSearch = (e) => {
        setSearch(e.target.value);
    }

    const searcher = () => {
        let newState = contacts.filter(contact => {
            return genderShowState.find(el => el.genderData === contact.gender).show
        });
        newState = newState
            .filter(contact => {
                return Object.values(contact)
                    .reduce((res, field) => {
                        return field.toLowerCase().includes(search.toLowerCase()) ?
                            true : res;
                    }, false);
            });

        setState(newState);
    }

    useEffect(() => {
        console.log(search, genderShowState);
        searcher();
    }, [search, genderShowState]);

  return (
    <div className="App">
        <div className="checkboxes">
            <div className="checkbox">
                <input id="male" className="input-gender" type="checkbox" defaultChecked onChange={checkedGender}/>
                <label>
                    <img className="img-gender" src={imgMale}/>
                </label>
            </div>
            <div className="checkbox">
                <input id="female" className="input-gender" type="checkbox" defaultChecked onChange={checkedGender}/>
                <label>
                    <img className="img-gender" src={imgFemale}/>
                </label>
            </div>
            <div className="checkbox">
                <input id="na" className="input-gender" type="checkbox" defaultChecked onChange={checkedGender}/>
                <label>
                    <img className="img-gender" src={imgNa}/>
                </label>
            </div>
        </div>
      <div className="content">
          <input className="search" placeholder="Search" onChange={changeSearch}/>
          <Contacts dataContscts={state} />
      </div>
    </div>
  );
}

export default App;
