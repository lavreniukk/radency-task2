export function ModalOverlay({ isOpen, children }: {isOpen: boolean, children: JSX.Element}): JSX.Element | null {
    return isOpen ? <div className="modal_overlay">{ children }</div> : null;
}