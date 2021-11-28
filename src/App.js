import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {getPosts} from "./actions/posts"
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import styles from "./App.module.css"

function App() {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false)
  const toggleForm = () => {
    setShowForm(prev => !prev)
  }
  const formRef = useRef()
  
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  const closeForm = e =>{
    if (formRef.current === e.target) {
      setShowForm(false)
    }
  }

  return (
    <div className="App">
      <div className={styles.container}>
        <Posts setCurrentId={setCurrentId} toggleForm={toggleForm} showForm={showForm}/>
        {showForm?(<div className={styles.form_background} ref={formRef} onClick={closeForm}><Form setCurrentId={setCurrentId} toggleForm={toggleForm}/></div>):null}
      </div> 
    </div>
    

  );
}

export default App;
