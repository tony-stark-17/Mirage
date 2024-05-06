import {  Button, Divider, Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
const ManageVehicles = () => {
    return(
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <div className="bg-black bg-dot-white/[0.2] h-[100%] px-10 py-10">
                <h3 className="text-white font-[Poppins] text-3xl font-semibold text-end">Manage Vehicles</h3>
                <Divider className="bg-slate-200 opacity-50 my-8"/>
                <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                <Table aria-label="Example static collection table" className="text-white scrollbar-hide font-[Poppins]" isHeaderSticky={true} classNames={{
                    base: "max-h-[80vh]",
                    wrapper: 'scrollbar-hide',
                }}>
                    <TableHeader>
                        <TableColumn>Brand</TableColumn>
                        <TableColumn>Model</TableColumn>
                        <TableColumn>Color</TableColumn>
                        <TableColumn>Price</TableColumn>
                        <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="2">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="3">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>Rolls Royce</TableCell>
                                <TableCell>Spectre</TableCell>
                                <TableCell>English White</TableCell>
                                <TableCell>10000</TableCell>
                                <TableCell className="flex gap-1">
                                    <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                        <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                    </Button>    
                                    <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                        <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                    </Button>
                                </TableCell>
                        </TableRow>
                        <TableRow key="1">
                            <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="2">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="3">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>Rolls Royce</TableCell>
                                <TableCell>Spectre</TableCell>
                                <TableCell>English White</TableCell>
                                <TableCell>10000</TableCell>
                                <TableCell className="flex gap-1">
                                    <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                        <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                    </Button>    
                                    <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                        <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                    </Button>
                                </TableCell>
                        </TableRow>
                        <TableRow key="1">
                            <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="2">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="3">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>Rolls Royce</TableCell>
                                <TableCell>Spectre</TableCell>
                                <TableCell>English White</TableCell>
                                <TableCell>10000</TableCell>
                                <TableCell className="flex gap-1">
                                    <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                        <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                    </Button>    
                                    <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                        <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                    </Button>
                                </TableCell>
                        </TableRow>
                        <TableRow key="1">
                            <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="2">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="3">
                        <TableCell>Rolls Royce</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell>English White</TableCell>
                            <TableCell>10000</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell>Rolls Royce</TableCell>
                                <TableCell>Spectre</TableCell>
                                <TableCell>English White</TableCell>
                                <TableCell>10000</TableCell>
                                <TableCell className="flex gap-1">
                                    <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                        <Icon icon="material-symbols:edit" className="w-full h-full"/>
                                    </Button>    
                                    <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                        <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                    </Button>
                                </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </motion.div>
            </div>
        </div>
    )
}

export default ManageVehicles;