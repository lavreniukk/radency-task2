import ModalBody from "./ModalBody";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import { ModalOverlay } from "./ModalOverlay";
import './modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: JSX.Element;
}

export default function Modal({isOpen, onClose, title, children} : ModalProps) {
    return (
        <ModalOverlay isOpen={isOpen}>
            <ModalContent>
                <ModalHeader title={title} onClose={onClose}/>
                <ModalBody>
                    { children }
                </ModalBody>
            </ModalContent>
        </ModalOverlay>
    )
}