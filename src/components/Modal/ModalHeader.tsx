export default function ModalHeader({title, onClose}: {title: string, onClose: () => void}) {
    return (
        <div className="modal__header">
            <span>{title}</span>
            <div onClick={onClose}>x</div>
        </div>
    )
}