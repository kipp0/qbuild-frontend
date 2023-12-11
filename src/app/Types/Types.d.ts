type BomRecord = {
    id: number;
    parentName: string;
    quantity: string;
    componentName: string;
}
type PartRecord = {
    id: number;
    name: string;
    type: string;
    item: string;
    partNumber: string;
    title: string;
    material: string;
}

type Part = {
    children?: Part[];
} & Pick<BomRecord, 'parentName' | 'quantity' | 'componentName'> & Omit<PartRecord, 'name'>;

type TreeViewProps = {
    setSelectedPart: (part: Part) => void;
    selectedPart?: Part;
}
