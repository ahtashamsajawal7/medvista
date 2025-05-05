// import React, {useState } from 'react'
// import './Add.css'
// import { assets } from '../../assets/assets'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Add = ({url}) => {

//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name:'',
//         description:'',
//         price:'',
//         category:'Antibiotics'
//     })

//     const onChangeHandler = (event) =>{
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data=>({...data,[name]:value}))
//     }

//     const onSubmitHandler = async (event) =>{
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('name', data.name)
//         formData.append('description', data.description)
//         formData.append('price', Number(data.price))
//         formData.append('category', data.category)
//         formData.append('image', image)
//         const response = await axios.post(`${url}/api/medicine/add`, formData);

//         if(response.data.success){
//             setData({
//                 name:'',
//                 description:'',
//                 price:'',
//                 category:'Antibiotics'
//             })
//             setImage(false);
//             toast.success(response.data.message)
//         }else{
//             toast.error(response.data.message)
//         }
//     }

//   return (
//     <div className='add'>
//         <form  className="flex-col" onSubmit={onSubmitHandler}>
//             <div className="add-img-upload flex-col">
//                 <p>Upload Image</p>
//                 <label htmlFor="image">
//                     <img src={image? URL.createObjectURL(image):assets.upload_area} alt="" />
//                 </label>
//                 <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
//             </div>
//             <div className="add-product-name flex-col">
//                 <p>Product name</p>
//                 <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
//             </div>
//             <div className="add-product-description flex-col">
//                 <p>Product description</p>
//                 <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write content here' required></textarea>
//             </div>
//             <div className="add-category-price">
//                 <div className="add-category flex-col">
//                     <p>Product category</p>
//                     <select onChange={onChangeHandler}  name="category"> 
//                         <option value="Antibiotics">Antibiotics</option>
//                         <option value="Analgesics">Analgesics</option> 
//                          {/* //relief pain */}
//                         <option value="Antihistamines">Antihistamines</option>
//                         {/* antiallergics */}
//                         <option value="Cardiovascular">Cardiovascular</option>
//                         <option value="Diabetic">Diabetic</option>
//                         <option value="Respiratoric">Respiratoric</option>
//                         <option value="Controlled Substances">Controlled Substances</option>
//                         <option value="Others">Others</option>
//                     </select>
//                 </div>
//                 <div className="add-price flex-col">
//                     <p>Product price</p>
//                     <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20'/>
//                 </div>
//             </div>
//             <button type='submit' className='add-btn'>ADD</button>
//         </form>
//     </div>
//   )
// }

// export default Add

// import React, { useState, useEffect } from 'react';
// import './Add.css';
// import { assets } from '../../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Add = ({ url }) => {
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: 'Antibiotics'
//   });
//   const [isDonating, setIsDonating] = useState(false);

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('description', data.description);
//     formData.append('price', Number(data.price));
//     formData.append('category', data.category);
//     formData.append('image', image);

//     const response = await axios.post(`${url}/api/medicine/add`, formData);

//     if (response.data.success) {
//       setData({
//         name: '',
//         description: '',
//         price: '',
//         category: 'Antibiotics'
//       });
//       setImage(false);
//       toast.success(response.data.message);
//     } else {
//       toast.error(response.data.message);
//     }
//   };

//   // UseEffect for animations or effects
//   useEffect(() => {
//     // Smooth fade-in effect for the form
//     const form = document.querySelector('.add form');
//     form.classList.add('fade-in');

//     // Image preview when selected
//     const imageInput = document.querySelector('input[type="file"]');
//     const imgPreview = document.querySelector('.add-img-upload img');

//     imageInput.addEventListener('change', function () {
//       const file = imageInput.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//           imgPreview.src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//       }
//     });

//     // Handle donation toggle (sets price to 0 and disables input)
//     const priceInput = document.querySelector('.add-price input');
//     const donationTag = document.querySelector('.donation-tag');

//     if (isDonating) {
//       priceInput.value = '0';
//       priceInput.setAttribute('disabled', 'true');
//       donationTag.classList.add('show');
//     } else {
//       priceInput.removeAttribute('disabled');
//       donationTag.classList.remove('show');
//     }
//   }, [isDonating]);

