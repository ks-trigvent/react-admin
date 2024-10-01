import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import MainLayout from '../layouts/AppLayout';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
        <Route path='' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
    </Route>
  )
)