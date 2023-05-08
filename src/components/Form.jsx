import { useRef } from "react";
import Card from "./Card";

const Form = (props) => {
  const nameInputRef = useRef();
  const liveInputRef = useRef();
  const emailInputRef = useRef();

  const addUser = (event) => {
    event.preventDefault();
    if (
      nameInputRef.current.value.trim().length === 0 ||
      liveInputRef.current.value.trim().length === 0 ||
      emailInputRef.current.value.trim().length === 0
    ) {
      alert("Please fill valid values for all inputs.");
      return;
    }
    const userInfo = {
      name: nameInputRef.current.value,
      live: liveInputRef.current.value,
      email: emailInputRef.current.value,
    };
    props.getUserInfo(userInfo);

    // setName("");
    // setLive("");
    // setEmail("");

    nameInputRef.current.value = "";
    liveInputRef.current.value = "";
    emailInputRef.current.value = "";

    // console.log(nameInputRef.current.value);
    // console.log(liveInputRef.current.value);
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input type="text" id="live" ref={liveInputRef} />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailInputRef} />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default Form;
