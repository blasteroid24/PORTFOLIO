import { connectToDB } from "@/db/mongodb";
import Task from "@/models/Task";

export async function GET(req) {
  await connectToDB();
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  return new Response(JSON.stringify(tasks), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  await connectToDB();
  const newTask = await Task.create({ text: body.text });
  return new Response(JSON.stringify(newTask), { status: 201 });
}

export async function PATCH(req) {
  const { id, done } = await req.json();
  await connectToDB();
  const task = await Task.findByIdAndUpdate(id, { done }, { new: true });
  return new Response(JSON.stringify(task), { status: 200 });
}

export async function DELETE(req) {
  const { id } = await req.json();
  await connectToDB();
  await Task.findByIdAndDelete(id);
  return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
}
