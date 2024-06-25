"use client";

import React, { useEffect, useState } from 'react';
import Task from "../Task";
import { fetchTasks } from './ListService';

export default function List() {
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasks = await fetchTasks();
            setTasks(tasks);
        };

        getTasks();
    }, []);

    return (
        <div className="h-full">
            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </ul>
        </div>
    );
}