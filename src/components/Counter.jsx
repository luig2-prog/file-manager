import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div>
                Numero en: {counter}
            </div>
            <ButtonComponent text="Aumentar" functionComponent={() => {
                setCounter(counter + 1);
            }}/>
            <ButtonComponent functionComponent={() => {
                setCounter(counter - 1);
            }}>
                Disminuir
            </ButtonComponent>
            <ButtonComponent functionComponent={() => {
                setCounter(0);
            }}>
                Reiniciar
            </ButtonComponent>
        </>
    )
}

export default Counter;