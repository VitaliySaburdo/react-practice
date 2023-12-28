import { ReactNode } from "react"

type SectionProps = {
   title?: string,
   children: ReactNode, 
}

export const Section: React.FC<SectionProps> = ({title, children}) => {
    return <>
    <h2>{title}</h2>
    {children}
    </>
}