//   return (
//     <div className='add'>
//       <form className='flex-col' onSubmit={onSubmitHandler}>
//         <div className='add-img-upload flex-col'>
//           <p>Upload Image</p>
//           <label htmlFor='image'>
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=''
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type='file'
//             id='image'
//             hidden
//             required
//           />
//         </div>
//         <div className='add-product-name flex-col'>
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type='text'
//             name='name'
//             placeholder='Type Here'
//           />
//         </div>
//         <div className='add-product-description flex-col'>
//           <p>Product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name='description'
//             rows='6'
//             placeholder='Write content here'
//             required
//           ></textarea>
//         </div>
//         <div className='add-category-price'>
//           <div className='add-category flex-col'>
//             <p>Product category</p>
//             <select onChange={onChangeHandler} name='category'>
//               <option value='Antibiotics'>Antibiotics</option>
//               <option value='Analgesics'>Analgesics</option>
//               <option value='Antihistamines'>Antihistamines</option>
//               <option value='Cardiovascular'>Cardiovascular</option>
//               <option value='Diabetic'>Diabetic</option>
//               <option value='Respiratoric'>Respiratoric</option>
//               <option value='Controlled Substances'>Controlled Substances</option>
//               <option value='Others'>Others</option>
//             </select>
//           </div>
//           <div className='add-price flex-col'>
//             <p>Product price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type='number'
//               name='price'
//               placeholder='$20'
//             />
//           </div>
//         </div>
//         {/* Donation checkbox */}
//         <div className='donate-checkbox'>
//           <input
//             type='checkbox'
//             id='donate'
//             checked={isDonating}
//             onChange={() => setIsDonating((prev) => !prev)}
//           />
//           <label htmlFor='donate'>Donate Product</label>
//         </div>

//         {/* Donation Tag */}
//         <div className='donation-tag'>
//           <span className='donation-label'>Donation</span>
//         </div>

//         <button type='submit' className='add-btn'>
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

{/* <div className='add-expiry-quantity'>
          <div className='add-expiry flex-col'>
            <p>Expiry Date</p>
            <input
              onChange={onChangeHandler}
              value={data.expiryDate}
              type='date'
              name='expiryDate'
              required
            />
          </div>
          <div className='add-quantity flex-col'>
            <p>Quantity</p>
            <input
              onChange={onChangeHandler}
              value={data.quantity}
              type='number'
              name='quantity'
              placeholder='0'
              required
            />
          </div>
        </div> */}

// export default Add;


// import React, { useState, useEffect } from 'react';
// import './Add.css';
// import { assets } from '../../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Add = ({ url }) => {
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: 'Antibiotics',
//     expiryDate: '',
//     quantity: ''
//   });
//   const [isDonating, setIsDonating] = useState(false);

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('description', data.description);
//     formData.append('price', Number(data.price));
//     formData.append('category', data.category);
//     formData.append('image', image);
//     formData.append('expiryDate', data.expiryDate);
//     formData.append('quantity', Number(data.quantity));

//     const response = await axios.post(`${url}/api/medicine/add`, formData);

//     if (response.data.success) {
//       setData({
//         name: '',
//         description: '',
//         price: '',
//         category: 'Antibiotics',
//         expiryDate: '',
//         quantity: ''
//       });
//       setImage(false);
//       toast.success(response.data.message);
//     } else {
//       toast.error(response.data.message);
//     }
//   };

//   // UseEffect for animations or effects
//   useEffect(() => {
//     // Smooth fade-in effect for the form
//     const form = document.querySelector('.add form');
//     form.classList.add('fade-in');

//     // Image preview when selected
//     const imageInput = document.querySelector('input[type="file"]');
//     const imgPreview = document.querySelector('.add-img-upload img');

//     imageInput.addEventListener('change', function () {
//       const file = imageInput.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//           imgPreview.src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//       }
//     });

//     // Handle donation toggle (sets price to 0 and disables input)
//     const priceInput = document.querySelector('.add-price input');
//     const donationTag = document.querySelector('.donation-tag');

//     if (isDonating) {
//       priceInput.value = '0';
//       priceInput.setAttribute('disabled', 'true');
//       donationTag.classList.add('show');
//     } else {
//       priceInput.removeAttribute('disabled');
//       donationTag.classList.remove('show');
//     }
//   }, [isDonating]);

//   return (
//     <div className='add'>
//       <form className='flex-col' onSubmit={onSubmitHandler}>
//         <div className='add-img-upload flex-col'>
//           <p>Upload Image</p>
//           <label htmlFor='image'>
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=''
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type='file'
//             id='image'
//             hidden
//             required
//           />
//         </div>
//         <div className='add-product-name flex-col'>
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type='text'
//             name='name'
//             placeholder='Type Here'
//           />
//         </div>
//         <div className='add-product-description flex-col'>
//           <p>Product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name='description'
//             rows='6'
//             placeholder='Write content here'
//             required
//           ></textarea>
//         </div>
//         <div className='add-category-price'>
//           <div className='add-category flex-col'>
//             <p>Product category</p>
//             <select onChange={onChangeHandler} name='category'>
//               <option value='Antibiotics'>Antibiotics</option>
//               <option value='Analgesics'>Analgesics</option>
//               <option value='Antihistamines'>Antihistamines</option>
//               <option value='Cardiovascular'>Cardiovascular</option>
//               <option value='Diabetic'>Diabetic</option>
//               <option value='Respiratoric'>Respiratoric</option>
//               <option value='Controlled Substances'>Controlled Substances</option>
//               <option value='Others'>Others</option>
//             </select>
//           </div>
//           <div className='add-price flex-col'>
//             <p>Product price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type='number'
//               name='price'
//               placeholder='$'
//             />
//           </div>
//         </div>
        
