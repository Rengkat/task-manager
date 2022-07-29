import { BiPlus } from "react-icons/bi";
import Form from "./components/Form";
import Task from "./components/Task";
import { useDispatch, useSelector } from "react-redux";
import { showForm } from "../src/app/taskFeatures/taskSlice";

function App() {
  const dispatch = useDispatch();
  const { isHideForm, data } = useSelector((store) => store.task);
  const handleClick = (e) => {
    dispatch(showForm());
    e.preventDefault();
  };
  return (
    <div className=" w-full mt-20 flex items-center justify-center ">
      <form className="w-full p-3 md:p-0 md:w-[30%]">
        <div className=" flex w-full">
          <div className=" border-2 font-semibold text-gray-500 border-slate-200 py-1 px-4 w-full">
            <h1>Task {data.length + 1}</h1>
          </div>
          <button
            onClick={handleClick}
            className=" w-12 h-10 flex items-center justify-center border-y-2 border-r-2 border-slate-200">
            <BiPlus fontSize={20} />
          </button>
        </div>
        {isHideForm && <Form />}
        {!isHideForm && <Task />}
      </form>
    </div>
  );
}

export default App;
