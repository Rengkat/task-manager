import { useDispatch, useSelector } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { MdEdit, MdDelete } from "react-icons/md";
import { GrCheckmark } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import {
  editItem,
  showForm,
  completed,
  deletTask,
} from "../app/taskFeatures/taskSlice";

const Task = () => {
  const dispatch = useDispatch();
  const { data, isCompleted } = useSelector((store) => store.task);
  let me = data.map((item) => item.isCompleted);

  const handleDelet = (e, id) => {
    dispatch(deletTask(id));
    e.preventDefault();
  };
  const handleCompleted = (e, id) => {
    dispatch(completed(id));
    e.preventDefault();
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    // console.log(e);
    dispatch(showForm());
    dispatch(editItem(id));
  };
  return (
    <div className=" w-full flex items-center justify-center ">
      <div className="w-[30rem] py-3 md:p-0 md:w-[100%] ">
        {data.map((d, index) => {
          // console.log(d.isCompleted);
          return (
            <div key={index} className="my-5 shadow-md">
              <div className=" flex w-full my-0">
                <div className=" border-2 font-semibold text-gray-500 border-slate-200 py-1 px-4 w-full">
                  <h1>Task {index + 1}</h1>
                </div>
                <button
                  disabled
                  className=" w-12 h-10 flex items-center justify-center border-y-2 border-r-2 border-slate-200">
                  <BiPlus fontSize={20} />
                </button>
              </div>
              <div className=" mx-auto flex justify-between pl-6 pr-6">
                <div className="">
                  <p className="font-semibold text-2xl  text-gray-600">
                    {d.user}
                  </p>
                  <div className="flex space-x-2">
                    <p className="text-red-400">{d.date}</p>
                    <p>by {d.time}</p>
                  </div>
                  <p className=" py-6">{d.taskDesc}</p>
                </div>

                <div className="flex justify-center items-center w-8 h-8 py-8 pr-9 text-gray-500">
                  <button
                    onClick={(e) => handleDelet(e, d.id)}
                    className="border-y-2 border-l-2 border-gray-200 p-2 rounded-l">
                    <MdDelete />
                  </button>
                  <button
                    onClick={(e) => handleEdit(e, d.id)}
                    className="border-2 border-gray-200 p-2 ">
                    <MdEdit />
                  </button>
                  <button
                    onClick={(e) => handleCompleted(e, d.id)}
                    className="border-y-2 border-r-2 border-gray-200 p-2 rounded-r">
                    {d.isCompleted ? <GrCheckmark /> : <FaBell />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
