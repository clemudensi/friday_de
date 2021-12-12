import { VFC, useEffect } from 'react';
import { Dropdown } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getModels } from 'features';
import { RootState } from '../store';

interface CarMakeProps {
    make: string;
    onChange:  (arg: React.ChangeEvent<HTMLSelectElement>) => void;
    urlPath: string;
}

const CarModel: VFC<CarMakeProps> = ({ make, onChange, urlPath }) => {
    const { models } = useSelector( (state: RootState) => state.models);
    const dispatch = useDispatch();

    useEffect(() => {
        make && dispatch(getModels({ params:{ make: make }, urlPath }))
    }, [dispatch, make, urlPath]);

    return (
        <Dropdown cars={models} onChange={onChange} name="model" />
    )
};

export { CarModel };