
import React, { useState, useEffect } from 'react';
import './App.css';
import Strips from './components/strips/Strips';
import axios from 'axios'
import Pagination from './components/Pagination/Pagination';

function App() {

  const [data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postPerPage,setPostPerPage]=useState(4);

    useEffect(() => {
      const fetchData=async()=>{
          setLoading(true);
          const res= await axios.get('https://jsonplaceholder.typicode.com/users');
          setData(res.data);
          setLoading(false);
      }
      fetchData();
    }, []);
    
    // console.log(data);

  const indexOfLastData=currentPage*postPerPage;
  const indexOfFirstData=indexOfLastData-postPerPage;
  const currentData= data.slice(indexOfFirstData,indexOfLastData)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <Strips data={currentData} loading={loading} />
      <Pagination postsPerPage={postPerPage} totalPosts={data.length} paginate={paginate} />
    </div>
  );
}

export default App;
