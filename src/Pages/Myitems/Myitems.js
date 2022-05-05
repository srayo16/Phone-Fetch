import { Link } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems';
import { BsArrowRight } from 'react-icons/bs';
import Footer from '../../Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Shared/Firebase.init';
import './Myitems.css';

const Myitems = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const [items, setItems] = UseItems();

    return (
        <>
            <div className='container overflow-hidden mb-5' id='inventory'>
                <h2 className='text-success text-center fw-bolder mt-3 pt-3'>Welcome to Stock Items</h2> <hr className=' mb-3' />

                <div className='text-center shadow-lg p-3 mb-5 bg-body rounded fixedWidthforRespo mx-auto'>
                    <h3>Your Name: {user?.displayName}</h3>
                    <p>Email Address: {user?.email}</p>
                </div>



                <div className='text-center mt-4 mb-5'>
                    <Link to='/manageinventoreis' className='text-decoration-none fw-bold fst-italic fs-5z'>Manage Inventories <BsArrowRight></BsArrowRight></Link>
                </div>

            </div>

            <Footer></Footer>
        </>
    );
};

export default Myitems;