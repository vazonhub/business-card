import './../assets/css/components/about-block.css';

interface AboutBlockProps {
    title: string;
    content: string;
    index: number;
}

export const AboutBlock = ({
    title,
    index,
    content
}: AboutBlockProps) => {
    return (
        <section
            className="about-block"
            style={{
                animationDelay: `${index * 0.1}s`
            }}    
        >
            <h3 className='about-block-title'>{title}</h3>
            <p className='about-block-content'>{content}</p>
        </section>
    )
}