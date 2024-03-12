import React, { useEffect, useState } from 'react';
import { TObjData } from '../datas/datas';

export interface IPreCodeBlockProps {
    file: TObjData
}

const PreCodeBlock: React.FC<IPreCodeBlockProps> = ({ file }) => {
    const [text, setText] = useState('...loading');

    useEffect(() => {
        fetch(`codes/${file}.txt`)
            .then((response) => response.text())
            .then((textContent) => {
                setText(textContent);
            });
    }, []);
    return (
        <>
            <pre><code>{
                text
            }
            </code></pre>

            {/* <CopyBlock
                text={`${text}`}
                language={"js"}
                showLineNumbers={true}
                theme={customCodeBlockTheme}
            /> */}
        </>

    )
}

export default PreCodeBlock