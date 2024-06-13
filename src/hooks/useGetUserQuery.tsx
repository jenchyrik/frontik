'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchUserData } from '../services/fetch';

const useGetUserQuery = () => {
    return useQuery({   
        // queryFn: () => fetchCategories(),
        queryFn: fetchUserData,
        queryKey: ['GetUser'],
        staleTime: 1000 * 5,
    });
};

export { useGetUserQuery };