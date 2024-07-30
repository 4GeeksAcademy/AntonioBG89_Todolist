import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoComponent from "./ToDoComponent";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);

	// let input = document.getElementById("toDoList");

	// input.addEventListener("keydown", function (event) {
	// 	if (event.key === "Enter") {

	// 	}
	// });


	return (
		<div className="container text-center mt-5">
			<div className="row justify-content-center">
				<form>
					<div className="mb-3">
						<label for="toDoList" className="form-label">TODO's</label>
						<input type="text" className="form-control" id="toDolist" placeholder="What needs to be done?" value={todo} onChange={(e) => {
							setTodo(e.target.value);
						}} />
					</div>
				</form>
				<p>Todo: {todo}</p>
				
				<button className="col-1 btn btn-info" onClick={() => {
					setTodo("");
				}}>Clear</button>
				<p className="row justify-content-start">{todo.length} items left</p>
			</div>

		</div>
	);
};

export default Home;
