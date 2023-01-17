import { Link } from 'react-router-dom';

import OrderList from '../../components/OrderList'
function Order() {

    
  return  (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <OrderList />
    </div>
  )
}

export default Order