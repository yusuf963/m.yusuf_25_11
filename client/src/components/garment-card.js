import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import LoaderIcon from './loader';
import categories from './category';
import './garment-card.scss';
import './search-bar.scss';

// create a React functional component
const GarmentCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [garments, setGarment] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(0);

  let limit = 16;
  useEffect(() => {
    const getGarments = async () => {
      const res = await fetch(
        category
          ? `http://localhost:5000/api/v1/garments/${category}?page=1&limit=${limit}`
          : `http://localhost:5000/api/v1/garments?page=1&limit=${limit}`
      );
      const data = await res.json();
      console.log(data);
      setpageCount(Math.ceil(data.total / limit));
      setGarment(data.garments);
      if (data.data === true) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    getGarments();
  }, [limit, category]);
  const getGarments = async (currentPage) => {
    const res = await fetch(
      category
        ? `http://localhost:5000/api/v1/garments/${category}?page=${currentPage}&limit=${limit}`
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
      <select className='dropdown' onChange={handleCategory}>
        <option value=''>Select Category</option>
        {categories.map((category) => (
          <option
            key={category.value}
            className='dropdown-item'
            value={category.value}
          >
            {category.name}
          </option>
        ))}
      </select>
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
