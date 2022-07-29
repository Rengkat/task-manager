// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiContactsBook2Line } from "react-icons/ri";
import { nanoid } from "@reduxjs/toolkit";
import {
  addDate,
  addTaskDesc,
  addUser,
  addTime,
  addPersonData,
  showForm,
} from "../app/taskFeatures/taskSlice";
const Form = () => {
  const dispatch = useDispatch();
  const { taskDesc, date, time, user, data } = useSelector(
    (store) => store.task
  );
  // console.log(data);
  const handleFollowUp = (e) => {
    dispatch(addTaskDesc(e.target.value));
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addPersonData({ taskDesc, date, time, user, id: nanoid() }));
    dispatch(showForm());
  };
  return (
    <div className=" bg-slate-200 w-full px-5 py-3 list-none font-semibold text-gray-500 rounded-b-md">
      <div className="pb-2">
        <label className="">Task Description</label>
      </div>
      <div className="flex justify-between bg-white items-center p-2 rounded">
        <input
          type="text"
          placeholder="Follow up"
          className="w-full outline-none"
          onChange={handleFollowUp}
        />
        <RiContactsBook2Line />
      </div>
      <div className="py-3 flex justify-between list-none">
        <div className="">
          <li>
            <label htmlFor="date">Date</label>
          </li>
          <li className="py-1">
            <input
              onChange={(e) => dispatch(addDate(e.target.value))}
              type="date"
              name="date"
              id=""
              className="w-[8rem] md:w-[12rem] p-2 rounded"
            />
          </li>
        </div>
        <div>
          <li className="py-1">
            <label htmlFor="time">Time</label>
          </li>
          <li>
            <input
              onChange={(e) => dispatch(addTime(e.target.value))}
              type="time"
              name="time"
              id=""
              className="w-[8rem] md:w-[12rem] p-2 rounded"
            />
          </li>
        </div>
      </div>
      <li className="pb-1 pl-1">
        <label htmlFor="user">Assign User</label>
      </li>
      <input
        onChange={(e) => dispatch(addUser(e.target.value))}
        type="text"
        className="w-full p-1 rounded"
      />
      <div className="flex justify-end pt-1 pb-5 space-x-5">
        <button className="bg-gray-200 py-1 px-2 text-gray-500 rounded font-semibold shadow w-[7rem] mt-5">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-green-600 py-1 px-2 text-white rounded font-semibold shadow w-[7rem] mt-5">
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
