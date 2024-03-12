import React from 'react'
import { TObjData, dataObj } from '../datas/datas';
import Heading from '../components/Heading';
import PreCodeBlock from '../components/PreCodeBlock';

const LinkedListCircularSinglyLinkedList = () => {
    const objType: TObjData = 'linkedListCircularSinglyLinkedList';
    const title = dataObj[objType];

    return (
        <>
            <Heading>{title}</Heading>
            <PreCodeBlock file={objType} />
        </>
    )
}

export default LinkedListCircularSinglyLinkedList