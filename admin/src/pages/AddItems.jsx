import React, { useState } from 'react'
import { assets } from '../assets/admin_assets/assets'
import axios from 'axios'
import { BaseUrl } from '../utils/BaseUrl'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItems = () => {
  const [images, setImages] = useState(Array(5).fill(null));
  const [sizeSelected, setSizeSeleted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: [],
    category: '',
    subcategory: '',
    price: '',
    sizes: [],
    bestseller: false
  })
  const handleImageClick = (index) => {
    document.getElementById(`fileInput${index}`).click();
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
  
    setFormData((prev) => ({
      ...prev,
      image: [...(prev.image || []), file], // Store file, not just file.name
    }));
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Create FormData object for file uploads
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("subcategory", formData.subcategory);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("bestseller", formData.bestseller);
    
    
    formData.sizes.forEach((size) => formDataToSend.append("sizes[]", size));
  
   
    formData.image.forEach((img) => formDataToSend.append("image", img));
  
    try {
      const response = await axios.post(`${BaseUrl}/products/post`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if(response){
        toast.success("Product Inserted Successfully !", {
          position: "top-center"
        });
        setFormData({
           name: '',
          description: '',
          image: [],
          category: '',
          subcategory: '',
          price: '',
          sizes: [],
          bestseller: false
        })
      }
    } catch (error) {
      toast.error("Error in Insertion !", {
        position: "top-center",
      });
      console.error(error);
    }
  };
  
  return (
    <form onSubmit={handleFormSubmit} className=''>
      <div className='flex'>

        <div className='flex-3'>
          <h2 className='ml-2 px-4 py-5 text-gray-900 font-medium '>Upload Image</h2>
          <div className="flex gap-2 ml-5">
            {images.map((image, index) => (
              <div key={index} className="cursor-pointer" onClick={() => handleImageClick(index)}>
                <img
                  src={image || assets.upload_area} 
                  className="w-20 h-20 object-cover border rounded"
                  alt="Upload"
                />
                <input
                  type="file"
                  id={`fileInput${index}`}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, index)}
                />
              </div>
            ))}
          </div>
          <h2 className='ml-2 px-4 py-5 text-gray-900 font-medium '>Product Name</h2>
          <input type="text" className='w-full px-4 py-2 ml-5' value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} placeholder='Enter Name' />
          <h2 className='ml-2 px-4 py-5 text-gray-900 font-medium '>Product Description</h2>
          <input type="text" className='w-full px-4 py-2 ml-5' value={formData.description} onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))} placeholder='Enter content here' />
          <div className='flex gap-3 text-sm'>
            <div className='flex flex-col ml-4'>
              <h2 className='ml-2 px-4 py-5 text-gray-900 font-medium '>Product Category</h2>
              <select className='w-max h-[2rem] ml-7' onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}>
                <option >Select </option>
                <option value="Men">MEN</option>
                <option value="Women">WOMEN</option>
                <option value="Kids">KIDS</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <h2 className='ml-2 px-4 py-5 text-gray-900 font-medium '>Sub Category</h2>
              <select className='w-max h-[2rem] ml-7' onChange={(e) => setFormData((prev) => ({ ...prev, subcategory: e.target.value }))}>
                <option >Select </option>
                <option value="Topwear">Top-Wear </option>
                <option value="Bottomwear">Bottom-Wear</option>
                <option value="Underwear">Under-wear</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <h2 className='ml-2 px-4 py-5 text-gray-900 font-medium '>Product Price</h2>
              <input type="number" min='1' value={formData.price}  className='w-[5rem] px-2 h-[2rem] ml-7' onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))} />
            </div>

          </div>
        </div>
        <div className='ml-5 '>
          <div className='flex flex-col'>
            <h2 className='ml-2 px-4 py-5 text-gray-900 font-medium '>Product Sizes</h2>
            <div className="flex gap-3 ml-6">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <label className='' key={size}>
                  <input
                    type="checkbox"
                    value={size}
                    checked={formData.sizes.includes(size)}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        sizes: e.target.checked
                          ? [...prev.sizes, size]
                          : prev.sizes.filter((s) => s !== size),
                      }));
                    }}
                  />
                  {size}
                </label>
              ))}
            </div>

          </div>
          <div className='flex ml-6 mt-2 gap-2'>
            <input type="checkbox" onChange={(e) => setFormData((prev) => ({ ...prev, bestseller: e.target.checked }))} />
            <p>Add to Bestseller</p>
          </div>
          <button type='submit' className='ml-7 mt-4 cursor-pointer px-9 py-2 text-white text-center bg-black hover:bg-gray-800 '>Add</button>
        </div>

      </div>
      <ToastContainer />
    </form>
    
  )
}

export default AddItems