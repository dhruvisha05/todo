import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";



function App() {
  let [todo, settodo] = useState();
  let [todo1, settodo1] = useState([]);
  let [task, settask] = useState(false);
  let [edit, setedit] = useState();
  let [search, setsearch] = useState("");
  let [store,setstore]=useState([])

  const ans = () => {
    if (task) {
      const info = [...todo1];
      info[edit].task1 = todo;
      settodo1(info);
      settask(false);
    } else {
      // settodo1([...todo1, todo])
      settodo1([...todo1,{task1:todo,complated:false}]);
      setstore([...todo1,{task1:todo,complated:false}]);

    }
    settodo("");
  }
  function removedata(index) {
    const removedetails = todo1.filter((ele, id) => {
      return index != id;
    })
    settodo1(removedetails);
  }
  function editdata(index) {
    settodo(todo1[index]);
    settask(true);
    setedit(index);
  }
  
  const searchHandler = () => {
    var data = todo1.filter((ele) => {
      return ele.task1===search;
    });
    settodo1(data);
  };

  // const check=()=>{
  //   // alert("123");
  //    var ch=true
  //   if(ch==true)
  //   {

  //   }else{

  //   }
    
  // }
  const complate=(index)=>{
    const up=[...todo1];
    up[index].complated =! up[index].complated;
    settodo1(up);
    setstore(up);
  }
  const combtn=()=>{
    let btn=store.filter((ele,ind)=>{
      return ele.complated==true;
    })
    settodo1(btn);
  }
  const uncombtn=()=>{
    let btn=store.filter((ele,ind)=>{
      return ele.complated==false;
    })
    settodo1(btn);
  }
  const allbtn=()=>{
    settodo1([...store]);
  }
  
 

  return (
    <>
      
        <table class="t_1">
          <tr>
            <td><input className="box" type="text" value={todo} onChange={(t) => { settodo(t.target.value) }} placeholder="Enter details" /></td>
          </tr>
          <tr>
            <td><input className="btn" type="button" onClick={ans} value="Done" /></td>
          </tr>
          <tr>
            <td><input type='text' className='input_item' placeholder='Search task..' value={search} onChange={(e) => setsearch(e.target.value)} />
            <button className='btn_3' onClick={searchHandler}><FaSearch></FaSearch></button>
            </td>
         
          </tr>
          <tr>
            <td>
              <div>
                  <button className='btn_4' onClick={combtn}>complate</button>
                  <button className='btn_4' onClick={uncombtn}>uncomplate</button>
                  <button className='btn_4' onClick={allbtn}>all</button>
              </div>              
          
          </td>
          </tr>
        </table>
    
      {todo1.map((data, index) => {
        return (
          <>
            <div className='box2'>
              <div key={index} className='t_2'>
                <input type='checkbox' checked={data.completed} onChange={()=>complate(index)} className='c_box' />
                <h1 style={{textDecoration:data.complated ? 'line-through':'none'}}>{data.task1}</h1>
                {/* <Checkbox/> */}
                {/* <input type="checkbox" onClick={onClick} defaultChecked={defaultChecked} /> */}
                
                <div>
                  <button className='btn_2' onClick={() => editdata(index)}>Edit</button>
                  <button className='btn_2' onClick={() => removedata(index)}>Remove</button>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  );
}

export default App;
