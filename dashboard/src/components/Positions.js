import React ,{useState,useEffect} from "react";
// import { positions } from "../data/data";
import axios, { all } from "axios"


const Positions = () => {

    const[allposition,setallposition]=useState([])
  
   useEffect(()=>{
      axios.get("https://zerodha-clone-bwlg.onrender.com/allposition").then((res)=>{
        console.log(res.data)
        setallposition(res.data)
      })
    },[])
  
  return (
    <>
      <h3 className="title">Positions ({allposition.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allposition.map((stock, index) => {
            const curvalue = stock.price * stock.qty;
            const isprofit = curvalue - stock.avg * stock.qty >= 0.0;
            const profclass = isprofit ? "profit" : "loss";
            const dayclass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profclass}>
                  {(curvalue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayclass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
