import { useReducer } from "react";
type InputProps = {
  value: string;
  handleOnChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    text: string
  ) => void;
};

function reducer(state: InputProps, action: InputProps) {
  return { value: action.value };
}
const initialState1 = { value: "" };
export const InputUseReducer = (props: InputProps) => {
  const [state, dispatch] = useReducer(reducer, initialState1);
  return (
    <>
      <div>
        Input UseReducer {state.value} : {initialState1.value}
      </div>
      {/* // <input type="text" onChange={(event) =>props.handleOnChange(event,event.target.value!)}></input> */}
      <input
        type="text"
        value={state.value}
        onChange={(event) => {
          dispatch({ value: event.target.value });
        }}
      ></input>
    </>
  );
};
export default InputUseReducer;
