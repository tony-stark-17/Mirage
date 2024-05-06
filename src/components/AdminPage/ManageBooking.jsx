import {  Button, Divider, Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
const ManageBooking = () => {
    return(
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <div className="bg-black bg-dot-white/[0.2] h-[100%] px-10 py-10">
                <h3 className="text-white font-[Poppins] text-3xl font-semibold text-end">Manage Bookings</h3>
                <Divider className="bg-slate-200 opacity-50 my-8"/>
                <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                <Table aria-label="Example static collection table" className="text-white scrollbar-hide font-[Poppins]" isHeaderSticky={true} classNames={{
                    base: "max-h-[80vh]",
                    wrapper: 'scrollbar-hide',
                }}>
                    <TableHeader>
                        <TableColumn>Customer Name</TableColumn>
                        <TableColumn>Model</TableColumn>
                        <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>Tony Stark</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="clarity:clipboard-solid" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="2">
                        <TableCell>Tony Stark</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="clarity:clipboard-solid" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>Tony Stark</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="clarity:clipboard-solid" className="w-full h-full"/>
                                </Button>    
                                <Button isIconOnly aria-label="Take a photo" size="sm" className="p-2 bg-red-600">
                                    <Icon icon="material-symbols:delete" className="w-full h-full"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                        <TableCell>Tony Stark</TableCell>
                            <TableCell>Spectre</TableCell>
                            <TableCell className="flex gap-1">
                                <Button isIconOnly color="primary" aria-label="Like" size="sm" className="p-2">
                                    <Icon icon="clarity:clipboard-solid" className="w-full h-full"/>
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

export default ManageBooking;