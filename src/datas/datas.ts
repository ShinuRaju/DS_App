import { toPascalCase } from "./utilities";

export const dataObj = {
    home: "Home",
    stack: "Stack",
    queueCircularQueue: "Queue: Circular Queue",
    queueRegularQueue: "Queue: Regular Queue",
    queuePriorityQueue: "Queue: Priority Queue",
    queueDeque: "Queue: Dequeue",
    linkedListSinglyLinkedList: "LinkedList:  Singly LinkedList",
    linkedListDoublyLinkedList: "LinkedList:  Doubly LinkedList",
    linkedListCircularSinglyLinkedList: "LinkedList:  Circular Singly LinkedList",
    linkedListCircularDoublyLinkedList: "LinkedList:  Circular Doubly LinkedList",
    mapDS: "Map",
    setDS: "Set",
    hashTable: "Hash Table",
    treeBSTRecurrsive: "Tree: BST - Recurrsive",
    treeBSTItterative: "Tree: BST - Itterative",
    treeAVLRecurrsive: "Tree: AVL - Recurrsive",
    treeAVLItterative: "Tree: AVL - Itterative",
    treeRBTRecurrsive: "Tree: RBT - Recurrsive",
    treeRBTItterative: "Tree: RBT - Itterative",
    treeSplayTreeRecurrsive: "Tree: Splay-tree - Recurrsive",
    treeSplayTreeItterative: "Tree: Splay-tree - Itterative"
}

export const drawerLinks = Object.keys(dataObj);

export type TObjData = keyof typeof dataObj;
