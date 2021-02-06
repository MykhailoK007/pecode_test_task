import React, {useEffect, useRef, useState} from "react";


export  const WatchList = props => {
  const [list, setList] = useState([]);
  const input = useRef(null);
  useEffect(() => {
    let getList = JSON.parse(localStorage.getItem('list'))||[];
    setList(getList);
  },[]);
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list));
  },[list])
  const addEpisodeToList = () => {
    const newItem = {
      id:input.current.value + list.length,
      name:input.current.value,
      watched:false
    }
      setList([...list,newItem])
  }
  const handleChange = (id) => {

    setList([...list.map((el)=>{

      if(el.id === id)el.watched = !el.watched;
      return el;
    })])
  }
  const removeItem = id =>{
    setList([...list.filter(el => el.id !== id)])
  }

  return <>
    <div className='inputWrapper'>
      <span>Enter the episode you want to watch: </span>
      <input type="text" ref={input}/>
      <input type="button" value='Add' onClick={addEpisodeToList}/>
    </div>
    <div className='listWrapper'>
      {list && <>
        {list.map(el => {

          return <div className='itemWrapper' key={el.id}>
            <input type="button" value='x' className='removeButton' onClick={()=>removeItem(el.id)}/>
            <div>
              <input type="checkbox" id='checkbox' className='checkbox' defaultChecked={el.watched} onChange={()=>handleChange(el.id)}/>
              <label htmlFor="checkbox" className='item'>{el.name}</label>
            </div>


          </div>
        })}
      </>
      }
      {
        list == false && <div className='emptyList'>List is empty...</div>
      }
    </div>
  </>
}
