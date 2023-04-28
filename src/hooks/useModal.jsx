import { useCallback, useState } from 'react';

const OPTION = {
  show: false, // 모달을 키고 끄는 옵션
  type: [], // 모달 타입
  title: '', // 모달의 문구
  placeholder: '',
  btnTitle: '',
  onSubmit: () => {}, // 모달을 킬 때마다 사용할 콜백 함수
  onClose: (e) => {
    e.stopPropagation();
  }, // 모달을 끌 때마다 사용할 콜백 함수
  element: null, // 모달마다 넣고 싶은 추가 컴포넌트 자리
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
    [modalOption]
  );

  return [modalOption, showModal];
};
