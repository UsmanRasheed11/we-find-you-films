import React,{useState,useEffect} from "react";
import DemoData from './movies.json';
import MoviesCard from "./MoviesCard";
import { Pagination } from "antd";
import "./TopMoviesMainPage.css";



export const TopMoviesMainPage = () => {
  const [totalPage,setTotalPage]= useState(0)
  const [current,setCurrent]= useState(1)
  const [minIndex,setMinIndex]= useState(0)
  const [maxIndex,setMaxIndex]= useState(0)
  const [pageSize,setPageSize]= useState(12)
  const [Data, setData] =useState(0)
 

  useEffect(() => {
    setData(DemoData.items)
    setTotalPage(DemoData.items.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize)
  }, []);


 const handlePaginationChange = (page,size) => {
   console.log(page,size)
   setPageSize(size)
    setCurrent(page);
    setMinIndex((page - 1) * size);
    setMaxIndex(page * size)
  };

  return (
    <>
      <section className="text-white">
        asdadssdfsdfsdf
        {/* ********* movies display area started here *********** */}
        <div class="container-fluid mt-5 p-5">
          <div id="movie-content" class="row d-flex justify-content-center">
            {DemoData && DemoData.items.map((mapDemoData,index)=>{
            if(index >= minIndex && index < maxIndex )  return(<MoviesCard movies={mapDemoData}/>)
            
          } )}
         </div>
        </div>
        {/* ********* movies display area ended here *********** */}

        {/* ********* pagination started here *********** */}
        <Pagination responsive={true} current={current} pageSize={pageSize} total={Data.length} onChange={handlePaginationChange} />

        {/* ********* pagination ended here *********** */}
      </section>
    </>
  );
};
