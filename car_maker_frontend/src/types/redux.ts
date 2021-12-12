import { Cars } from './cars';

interface MakeModelState {
    loading: boolean;
    hasErrors: boolean;
    makes?: string[];
    models?: string[];
    vehicles?: Cars[]
}

export type { MakeModelState };