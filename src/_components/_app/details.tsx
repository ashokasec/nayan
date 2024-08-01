"use client"

import { bricolage } from '@/_libs/fonts'
import React, { useRef } from 'react'
import DisplayCode from './display-code'
import SidebarRH from './sidebar-rh'
import Features from './details/features'
import DetailingSection from './details/detailing-section'
import Footer from './details/footer'

export interface DetailsProps {
    title: string,
    subtitle: string,
    featuresList?: React.ReactNode[],
    renderComponent?: React.JSX.Element,
    componentCode?: string,
    usageCode?: string
}

const UiDetails = ({ title, subtitle, featuresList, renderComponent, componentCode, usageCode }: DetailsProps) => {

    const infoRef = useRef<HTMLHeadingElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const usageCodeRef = useRef<HTMLDivElement>(null);
    const componentCodeRef = useRef<HTMLDivElement>(null);

    const handleSectionScroll = (ref: React.RefObject<HTMLElement>) => {
        const navbarHeight = 85;
        return (e: React.MouseEvent) => {
            e.preventDefault();
            const element = ref.current;
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };
    };

    return (
        <>
            <article className={`${bricolage.className} w-full relative px-6 pb-3 pt-20`}>
                <h1 ref={infoRef}>{title}</h1>
                <h2 className='mt-6'>{subtitle}</h2>

                {
                    featuresList &&
                    <Features featuresList={featuresList} />
                }

                {
                    renderComponent &&
                    <DetailingSection title='Preview' ref={previewRef}>
                        <div className='bg-gray-400/5 rounded-md p-6 border border-algae mt-2 w-full max-w-full'>
                            {renderComponent}
                        </div>
                    </DetailingSection>
                }

                {
                    componentCode &&
                    <DetailingSection title='Code' ref={componentCodeRef}>
                        <DisplayCode filepath='./src/components/ashokasec-ui/input/' filename='tags-input.tsx' code={componentCode} />
                    </DetailingSection>
                }

                {
                    usageCode &&
                    <DetailingSection title='Usage Code' ref={usageCodeRef}>
                        <DisplayCode filepath='./whatever/' filename='form.tsx' code={usageCode} />
                    </DetailingSection>
                }

                <Footer />
            </article>
            <SidebarRH
                title={title}
                subtitle={subtitle}
                clickInfo={handleSectionScroll(infoRef)}
                clickPreview={handleSectionScroll(previewRef)}
                clickUsage={handleSectionScroll(usageCodeRef)}
                clickCode={handleSectionScroll(componentCodeRef)}
            />
        </>
    )
}

export default UiDetails