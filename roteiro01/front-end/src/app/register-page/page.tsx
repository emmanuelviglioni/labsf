'use client'
import Link from "next/link"
import { parse } from "path"
import { useState } from "react"

type Task = {
    title: string
    description: string
    priority: string
    type: string
    date?: Date
}

export default function RegisterPage() {
    const [task, setTask] = useState<Task>({
        title: '',
        description: '',
        priority: '',
        type: '',
        date: new Date()
    })

    const handleValidDate = (date: Date) => {
        const yesterday = new Date(new Date().setHours(12, 0, 0, 0))
        if (date <  yesterday){
            alert('Data inválida')
            return false
        }

        return true
    }

    const handleFormatDate = (days: number) => {
        const date = new Date()

        return new Date(date.setDate(date.getDate() + days))
    }

    return (
        <main className="flex bg-white h-[calc(100vh-240px)] min-h-screen flex-col items-center justify-between p-24">
            <form className="flex flex-col gap-6 w-full max-w-2xl">
                <div className="flex flex-col">
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.currentTarget.value })}
                        className="border-solid border-2 rounded border-slate-400" />
                </div>
                <div className="flex flex-col">
                    <label>Descrição:</label>
                    <input
                        type="textarea"
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.currentTarget.value })}
                        className="border-solid border-2 rounded border-slate-400" />
                </div>
                <div className="flex flex-col">
                    <label>Prioridade:</label>
                    <select name="Prioridade"
                        value={task.priority}
                        className="border-solid border-2 rounded border-slate-400 bg-white"
                        onChange={(e) => setTask({ ...task, priority: e.currentTarget.value })}>
                        <option value="Alta">Alta</option>
                        <option value="Média">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Tipo da tarefa:</label>
                    <select name="Tipo da tarefa"
                        value={task.type}
                        className="border-solid border-2 rounded border-slate-400 bg-white"
                        onChange={(e) => setTask({ ...task, type: e.currentTarget.value })}>
                        <option value="Normal">Normal</option>
                        <option value="Prevista">Prevista</option>
                        <option value="Data-limite">Data Limite</option>
                    </select>
                </div>
                {task.type === 'Prevista' ? (
                    <>
                        <label>Data: </label>
                        <input aria-label="Date" type="date" className="w-32 border-solid border-2 rounded border-slate-400 bg-white"
                            onChange={(e) => setTask({ ...task, date: new Date(e.target.value) })} />
                    </>
                ) :
                    task.type === 'Data-limite' ? (
                        <div className="flex gap-2 ">
                            <label>Para daqui </label>
                            <input type="number" className="w-10 border-solid border-2 rounded border-slate-400 bg-white"
                                onChange={(e) => setTask({ ...task, date: handleFormatDate(parseInt(e.currentTarget.value)) })} />
                            <label>dias</label>
                        </div>
                    ) : null
                }

                <div className="flex justify-end gap-3">
                    <button type="submit" className="text-primary-red bg-secondary-green text-white py-1 px-3 rounded-full transition-colors duration-150 hover:bg-green-500"
                        onClick={() => {
                            if (handleValidDate(task.date as Date)) {
                                alert('Tudo certo, pode dar o post' + JSON.stringify(task))
                            }
                        }}>Enviar</button>
                    <Link href={'/'} className="text-primary-red bg-red-500 text-white py-1 px-3 rounded-full transition-colors duration-150 hover:bg-red-400"> Cancelar</Link>
                </div>
            </form>
        </main >
    )
}