export default function ModalHeader({title, onClose}: {title: string, onClose: () => void}) {
    return (
        <div>
            <span>{title}</span>
            <div onClick={onClose}>x</div>
        </div>
    )
}