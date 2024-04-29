import { Select, SelectItem, Button } from "@nextui-org/react";
import { AuroraBackground } from "../ui/aurora-background";
import ProductCard from "./ProductCard";

import classes from "./Catalog.module.css";

const Catalog = () => {
    const enableScroll = () => {
        document.removeEventListener('wheel', preventDefault, false)
    }
    const disableScroll = () => {
        document.addEventListener('wheel', preventDefault, {
          passive: false,
        })
    }
    const preventDefault = (e) => {
        e = e || window.event
        if (e.preventDefault) {
          e.preventDefault()
        }
        e.returnValue = false
    }

    return (
        <div className={`${classes["catalog-container"]}`}>
        <div className={`${classes["filter-container"]}`}>
            <Select
            label="Brand"
            className="max-w-xs"
            classNames={{
                base: "font-[Poppins]",
                label: "text-white",
                trigger: "rounded-sm bg-white bg-opacity-25 text-white",
                popoverContent: "rounded-md font-[Poppins]",
            }}
            >
            <SelectItem key="1">Mercedes-Benz</SelectItem>
            <SelectItem key="2">BMW</SelectItem>
            <SelectItem key="3">Rolls Royce</SelectItem>
            </Select>
            <Select
            label="Segment"
            className="max-w-xs"
            classNames={{
                base: "font-[Poppins]",
                label: "text-white",
                trigger: "rounded-sm bg-white bg-opacity-25 text-white",
                popoverContent: "rounded-md font-[Poppins]",
            }}
            >
            <SelectItem key="1">Tony</SelectItem>
            </Select>
            <Select
            label="Fuel"
            className="max-w-xs"
            classNames={{
                base: "font-[Poppins]",
                label: "text-white",
                trigger: "rounded-sm bg-white bg-opacity-25 text-white",
                popoverContent: "rounded-md font-[Poppins]",
            }}
            >
            <SelectItem key="1">Tony</SelectItem>
            </Select>
            <Select
            label="Price"
            className="max-w-xs"
            classNames={{
                base: "font-[Poppins]",
                label: "text-white",
                trigger: "rounded-sm bg-white bg-opacity-25 text-white",
                popoverContent: "rounded-md font-[Poppins]",
            }}
            >
            <SelectItem key="1">Tony</SelectItem>
            </Select>
            <Button className="bg-red-700 rounded-sm relative top-[5%] font-[Poppins]">
            Filter
            </Button>
        </div>
        <div className={`${classes["product-container"]}`} onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        <AuroraBackground className="absolute top-[100vh]" />
        </div>
    );
};

export default Catalog;
