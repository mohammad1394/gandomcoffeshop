import {type ComponentProps} from 'react';



type TButton = ComponentProps<"button">;


function Button({children , className='' , ...rest}:TButton) {
    return (
        <button className={`bg-amber-200  text-black px-4 py-2 rounded-full " , ${className}` } {...rest}>
            {children}
        </button>
    );
}

export default Button;