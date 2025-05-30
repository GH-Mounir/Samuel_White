import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  title: string;
  description: string;
  dir: 'ltr' | 'rtl';
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  title,
  description,
  dir,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, setShowModal]); // Added setShowModal to dependency array

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={() => setShowModal(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
      }}
    >
      <div 
        className="relative w-full max-w-lg bg-black p-6 rounded-lg shadow-lg text-white border-2 border-red-600"
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        dir={dir}
        style={{
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          overflow: 'hidden',
        }}
      >
        <button 
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mb-4 tracking-wide text-red-600">
          {title}
        </h3>
        <div 
          className="text-base text-white overflow-y-auto flex-grow pr-2 custom-scrollbar"
          style={{
            maxHeight: 'calc(90vh - 120px)',
            scrollbarWidth: 'thin',
          }}
        >
          <p className="whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement // Target the modal-root div
  );
};

export default Modal; 