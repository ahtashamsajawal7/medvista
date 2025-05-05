// // import React, { useContext } from 'react'
// // import './MedicineDisplay.css'
// // import { StoreContext } from '../context/StoreContext'
// // import MedicineItem from '../MedicineItem/MedicineItem'

// // const MedicineDisplay = ({category}) => {

// //     const {medicine_list} = useContext(StoreContext)
// //   return (
// //     <div className='medicine-display' id='medicine-display'>
// //         <h2>Our Listings</h2>
// //         <div className="medicine-display-list">
// //             {medicine_list.map((item,index)=>{
// //               if(category==='All' || category===item.category){
// //                 return <MedicineItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
// //               }
// //                             })}
// //         </div>
// //     </div>
// //   )
// // }

// // export default MedicineDisplay
// import React, { useContext } from 'react'
// import './MedicineDisplay.css'
// import { StoreContext } from '../context/StoreContext'
// import MedicineItem from '../MedicineItem/MedicineItem'

// const MedicineDisplay = ({ category }) => {
//   const { medicine_list } = useContext(StoreContext)

//   return (
//     <div className='medicine-display' id='medicine-display'>
//       <h2>Our Listings</h2>
//       <div className='medicine-display-list'>
//         {medicine_list.map((item, index) => {
//           if (category === 'All' || category === item.category) {
//             return (
//               <div className='medicine-item-wrapper' key={index}>
//                 <MedicineItem
//                   id={item._id}
//                   name={item.name}
//                   description={item.description}
//                   price={item.price}
//                   image={item.image}
//                 />
//                 {item.price === 0 && (
//                   <div className='donation-tag'>🎗️ Donation</div>
//                 )}
//               </div>
//             )
//           }
//         })}
//       </div>
//     </div>
//   )
// }

// export default MedicineDisplay


import React, { useContext } from 'react';
import './MedicineDisplay.css';
import { StoreContext } from '../context/StoreContext';
import MedicineItem from '../MedicineItem/MedicineItem';

const MedicineDisplay = ({ category }) => {
  const { medicine_list } = useContext(StoreContext);

  return (
    <div className='medicine-display' id='medicine-display'>
      <h2>Top Selling</h2>
      <div className='medicine-display-list'>
        {medicine_list.map((item, index) => {
          // Check if the category matches or if category is 'All'
          if (category === 'All' || category === item.category) {
            return (
              <div className='medicine-item-wrapper' key={index}>
                <MedicineItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
                {/* Display additional information */}
                <div className='medicine-item-details'>
                  <p>
                    <strong>Expiry Date:</strong>{' '}
                    {item.expiryDate
                      ? new Date(item.expiryDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : 'N/A'}
                  </p>
                  <p>
                    <strong>Available Quantity:</strong> {item.quantity ? item.quantity : 'N/A'}
                  </p>
                </div>
                {/* Donation Tag */}
                {item.price === 0 && (
                  <div className='donation-tag'>🎗️ Donation</div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default MedicineDisplay;
