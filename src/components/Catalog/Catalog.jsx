import axios from "axios";
import { Select, SelectItem, Button } from "@nextui-org/react";
import { AuroraBackground } from "../ui/aurora-background";
import ProductCard from "./ProductCard";

import classes from "./Catalog.module.css";
import { useState, useEffect } from "react";

const Catalog = () => {
    let segments = ['Hatchback', 'Sedan', 'SUV', 'Crossover', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck', 'Minivan', 'Bus', 'Pickup', 'Off-road', 'Electric', 'Hybrid', 'Luxury', 'Sports', 'Super', 'Muscle', 'Classic', 'Exotic'];
    let fuels = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
    let filterBrand = "";
    let filterSegment = "";
    let filterFuel = "";
    let filterPrice = "";
    const [brands, setBrands] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

    const fetchVehicles = async () => {
        try {
            let tempBrands = [];
            const response = await axios.get('http://localhost:3000/vehicles');
            const getBrands = await axios.get('http://localhost:3000/brands');
            setVehicles(response.data)
            const { data } = getBrands;
            data.map((brand) => {
                tempBrands.push(brand.brand);
            });
            setBrands(tempBrands)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchVehicles()
    },[])

    useEffect(()=>{
        setFilteredVehicles(vehicles)
    }, [vehicles])

    const enableScroll = () => {
        //  document.removeEventListener('wheel', preventDefault, false)
    }
    const disableScroll = () => {
        // document.addEventListener('wheel', preventDefault, {
        //   passive: false,
        // })
    }
    const preventDefault = (e) => {
        e = e || window.event
        if (e.preventDefault) {
          e.preventDefault()
        }
        e.returnValue = false
    }

    const populateBrands = () => {
        return brands.map((brand, index) => {
            return <SelectItem key={brand}>{brand}</SelectItem>;
        });
    }

    const populateSegments = () => {
        return segments.map((segment, index) => {
            return <SelectItem key={segment}>{segment}</SelectItem>;
        });
    }

    const populateFuelTypes = () => {
        return fuels.map((fuel, index) => {
            return <SelectItem key={fuel}>{fuel}</SelectItem>;
        });
    }

    const vehicleList = () => {
        return filteredVehicles.map((vehicle, index) => {
            return <ProductCard key={vehicle.v_id} details={vehicle} />;
        });
    }

    const filterList = () => {
        let tempVehicles = [...vehicles];
        console.log(filterBrand, filterSegment, filterFuel, filterPrice)
        if (filterBrand !== "") {
            tempVehicles = tempVehicles.filter((vehicle) => vehicle.brand === filterBrand);
        }
        if (filterSegment !== "") {
            tempVehicles = tempVehicles.filter((vehicle) => vehicle.segment === filterSegment);
        }
        if (filterFuel !== "") {
            tempVehicles = tempVehicles.filter((vehicle) => vehicle.fuel === filterFuel);
        }
        if (filterPrice !== "") {
            tempVehicles = tempVehicles.sort((a, b) => {
                if (filterPrice === "low") {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
        }
        console.log(tempVehicles)
        setFilteredVehicles(tempVehicles);
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
            onChange={(e) => filterBrand = e.target.value}
            >
                {populateBrands()}
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
            onChange={(e) => filterSegment = e.target.value}
            >
                {populateSegments()}
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
            onChange={(e) => filterFuel = e.target.value}
            >
                {populateFuelTypes()}
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
            onChange={(e) => filterPrice = e.target.value}
            >
                <SelectItem key={'low'}>Low to High</SelectItem>
                <SelectItem key={'high'}>High to Low</SelectItem>
            </Select>
            <Button className="bg-red-700 rounded-sm relative top-[5%] font-[Poppins]" onClick={filterList}>
            Filter
            </Button>
        </div>
        <div className={`${classes["product-container"]}`} onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            {vehicleList()}
        </div>
        <AuroraBackground className="absolute top-[100vh]" />
        </div>
    );
};

export default Catalog;
