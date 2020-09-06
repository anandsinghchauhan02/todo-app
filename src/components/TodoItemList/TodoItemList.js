import React from 'react';

const TotoItemList = (props) => {
    const todoList = props.todoList;
   return(
       <div className="row">
           {todoList.map((item) =>(
               <div className="col-md-6 offset-md-3 col-sm-12 mb-4 animate__animated animate__fadeInDown" key={item.id}>
                   <div className="p-3 todoList-bg">
                       <div className="row">
                         <div className="col-10">

                       <input className="todoInputList" type="text" value={item.text} onChange={(e) => (props.editTodoItem(e.target.value,item.id))}/>
                         </div>
                         <div className="col-2">
                               <div className="float-right mt-1">
                                   <i className="fas fa-trash delete-button" onClick={() => (props.deleteTodoItem(item.id))}></i>
                           </div>
                           </div>
                       </div> 
                   </div>
               </div>
           ))}
       </div>
   )
}

export default TotoItemList;