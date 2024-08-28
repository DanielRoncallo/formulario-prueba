'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from '../views/home';
 
 
 
const queryClient = new QueryClient()

const TestPage = () => {
  return (
    <QueryClientProvider client={queryClient}>      
        <Home/>      
    </QueryClientProvider>
  );
};

export default TestPage;