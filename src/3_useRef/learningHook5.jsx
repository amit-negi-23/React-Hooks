import { forwardRef, useRef } from 'react';

//child component
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});


//parent component
export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
