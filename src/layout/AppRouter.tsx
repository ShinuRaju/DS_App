import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Stack from '../pages/Stack';
import QueueRegularQueue from '../pages/QueueRegularQueue';
import QueuePriorityQueue from '../pages/QueuePriorityQueue';
import QueueDeque from '../pages/QueueDeque';
import QueueCircularQueue from '../pages/QueueCircularQueue';
import LinkedListSinglyLinkedList from '../pages/LinkedListSinglyLinkedList';
import LinkedListDoublyLinkedList from '../pages/LinkedListDoublyLinkedList';
import LinkedListCircularSinglyLinkedList from '../pages/LinkedListCircularSinglyLinkedList';
import LinkedListCircularDoublyLinkedList from '../pages/LinkedListCircularDoublyLinkedList';
import MapDS from '../pages/MapDS';
import SetDS from '../pages/SetDS';
import HashTable from '../pages/HashTable';
import TreeBSTRecurrsive from '../pages/TreeBSTRecurrsive';
import TreeBSTItterative from '../pages/TreeBSTItterative';
import TreeAVLRecurrsive from '../pages/TreeAVLRecurrsive';
import TreeAVLItterative from '../pages/TreeAVLItterative';
import TreeRBTRecurrsive from '../pages/TreeRBTRecurrsive';
import TreeRBTItterative from '../pages/TreeRBTItterative';
import TreeSplayTreeRecurrsive from '../pages/TreeSplayTreeRecurrsive';
import TreeSplayTreeItterative from '../pages/TreeSplayTreeItterative';
import PageNotFound from '../pages/PageNotFound';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/queueRegularQueue" element={<QueueRegularQueue />} />
            <Route path="/queuePriorityQueue" element={<QueuePriorityQueue />} />
            <Route path="/queueDeque" element={<QueueDeque />} />
            <Route path="/queueCircularQueue" element={<QueueCircularQueue />} />
            <Route path="/linkedListSinglyLinkedList" element={<LinkedListSinglyLinkedList />} />
            <Route path="/linkedListDoublyLinkedList" element={<LinkedListDoublyLinkedList />} />
            <Route path="/linkedListCircularSinglyLinkedList" element={<LinkedListCircularSinglyLinkedList />} />
            <Route path="/linkedListCircularDoublyLinkedList" element={<LinkedListCircularDoublyLinkedList />} />
            <Route path="/mapDS" element={<MapDS />} />
            <Route path="/setDS" element={<SetDS />} />
            <Route path="/hashTable" element={<HashTable />} />
            <Route path="/treeBSTRecurrsive" element={<TreeBSTRecurrsive />} />
            <Route path="/treeBSTItterative" element={<TreeBSTItterative />} />
            <Route path="/treeAVLRecurrsive" element={<TreeAVLRecurrsive />} />
            <Route path="/treeAVLItterative" element={<TreeAVLItterative />} />
            <Route path="/treeRBTRecurrsive" element={<TreeRBTRecurrsive />} />
            <Route path="/treeRBTItterative" element={<TreeRBTItterative />} />
            <Route path="/treeSplayTreeRecurrsive" element={<TreeSplayTreeRecurrsive />} />
            <Route path="/treeSplayTreeItterative" element={<TreeSplayTreeItterative />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRouter