import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoComponent from "./ToDoComponent";
import { FaRegTimesCircle } from "react-icons/fa";

//create your first component
const Home = (props) => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const [icon, setIcon] = useState("");

	return (
		<div className="container text-center mt-5">
			<div className="container justify-content-center">

				<div className="mb-3">
					<label for="toDoList" className="form-label">TODO's</label>
					<input type="text" className="form-control" id="toDolist" placeholder="What needs to be done?" value={todo} onKeyDown={(e) => {
						if (e.key === "Enter") {
							setTodos([...todos, todo]);
							setTodo("");
						}
					}} onChange={(e) => {
						setTodo(e.target.value);
					}} />
				</div>

				<div className="container mb-5">
				{todos.map((todo) => {
						return <div className="container estiloListaTodos d-flex justify-content-between" >{todo}<FaRegTimesCircle /></div>;
					})}

				</div >

				<button className="col-1 btn btn-danger" onClick={() => {
					setTodo("");
					setTodos([]);
				}}>Clear All!!</button>
				<p className="d-flex justify-context-start px-5 mt-3">{todos.length} items left</p>
			</div>

		</div>
	);
};

export default Home;
