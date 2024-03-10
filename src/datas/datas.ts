import { toPascalCase } from "./utilities";

export const dsTypes = ['Home',
    "Stack",
    "Queue:- Circular -Queue",
    "Queue:- Regular -Queue",
    "Queue:- Priority -Queue",
    "Queue:- Dequeue",
    "Linked-List: - Singly-Linked-List",
    "Linked-List: - Doubly-Linked-List",
    "Linked-List: - Circular-Singly-Linked-List",
    "Linked-List: - Circular-Doubly-Linked-List",
    "Map: - Data-Structure",
    "Set: - Data-Structure",
    "Hash Table",
    "Tree: - BST - Recurrsive",
    "Tree: - BST - Itterative",
    "Tree: - AVL - Recurrsive",
    "Tree: - AVL - Itterative",
    "Tree: - RBT - Recurrsive",
    "Tree: - RBT - Itterative",
    "Tree: - Splay-tree - Recurrsive",
    "Tree: - Splay-tree - Itterative"].map(e => e.toLowerCase().replaceAll(" ", ""));

export const drawerLinks = dsTypes.map(e => toPascalCase(e).replaceAll("-", " "));

export const titles = dsTypes.map(e => toPascalCase(e).replaceAll("-", " - "));
export type TTitle = typeof titles[number];

export const fileNames = dsTypes.map(e => toPascalCase(e).replace(":", ''));
export type TFileName = typeof fileNames[number];