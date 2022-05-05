import { Link } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems';
import Myitemspro from './Myitemspro';
import { BsArrowRight } from 'react-icons/bs';
import Footer from '../../Footer/Footer';

const Myitems = () => {

    const [items, setItems] = UseItems();

    return (
        <>
        <div className='container overflow-hidden mb-5' id='inventory'>
            <h2 className='text-success text-center fw-bolder mt-3 pt-3'>Inventory Stock Items</h2> <hr className=' mb-5'/>
            <div className='row gx-5 gy-5'>
                {
                    items.map(item => <Myitemspro key={item._id} item={item}></Myitemspro>)
                }
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