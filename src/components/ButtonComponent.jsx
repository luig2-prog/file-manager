import PropTypes from "prop-types";

const ButtonComponent = ({ children, text, functionComponent }) => {
  return (
    <button
      className={[
        "bg-[#1266f1] storybook-button",
        `storybook-button--`,
        `inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm 
                font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
                transition duration-150 ease-in-out hover:bg-[#1266f1]  
                hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:bg-[#1266f1] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:outline-none focus:ring-0 active:bg-primary-700 
                active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                light:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
                light:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                light:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)`,
      ]}
      label="Ingresar"
      onClick={functionComponent}
    >
      {children}
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
  functionComponent: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.any,
};

export default ButtonComponent;
