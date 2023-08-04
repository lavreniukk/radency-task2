export function ModalOverlay({ isOpen, children }: {isOpen: boolean, children: JSX.Element}): JSX.Element | null {
    return isOpen ? <div>{ children }</div> : null;
}