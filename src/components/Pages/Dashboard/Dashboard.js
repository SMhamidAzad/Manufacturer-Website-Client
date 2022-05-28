import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link className='font-medium' to='/dashboard'>My Orders</Link></li>
                    <li><Link className='font-medium' to='/dashboard/review'>Add a Review</Link></li>
                    <li><Link className='font-medium' to='/dashboard/profile'>My Profile</Link></li>
                    {
                        admin
                        &&
                        <>
                            <li><Link className='font-medium' to='/dashboard/adminMake'>Make Admin</Link></li>
                            <li><Link className='font-medium' to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link className='font-medium' to='/dashboard/manageProduct'>Manage Product</Link></li>
                            <li><Link className='font-medium' to='/dashboard/manageOrder'>Manage Order</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;