import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getPosts} from "./actions/posts"
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import styles from "./App.module.css"
import ModalBackground from "./components/ModalBackground/ModalBackground";

function App() {
  const dispatch = useDispatch()
  const modal = useSelector(state=>state.modal)


  
  useEffect(() => {
    dispatch(getPosts())
  }, [ dispatch])



  return (
    <div className={styles.App}>
      <NavBar/>
      {(modal!=="none")?<ModalBackground/>:null}
      <Posts/>
    </div>
    

  );
}

export default App;
