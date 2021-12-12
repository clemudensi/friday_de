import { VFC, useEffect } from 'react';
import { Dropdown } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getMakes } from 'features';
import { RootState } from '../store';

interface CarMakeProps {
    onChange:  (arg: React.ChangeEvent<HTMLSelectElement>) => void;
    urlPath: string;
}

const CarMake: VFC<CarMakeProps> = ({ onChange }) => {
    const { makes } = useSelector( (state: RootState) => state.makes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMakes({ urlPath: 'makes'}))
    }, [dispatch]);

    return (
        <Dropdown cars={makes} onChange={onChange} name="make" />
    )
};

export { CarMake };