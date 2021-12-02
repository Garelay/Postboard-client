import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getPosts} from "./actions/posts"
import { closeForm } from "./actions/form";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import styles from "./App.module.css"

function App() {
  const dispatch = useDispatch()
  const showFormState = useSelector((state)=>state.form)
  const showLoginForm = useSelector((state)=>state.loginForm)
  const showSigninForm = useSelector((state)=>state.signinForm)
  const showAccountEditForm = useSelector((state)=>state.accountEditForm)
  
  const formRef = useRef()
  
  useEffect(() => {
    dispatch(getPosts())
  }, [ dispatch])

  const handleCloseForm = e =>{
    if (formRef.current === e.target) {
      dispatch(closeForm())
    }
  }

  return (
    <div className={styles.App}>
      <NavBar/>
      {showFormState?(<div className={styles.form_background} ref={formRef} onClick={handleCloseForm}><Form /></div>):null}
      <Posts/>
    </div>
    

  );
}

export default App;
