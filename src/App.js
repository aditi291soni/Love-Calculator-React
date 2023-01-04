import React from "react";
import "../src/style.css";
import { useState } from "react";

const App = () => {
const [total,settotal]=useState(0)
  const [current,setcurrent]=useState({name:"",
  partner:"",
totals:0})
  const [data,setdata]=useState([])
  
  const ChangeHandler=(e)=>{
    setcurrent({
      ...current,
      [e.target.name]: e.target.value,
      
    });
    
  }
      localStorage.setItem("data", JSON.stringify(data));
      let datas = JSON.parse(localStorage.getItem("data"));
  const LoveHandler = (e) => {
    e.preventDefault()
    
   let newData= {
      ...current,
      totals: Math.floor(Math.random() * 100),
    }
    setdata([...data,newData])
    
    
    console.log("datas",datas)
    for(var i=0;i<datas.length;i++){
if (
  e.target[0].value === datas[i].name &&
  e.target[1].value === datas[i].partner
) 
   {console.log("hello");} 
  
 else {
  newData = {
    ...current,
    totals: Math.floor(Math.random() * 100),
  };
  console.log("new data");
  setdata([...data, newData]);
}
    }
      
    }
  
  return (
    <form className="main" onSubmit={LoveHandler}>
      <img
        className="mains"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbt5lBGlY-M_Z96rPQNTtthAUKb0K08FQPrw&usqp=CAU"
      />
      <img id="leftimg" src="bg.jpg" alt="" />
      <div className="content">
        <h2>Calculate your love Percentage💕</h2>

        <input
          type="text"
          className="name"
          value={current.name}
          name="name"
          placeholder="Enter your name💖"
          onChange={ChangeHandler}
          required
        />
        <input
          type="text"
          className="partner"
          value={current.partner}
          required
          name="partner"
          placeholder="Enter your partner name💖"
          onChange={ChangeHandler}
        />
        <div>
          <div className="per">{current.totals} %</div>
          <button className="btn">Calculate your Love%❤️</button>
        </div>
      </div>
    </form>
  );
};

export default App;
