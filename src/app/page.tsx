"use client";
import TreeView from './component/TreeView'
import DataTable from './component/DataTable'
import { useState } from 'react'

export default function Home() {
  const [selectedPart, setSelectedPart] = useState<Part | undefined>();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto"
            href="#form"
          >
           Form
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto"
            href="#data"
          >
           Data
          </a>
        </div>
      </div>

      <div className="relative mb-32 py-12 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] text-xl">
        <h1 className='text-3xl'>Qbuild Challenge</h1>
      </div>
      <div id='data' className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <TreeView
          setSelectedPart={setSelectedPart}
          selectedPart={selectedPart} />  
      </div>
      <div id='data' className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <DataTable parts={selectedPart?.children ?? []} />  
      </div>
    </main>
  )
}
