import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {getPosts} from "./actions/posts"
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import styles from "./App.module.css"

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className="App">
      <div className={styles.container}>
        <Posts setCurrentId={setCurrentId}/>
        <Form setCurrentId={setCurrentId}/>
      </div> 
    </div>
    

  );
}

export default App;
