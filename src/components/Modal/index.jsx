function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 w-lvw h-lvh bg-gray-600/30">
      {children}
    </div>
  );
}

export default Modal;
