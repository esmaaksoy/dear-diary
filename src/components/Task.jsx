import { FiEdit2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
const Task = ({ task, day, value,id, date, deleteTodo }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border">
     
      <p>{new Date(date).toLocaleDateString()} / {task}</p>
      <div>
        <FiEdit2 className="text-white me-2" />
        <FaTrash className="text-white" onClick={()=> deleteTodo(id)}/>
      </div>
    </div>
  );
};

export default Task;
