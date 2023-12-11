import React from 'react';

type DataTableProps = {
    parts: Part[] | undefined;
}

const DataTable: React.FC<DataTableProps> = ({ parts }) => {
    return (
        <div className='relative rounded-xl overflow-auto'>
        <div className='shadow-sm overflow-x-auto my-8'>
        <table className='border-collapse table-auto w-full text-sm'>
            <thead>
                <tr>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>PARENT_NAME</th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>COMPONENT_NAME</th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>PART_NUMBER</th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>TITLE</th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>QUANTITY</th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>TYPE</th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>ITEM</th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>MATERIAL</th>
                </tr>
            </thead>
            <tbody className='bg-white dark:bg-slate-800'>
                {parts?.map((part) => (
                    <tr key={part.id}>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.parentName}</td>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.componentName}</td>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.partNumber}</td>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.title}</td>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.quantity}</td>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.type}</td>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.item}</td>
                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{part.material}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default DataTable;