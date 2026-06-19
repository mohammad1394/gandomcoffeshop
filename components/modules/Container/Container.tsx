import React, {ReactElement, ReactNode} from 'react';

type ContainerProps = {
    children: ReactNode;
    className?: string;
}


function Container({children , className = ""}: ContainerProps) {
    return (
        <div className={`px-4 md:px-8 lg:px-10 font-[Tanha] ${className}`}>
            {children}
        </div>
    );
}

export default Container;