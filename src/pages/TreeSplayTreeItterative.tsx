import React from 'react'
import { TObjData, dataObj } from '../datas/datas';
import Heading from '../components/Heading';
import PreCodeBlock from '../components/PreCodeBlock';

const TreeSplayTreeItterative = () => {
    const objType: TObjData = 'treeSplayTreeItterative';
    const title = dataObj[objType];

    return (
        <>
            <Heading>{title}</Heading>
            <PreCodeBlock file={objType} />
        </>
    )
}

export default TreeSplayTreeItterative