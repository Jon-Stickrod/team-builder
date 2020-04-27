import React, { useState } from 'react';


const Form = (props) => {
    const [name,setName] = useState("")

    const changeHandler = event => {
        console.log(name)
        setName(event.target.value)
    }

    const submitForm = event => {
        event.preventDefault();
        props.addMember(name);
        setName("")

    }

    return (
        <div className="form">
            <form onSubmit={submitForm} className="formEl">
                <section>
                    <label htmlFor="member">team member: </label>
                    <input className="inputBox" type="text" placeholder="member name here" id="member" value={name} name="member" onChange={changeHandler}/>
                </section>
                
                <button className="subBut" type="submit">add member</button>
             </form>
        </div>
    );
}
export default Form;