import { useEffect, useState } from "react";
import "./App.scss";
import {Dropdown, Accordion} from "./components"
import {statuses, getIssue, updateStatus} from "./tools/helper"

function App() {
  const [title, setTitle] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("Todo");
  
  useEffect(() => {
    getIssueData();
  });

  async function getIssueData() {
    try {
      const promise = await getIssue();
      setTitle(promise.title);
      setStatus(promise.status);
    } catch (err) {
      setTitle("Error");
    }
  }

  async function onUpdateStatus(id: number, status: string) {
    try {
      await updateStatus(id, status);
  
    } catch (err) {
      
    }
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <Accordion />
      <Dropdown status={status} options={statuses} changeStatue={onUpdateStatus}  />
    </div>
  );
}

export default App;
