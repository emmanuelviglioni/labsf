
interface PriorityProps {
    priority: string;
}

export default function Priority(props: PriorityProps) {

    const handleFormatText = () => {
        const arr = props.priority.split('');
        arr[0] = arr[0].toUpperCase();

        return arr;
    }

    const handlePriority = () => {
        switch (props.priority.toLowerCase()) {
            case 'baixa':
                return 'bg-primary-green border-[#A5C690]';
            case 'media' || 'média':
                return 'bg-primary-yellow border-[#C6BB90]';
            case 'alta':
                return 'bg-primary-red border-[#C69090]';
        }
    }

    return (
        <span className={` ${handlePriority()} w-fit font-semibold rounded-full py-[2px] px-3 border-solid border-2`}>
            {handleFormatText()}
        </span>
    )
}