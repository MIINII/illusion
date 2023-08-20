import { useCallback, useState } from 'react';

const OPTION = {
  show: false,
  type: [],
  title: '',
  placeholder: '',
  btnTitle: '',
  onSubmit: () => {},
  onClose: (e) => {
    e.stopPropagation();
  },
  element: null,
};

export const useModal = () => {
  const [modalOption, setModalOption] = useState(OPTION);

  const showModal = useCallback(
    (show, type, title, placeholder, btnTitle, onSubmitCallback, onCloseCallback, element) => {
      setModalOption((prev) => ({
        ...prev,
        show,
        type,
        title,
        placeholder,
        btnTitle,
        onSubmit: (e) => {
          e.preventDefault();
          if (onSubmitCallback) onSubmitCallback();
          setModalOption((prev) => ({ ...prev, show: false }));
        },
        onClose: (e) => {
          if (onCloseCallback) onCloseCallback();
          e.stopPropagation();
          setModalOption((prev) => ({ ...prev, show: false }));
        },
        element,
      }));
    },
    []
  );

  return [modalOption, showModal];
};
