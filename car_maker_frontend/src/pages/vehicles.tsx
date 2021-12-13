import { VFC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarList, SearchBar, SectionContainer } from 'components';
import { CarMake, CarModel } from 'pages';
import { getVehicles } from 'features';
import { useDebounced } from 'hooks';
import { searchFilter } from 'utils';
import { Cars } from 'types';
import { RootState } from '../store';

interface VehicleProps {
    make: string;
    model: string;
    inputValue: string;
}

const Vehicles: VFC = () => {
    const [ activeCollapse, setActiveCollapse ] = useState('circulars');
    const [ carMake, setCarMake ] = useState<VehicleProps>({ inputValue: '', make: '', model: ''});
    const [ filteredVehicle, setFilteredVehicle] = useState<Cars[] | undefined>([]);
    const { vehicles } = useSelector( (state: RootState) => state.vehicles);
    const dispatch = useDispatch();

    const handleExpandCollapse = (name: string) => {
        setActiveCollapse(name)
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setCarMake({
            ...carMake,
            [e.target.name]: e?.target?.value
        })
    };

    const searchInput = useRef<HTMLInputElement | null>(null);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarMake(prevState => ({
            ...prevState,
            inputValue: event.target.value
        }))
    };

    const handleClearText = (): void => {
        setCarMake(prevState => ({
            ...prevState,
            focused: true,
            inputValue: ''
        }));
        searchInput?.current?.focus();
    };

    const { make, model } = carMake;

    useEffect(() => {
        make && model && dispatch(
            getVehicles({ params: { make: make, model: model }, urlPath: 'vehicles'})
        );
    }, [make, model, dispatch]);

    const inputDebounced = useDebounced(carMake?.inputValue, 500);

    useEffect(() => {
        if (!inputDebounced) {
            setFilteredVehicle(vehicles);
        } else {
            setFilteredVehicle(
                vehicles && searchFilter(
                    vehicles, carMake?.inputValue, ['bodyType', 'engineCapacity', 'enginePowerPS', 'fuelType', 'make', 'model']
                )
            );
        }
    }, [carMake?.inputValue, inputDebounced, vehicles]);

    return (
        <>
            <SectionContainer>
                <CarMake onChange={handleSelect} urlPath="makes" />
                <CarModel onChange={handleSelect} urlPath="models" make={make} />
                <SearchBar
                    color="grey"
                    cursor={true}
                    inputValue={carMake?.inputValue}
                    onChange={onChange}
                    handleClearText={handleClearText}
                    searchInput={searchInput}
                    size={34}
                />
            </SectionContainer>
            <CarList cars={filteredVehicle} handleExpandCollapse={handleExpandCollapse} activeCollapse={activeCollapse} />
        </>
    )
};

export { Vehicles }