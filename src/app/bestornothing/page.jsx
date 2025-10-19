"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function KPIPage() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Load tasks from DB
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("/api/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!taskInput.trim()) return;
    await axios.post("/api/tasks", { text: taskInput });
    setTaskInput("");
    fetchTasks();
  };

  const toggleDone = async (id, done) => {
    await axios.patch("/api/tasks", { id, done: !done });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete("/api/tasks", { data: { id } });
    fetchTasks();
  };

  const kpis = [
    { title: "Instagram Followers", target: "500+", deadline: "Dec 2025" },
    { title: "Waist Size", target: "30 inch", deadline: "Feb 2026" },
    { title: "Best Shape / Strength", target: "Peak Physique", deadline: "Feb 2026" },
    { title: "Content Quality", target: "Top-notch edits weekly", deadline: "Ongoing" },
    { title: "Career", target: "Job > 80k/month", deadline: "Feb 2026" },
    { title: "Mental Discipline", target: "No stalking / stay focused", deadline: "Ongoing" },
    { title: "Social / Networking", target: "Meet 5+ new people per month", deadline: "Ongoing" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-10 tracking-tight">
        KPI & Goals Dashboard
      </h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {kpis.map((kpi, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold mb-2">{kpi.title}</h2>
            <p className="text-gray-400 text-lg">{kpi.target}</p>
            <p className="text-gray-500 mt-1 text-sm">Deadline: {kpi.deadline}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Daily To-Do</h2>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Add a task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors font-semibold"
          >
            Add
          </button>
        </div>
        <ul className="flex flex-col gap-3">
          {tasks.map((task) => (
            <li
              key={task._id}
              className={`p-3 flex justify-between items-center rounded-xl border border-gray-600 ${
                task.done ? "bg-green-700 line-through" : "bg-gray-700"
              }`}
            >
              <span>{task.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleDone(task._id, task.done)}
                  className="px-3 py-1 rounded-lg bg-gray-600 hover:bg-gray-500 text-sm"
                >
                  {task.done ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
