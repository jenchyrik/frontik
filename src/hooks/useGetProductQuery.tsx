'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchProductcard } from '../services/fetch';

const useGetProductQuery = () => {
    return useQuery({   
        // queryFn: () => fetchCategories(),
        queryFn: fetchProductcard,
        queryKey: ['product'],
        staleTime: 1000 * 5,
    });
};

export { useGetProductQuery };