//         {/* Donation checkbox */}
//         <div className='donate-checkbox'>
//           <input
//             type='checkbox'
//             id='donate'
//             checked={isDonating}
//             onChange={() => setIsDonating((prev) => !prev)}
//           />
//           <label htmlFor='donate'>Donate Product</label>
//         </div>

//         {/* Donation Tag */}
//         <div className='donation-tag'>
//           <span className='donation-label'>Donation</span>
//         </div>

//         <button type='submit' className='add-btn'>
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;




import React, { useState, useEffect } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Antibiotics',
    expiryDate: '',
    quantity: ''
  });
  const [isDonating, setIsDonating] = useState(false);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('name', data.name);
  //   formData.append('description', data.description);
  //   formData.append('price', Number(data.price));
  //   formData.append('category', data.category);
  //   formData.append('image', image);
  //   formData.append('expiryDate', data.expiryDate);
  //   formData.append('quantity', Number(data.quantity));

  //   try {
  //     const response = await axios.post(`${url}/api/medicine/add`, formData);

  //     if (response.data.success) {
  //       setData({
  //         name: '',
  //         description: '',
  //         price: '',
  //         category: 'Antibiotics',
  //         expiryDate: '',
  //         quantity: ''
  //       });
  //       setImage(false);
  //       toast.success(response.data.message);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form', error);
  //     toast.error('Something went wrong. Please try again.');
  //   }
  // };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Check if price and quantity are valid
  if (Number(data.price) < 0) {
    toast.error('Price must be not negative.');
    return;
  }

  if (Number(data.quantity) <= 0) {
    toast.error('Quantity must be greater than zero.');
    return;
  }
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price)); // Ensure price is a number
    formData.append('category', data.category);
    formData.append('image', image);
    formData.append('expiryDate', data.expiryDate); // Send expiryDate as a string (YYYY-MM-DD)
    formData.append('quantity', Number(data.quantity)); // Ensure quantity is a number

    try {
        const response = await axios.post(`${url}/api/medicine/add`, formData);

        if (response.data.success) {
            setData({
                name: '',
                description: '',
                price: '',
                category: 'Antibiotics',
                expiryDate: '',
                quantity: ''
            });
            setImage(false);
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        console.error('Error submitting form', error);
        toast.error('Something went wrong. Please try again.');
    }
};

  useEffect(() => {
    const form = document.querySelector('.add form');
    form.classList.add('fade-in');

    const imageInput = document.querySelector('input[type="file"]');
    const imgPreview = document.querySelector('.add-img-upload img');

    imageInput.addEventListener('change', function () {
      const file = imageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          imgPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    const priceInput = document.querySelector('.add-price input');
    const donationTag = document.querySelector('.donation-tag');

    if (isDonating) {
      priceInput.value = '0';
      priceInput.setAttribute('disabled', 'true');
      donationTag.classList.add('show');
    } else {
      priceInput.removeAttribute('disabled');
      donationTag.classList.remove('show');
    }
  }, [isDonating]);

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        {/* Image Upload */}
        
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=''
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </div>

        {/* Product Name */}
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            name='name'
            placeholder='Type Here'
            required
          />
        </div>

        {/* Product Description */}
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name='description'
            rows='6'
            placeholder='Write content here'
            required
          ></textarea>
        </div>

        {/* Category and Price */}
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select onChange={onChangeHandler} name='category' value={data.category}>
              <option value='Antibiotics'>Antibiotics</option>
              <option value='Analgesics'>Analgesics</option>
              <option value='Antihistamines'>Antihistamines</option>
              <option value='Cardiovascular'>Cardiovascular</option>
              <option value='Diabetic'>Diabetic</option>
              <option value='Respiratoric'>Respiratoric</option>
              <option value='Controlled Substances'>Controlled Substances</option>
              <option value='Others'>Others</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type='number'
              name='price'
              placeholder='$'
              required
            />
          </div>
        </div>

        {/* Expiry Date */}
        <div className='add-expiry-date flex-col'>
          <p>Expiry Date</p>
          <input
            onChange={onChangeHandler}
            value={data.expiryDate}
            type='date'
            name='expiryDate'
            required
          />
        </div>

        {/* Quantity */}
        <div className='add-quantity flex-col'>
          <p>Quantity</p>
          <input
            onChange={onChangeHandler}
            value={data.quantity}
            type='number'
            name='quantity'
            placeholder='Enter quantity'
            required
          />
        </div>

        {/* Donation Checkbox */}
        <div className='donate-checkbox'>
          <input
            type='checkbox'
            id='donate'
            checked={isDonating}
            onChange={() => setIsDonating((prev) => !prev)}
          />
          <label htmlFor='donate'>Donate Product</label>
        </div>

        {/* Donation Tag */}
        <div className='donation-tag'>
          <span className='donation-label'>Donation</span>
        </div>

        {/* Submit Button */}
        <button type='submit' className='add-btn'>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
