import React from 'react';

export interface PreviewProps {
    title: string,
    children?: React.ReactNode,
    ref?: React.LegacyRef<HTMLDivElement>
}

const DetailingSection = React.forwardRef<HTMLDivElement, PreviewProps>(({ title, children }, ref) => {
    return (
        <div ref={ref} className='mt-12'>
            <h3>{title}</h3>
                {children}
        </div>
    );
});

export default DetailingSection;