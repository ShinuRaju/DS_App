import React, { useEffect, useState } from 'react'
import { CopyBlock } from 'react-code-blocks';
import { customCodeBlockTheme } from '../styles';
import { TFileName } from '../datas/datas';

export interface IPreCodeBlockProps {
    file: TFileName
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

        <CopyBlock
            text={`${text}`}
            language={"js"}
            showLineNumbers={true}
            theme={customCodeBlockTheme}
        />

    )
}

export default PreCodeBlock