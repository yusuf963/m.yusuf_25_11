import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import LoaderIcon from './loader';
import categories from './category';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import './garment-card.scss';
import './search-bar.scss';
// create a React functional component
const GarmentCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [garments, setGarment] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(0);
  console.log(category);

  let limit = 16;
  useEffect(() => {
    const getGarments = async () => {
      const res = await fetch(
        category
          ? `http://localhost:5000/api/v1/garmentss/${category}?page=1&limit=${limit}`
          : `http://localhost:5000/api/v1/garments?page=1&limit=${limit}`
      );
      const data = await res.json();
      setpageCount(Math.ceil(data.total / limit));
      setGarment(data.garments);
      setLoading(true);
      console.log(data);
    };

    getGarments();
  }, [limit, category]);

  const getGarments = async (currentPage) => {
    const res = await fetch(
      category
        ? `http://localhost:5000/api/v1/garmentss/${category}?page=${currentPage}&limit=${limit}`
        : `http://localhost:5000/api/v1/garments?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    setGarment(data.garments);
    return data.garments;
  };
  // function to handle pagination
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await getGarments(currentPage);
    setGarment(commentsFormServer);
    // scroll to the top
    window.scrollTo(0, 0);
  };
  //handle category
  const handleCategory = (e) => {
    return setCategory(e.target.value);
  };
  return (
    <div className='container'>
      <h3 className='brand-logo'>
        InteliStyle
        <p className='subtitle'>Lead tech-co in Fastion Industery</p>
        <p className='banner'>
          See all the Collections and a like-recomendation for your outfit and
          body shape
        </p>
      </h3>
      <select onChange={handleCategory}>
        <option value=''>Select Category</option>
        {categories.map((category) => (
          <option value={category.value}>{category.name}</option>
        ))}
        {/* // <option value=''>Category</option>
        // <option value='mens-hats'>Men hat</option>
        // <option value='mens-pants'>Radish</option>
        // <option value='mens-jewelry'>Cherry</option>
        // <option value='mens-slip-ons-shoes'>mens-slip-ons-shoes</option>
        // <option value='mens-shirts'>mens-shirts</option>s4 //{' '}
        <option value='mens-denim-jackets'>mens-denim-jackets</option>
        //{' '}
        <option value='mens-straight-leg-jeans'>mens-straight-leg-jeans</option>
        // <option value='mens-jeans'>mens-jeans</option>
        //{' '}
        <option value='mens-straight-leg-jeans'>mens-straight-leg-jeans</option>
        // <option value='mens-gloves'>mens-gloves</option>
        // <option value='mens-boots'>mens-boots</option>
        // <option value='mens-shorts'>mens-shorts</option>
        // <option value='mens-athletic-shorts'>mens-athletic-shorts</option>
        // <option value='mens-jackets'>mens-jackets</option>
        // <option value='mens-accessories'>mens-accessories</option>
        //{' '}
        <option value='mens-chinos-and-khakis'>mens-chinos-and-khakis</option>
        //{' '}
        <option value='mens-underwear-and-socks'>
          mens-underwear-and-socks
        </option>
        // <option value='mens-outerwear'>mens-outerwear</option>
        // <option value='mens-sweatshirts'>mens-sweatshirts</option>
        // <option value='mens-sweaters'>mens-sweaters</option>
        //{' '}
        <option value='mens-cardigan-sweaters'>mens-cardigan-sweaters</option>
        // <option value='mens-swimsuits'>mens-swimsuits</option>
        //{' '}
        <option value='mens-shortsleeve-shirts'>mens-shortsleeve-shirts</option>
        // <option value='mens-tees-and-tshirts'>mens-tees-and-tshirts</option>
        // <option value='mens-slim-jeans'>mens-slim-jeans</option>
        //{' '}
        <option value='mens-longsleeve-shirts'>mens-longsleeve-shirts</option>
        // <option value='mens-polo-shirts'>mens-polo-shirts</option>
        // <option value='mens-socks'>mens-socks</option>
        // <option value='mens-slim-jeans'>mens-slim-jeans</option>
        // <option value='mens-sunglasses'>mens-sunglasses</option>
        // <option value='mens-wool-coats'>mens-wool-coats</option> */}
      </select>
      {/* </Dropdown> */}
      {/* <Dropdown className='dropdown'>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          Category
        </Dropdown.Toggle>
        <Dropdown.Menu
          onClick={(e) => {
            setCategory(e.taget.value);
          }}
        >
          <option value='h' >hhh</option>
          <Dropdown.Item
            onClick={(e) => {
              setCategory(e.taget.value);
            }}
            value='all'
          >
            Action
          </Dropdown.Item>
          <Dropdown.Item value='a'>Another action</Dropdown.Item>
          <Dropdown.Item value='b'>Something else</Dropdown.Item>
          <Dropdown.Item value='c'>Something else</Dropdown.Item>
          <Dropdown.Item value='d'>Something else</Dropdown.Item>
          <Dropdown.Item value='e'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <div className='wrapper'>
        <img
          className='search-icon'
          src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
          alt={'search-icon'}
        />
        <input
          className='search'
          type={'text'}
          placeholder={'Search'}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className='preview'>
        {loading ? (
          garments
            .filter((val) => {
              if (searchTerm === '') {
                return val;
              } else if (
                val.product_title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((garment) => (
              <div key={garment._id} className='collection-item'>
                <div
                  className='image'
                  style={{
                    backgroundImage: `url(${garment.image_urls[0]})`,
                  }}
                />
                <div className='collection-footer'>
                  <span className='name'>{garment.product_title}</span>
                  <span className='price'>$ {garment.price}</span>
                  {/* <span className='category'>
                    {garment.product_categories[0]}
                  </span> */}
                </div>
              </div>
            ))
        ) : (
          <LoaderIcon />
        )}
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default GarmentCard;
