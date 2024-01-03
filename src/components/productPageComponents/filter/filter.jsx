import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Filter() {
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case 'department':
        setShowDepartmentDropdown(!showDepartmentDropdown);
        break;
      case 'category':
        setShowCategoryDropdown(!showCategoryDropdown);
        break;
      case 'size':
        setShowSizeDropdown(!showSizeDropdown);
        break;
      case 'color':
        setShowColorDropdown(!showColorDropdown);
        break;
      case 'brand':
        setShowBrandDropdown(!showBrandDropdown);
        break;
      default:
        break;
    }
  };

  return (
    <div className='w-full p-10 pr-20'>
      <div className='flex justify-between'>
        <p className='font-bold font-poppins text-lg'>Filter</p>
        <p
          className='text-[#005342] underline underline-offset-1 cursor-pointer'
          onClick={() => {
            // Reset logic (you can add your reset functionality here)
            console.log('Reset All clicked');
          }}
        >
          Reset All
        </p>
      </div>
      <div className='border-b my-5'></div>

      {/* Department Dropdown */}
      <div className='flex justify-between' onClick={() => toggleDropdown('department')}>
        <p className='font-bold font-poppins'>Department</p>
        <IoIosArrowDown />
      </div>
      {showDepartmentDropdown && (
        <div >
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Mens</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Kids</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Women</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Big and Tall</p>
          </label>
        </div>
      )}
      <div className='border-b my-5'></div>

      {/* Category Dropdown */}
      <div className='flex justify-between' onClick={() => toggleDropdown('category')}>
        <p className='font-bold font-poppins'>Category</p>
        <IoIosArrowDown />
      </div>
      {showCategoryDropdown && (
        <div>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Mens</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Kids</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Women</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>Big and Tall</p>
          </label>
        </div>
      )}
      <div className='border-b my-5'></div>

      {/* Size Dropdown */}
      <div className='flex justify-between' onClick={() => toggleDropdown('size')}>
        <p className='font-bold font-poppins'>Size</p>
        <IoIosArrowDown />
      </div>
      {showSizeDropdown && (
        <div>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>xs</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>s</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>m</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>l</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>xl</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>xxl</p>
          </label>
          <label className='flex items-center'>
            <input type='checkbox' />
            <p className='font-popins ml-2 font-poppins'>xxxl</p>
          </label>
        </div>
      )}
      <div className='border-b my-5'></div>

      {/* Color Dropdown */}
      <div className='flex justify-between' onClick={() => toggleDropdown('color')}>
        <p className='font-bold font-poppins'>Colour</p>
        <IoIosArrowDown />
      </div>
      {showColorDropdown && (
        <div className='flex justify-between'>
          {/* Add your Color options here */}
        </div>
      )}
      <div className='border-b my-5'></div>

      {/* Brand Dropdown */}
      <div className='flex justify-between' onClick={() => toggleDropdown('brand')}>
        <p className='font-bold font-poppins'>Brand</p>
        <IoIosArrowDown />
      </div>
      {showBrandDropdown && (
        <div className='flex justify-between'>
          {/* Add your Brand options here */}
        </div>
      )}
      <div className='border-b my-5'></div>

      {/* Price Range Dropdown */}
      <div className='flex justify-between' onClick={() => toggleDropdown('price')}>
        <p className='font-bold font-poppins'>Price Range</p>
        <IoIosArrowDown />
      </div>
      {/* Add Price Range dropdown content here */}

    </div>
  );
}

export default Filter;
