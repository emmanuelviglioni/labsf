import Priority from "@/app/components/Priority";

interface TaskProps {
    task: {
        taskTitle: string;
        taskDesc: string;
        taskStatus: string;
        taskPriority: string;
        taskDateEstimatedConclusion?: string;
        status: string;
        taskId: number;
    };
}

export default function Task({ task }: TaskProps) {
    return (
        <li className="flex items-center bg-primary-white border-solid border-2 rounded-lg py-4 px-8 h-40 w-auto mb-3 ">
            <div className="flex flex-col gap-4 border-r-solid border-r-[1px] w-40">
                <Priority priority={task.taskPriority.toLowerCase()} />
                <h3 className="font-semibold text-lg">{task.taskTitle}</h3>
                {task.taskDateEstimatedConclusion && <p className="text-primary-gray">Prevista para: {task.taskDateEstimatedConclusion}</p>}
            </div>
            <div className="px-8">
                <textarea className="w-full h-full bg-primary-white" style={{ resize: "none" }} placeholder="Descrição da tarefa">
                    {task.taskDesc}
                </textarea>
                <div className="flex gap-3 justify-end">
                    <button className="text-primary-red bg-green-400 text-white py-1 px-3 rounded-full transition-colors duration-150 hover:bg-green-500">Check</button>
                    <button className="text-primary-red bg-red-400 text-white py-1 px-3 rounded-full transition-colors duration-150 hover:bg-red-500">Excluir</button>
                </div>
            </div>
        </li>
    )
}