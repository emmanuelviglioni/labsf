import Priority from "./Priority";


export default function Task() {

    return (
        <li className="flex items-center bg-primary-white border-solid border-2 rounded-lg py-4 px-8 h-40 ">
            <div className="flex flex-col gap-4 border-r-solid border-r-[1px] w-40">
                <Priority priority="media" />
                <h3 className="font-semibold text-lg">Title Example</h3>
                <p className="text-primary-gray">Prevista para: { }</p>
            </div>
            <div className="px-8">
                <textarea className="w-full h-full bg-primary-white" style={{ resize: "none" }} placeholder="Descrição da tarefa">

                </textarea>
                <div className="flex gap-3 justify-end">
                    <button className="text-primary-red bg-green-400 text-white py-1 px-3 rounded-full transition-colors duration-150 hover:bg-green-500">Check</button>
                    <button className="text-primary-red bg-red-400 text-white py-1 px-3 rounded-full transition-colors duration-150 hover:bg-red-500">Excluir</button>
                </div>
            </div>
        </li>
    )
}