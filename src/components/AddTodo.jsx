export const AddTodo = () => {
  return (
    <div className="input-area">
            <input type="text" className="frm-input input-todo" placeholder="Escriba aqui..." id="todoTxt" name="todoTxt"/>
            <button className="frm-btn btn-add" id="btnAddTodo" type="button">Agregar</button>
    </div> 
  )
}
