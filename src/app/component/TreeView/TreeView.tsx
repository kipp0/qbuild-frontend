"use client";
import React, { useState } from 'react';


const TreeView: React.FC<TreeViewProps> = ({ setSelectedPart, selectedPart }) => {
    const [parts, setParts] = useState<Part[]>([]);
    const [expandedItems, setexpandedItems] = useState<number[]>(parts[0]?.id ? [parts[0].id] : []);

    const toggleExpanded = (item: Part) => {
        if (expandedItems.includes(item.id)) {
            setexpandedItems(expandedItems.filter((id) => id !== item.id));
            setSelectedPart(parts.find((part) => part.componentName === item.parentName) ?? item);
        } else {
            setexpandedItems([...expandedItems, item.id]);
            setSelectedPart(item);
        }
    };

    const sortParts = (parts: Part[]) => {
        const sortedParts = [...parts];

        sortedParts.forEach((part) => {
            if (part.children) {
                part.children.sort((a, b) => {
                    const firstPickedChild = a.children?.length ?? 0;
                    const secondPickedChild = b.children?.length ?? 0;
                    return secondPickedChild - firstPickedChild;
                });
            }
        });

        return sortedParts;
    };
    const fetchTreeViewData = () => {

        fetch('http://localhost:80/treeData')
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                const sortedData = sortParts(data);
                setParts(sortedData);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    const renderPart = (part: Part) => {

        const isExpanded = expandedItems.includes(part.id);
        const classes = `${part.children && 'cursor-pointer'} ${part.componentName === selectedPart?.componentName && 'bg-gray-500'}`;
        return (
            <>
                <a 
                className={`${classes} w-full block p-2`}
                onClick={() => toggleExpanded(part)}>
                    {!part.children?.length ?
                        '' :
                        isExpanded ? '-' : '+'} {part.componentName}
                </a>
                {isExpanded && part.children && (
                    <ul className='ml-10'>
                        {part.children.map((child) => (
                            <li key={child.id} >{renderPart(child)}</li>
                        ))}
                    </ul>
                )}
            </>
        );
    };

    return (
        <div className='grid grid-rows-1 grid-flow-col gap-4'>
            <div className='h-96 w-64 min-w-64 overflow-x-auto'>
                <ul className='h-full'>
                    {parts.map((part) => (
                        <li key={part.id}>{renderPart(part)}</li>
                    ))}
                </ul>
            </div>
            <div className='w-64 min-w-64'>
                <h2>Parent Child Part: {selectedPart?.parentName === '' ? selectedPart?.componentName : selectedPart?.parentName}</h2>
                <h2>Current Part: {selectedPart?.componentName}</h2>

                <div>
                    <button className='flex justify-center border border-gray-400 rounded-md p-2' onClick={() => fetchTreeViewData()}><div>Populate Data In Tree</div></button>
                </div>
            </div>
        </div>
    );
};

export default TreeView;
