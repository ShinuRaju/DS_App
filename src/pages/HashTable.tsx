import React from 'react'
import { TObjData, dataObj } from '../datas/datas';
import Heading from '../components/Heading';
import PreCodeBlock from '../components/PreCodeBlock';

const HashTable = () => {
    const objType: TObjData = 'hashTable';
    const title = dataObj[objType];

    return (
        <>
            <Heading>{title}</Heading>
            <PreCodeBlock file={objType} />
        </>
    )
}

export default HashTable