import { VFC } from 'react';
import { Cancel } from '@styled-icons/material'
import { IconProps } from 'types';

const CancelIcon: VFC<IconProps> = ({
    color,
    cursor,
    size,
    title,
    onClick,
}) => (
    <Cancel
        color={color}
        cursor={cursor ? 'pointer' : 'default'}
        size={size}
        title={title}
        onClick={onClick}
    />
);

export { CancelIcon };