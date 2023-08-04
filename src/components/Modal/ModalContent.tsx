export default function ModalContent({ children }: {children: React.ReactNode}) {
    return (
        <div className="modal__container">
            { children }
        </div>
    )
}