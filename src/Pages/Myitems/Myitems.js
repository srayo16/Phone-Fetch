import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Shared/Firebase.init';
import './Myitems.css';
import { useEffect, useState } from 'react';
import Myitemspro from './Myitemspro';
import { signOut } from 'firebase/auth';
import AxiosPersonal from '../../Api/AxiosPersonal';

const Myitems = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleProducts = async () => {

            const email = user.email;
            const url = `https://peaceful-mountain-77766.herokuapp.com/addone?email=${email}`;
            try {
                const { data } = await AxiosPersonal.get(url);
                setProducts(data);
            }
            catch (error) {
                // console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }

        handleProducts();

    }, [navigate, user.email])

    let deleteUi = id => {
        let remaining = products.filter(item => item._id !== id);
        // console.log(items.filter(item => item._id));
        setProducts(remaining);
    }

    return (
        <div className='container overflow-hidden mb-5' id='inventory' style={{ height: products.length > 0 ? 'auto' : '700px' }}>
            <h2 className='text-success text-center fw-bolder mt-3 pt-3'>Welcome to Stock Items</h2> <hr className=' mb-3' />

            <div className='text-center shadow-lg p-3 mb-5 bg-body rounded fixedWidthforRespo mx-auto'>
                <h3>Your Name: {user?.displayName}</h3>
                <p>Email Address: {user?.email}</p>
            </div>
            <h2 className='text-success text-center fw-bolder mt-2 pb-3'>Your Total Stocks: {products.length}</h2>
            <div className='container overflow-hidden'>
                <div className='row gx-5 gy-5'>
                    {
                        products.map(item => <Myitemspro key={item._id} item={item} deleteUi={deleteUi}></Myitemspro>)
                    }
                </div>
            </div>


            <div className='text-center mt-4 mb-5'>
                <Link to='/manageinventoreis' className='text-decoration-none fw-bold fst-italic fs-5z'>Manage Inventories <BsArrowRight></BsArrowRight></Link>
            </div>

        </div>

    );
};

export default Myitems;