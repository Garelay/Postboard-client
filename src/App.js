import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getPosts} from "./actions/posts"
import { closeForm } from "./actions/form";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import styles from "./App.module.css"

function App() {
  const dispatch = useDispatch()
  const showFormState = useSelector((state)=>state.form)
  
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
    <div className="App">
      <Header/>
      <div className={styles.container}>
        <Posts />
        {showFormState?(<div className={styles.form_background} ref={formRef} onClick={handleCloseForm}><Form /></div>):null}
      </div> 
    </div>
    

  );
}

export default App;
