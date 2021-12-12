import { VFC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarList } from 'components';
import { CarMake, CarModel } from 'pages';
import { getVehicles } from 'features';
import { RootState } from '../store';

interface VehicleProps {
    make: string;
    model: string;
}

const Vehicles: VFC = () => {
    const [ activeCollapse, setActiveCollapse ] = useState('circulars');
    const [carMake, setCarMake] = useState<VehicleProps>({ make: '', model: ''});
    const { vehicles } = useSelector( (state: RootState) => state.vehicles);
    const dispatch = useDispatch();

    const handleExpandCollapse = (name: string) => {
        setActiveCollapse(name)
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCarMake({
            ...carMake,
            [e.target.name]: e?.target?.value
        })
    };

    const { make, model } = carMake;

    useEffect(() => {
        make && model && dispatch(getVehicles({ params: { make: make, model: model }, urlPath: 'vehicles'}))
    }, [make, model, dispatch]);

    return (
        <>
            <CarMake onChange={handleSelect} urlPath="makes" />
            <CarModel onChange={handleSelect} urlPath="models" make={make} />
            <CarList cars={vehicles} handleExpandCollapse={handleExpandCollapse} activeCollapse={activeCollapse} />
        </>
    )
};

export { Vehicles }