import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Search } from './components/search';
import "./App.css";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {Form} from "./components/form";

export function App(){
    const query=new QueryClient();
  return (
   <div>
    <QueryClientProvider client={query}>
    <Router>
        <Routes>
            <Route path='/home' element={<Search />}/>
            <Route path="/" element={<Form />}/>
        </Routes>
    </Router>
    </QueryClientProvider>
   </div>
  );
}