import { useEffect, useState } from "react";
import "../crudaxios.css";
import axios from "axios";

function CRUDaxios() {
  const [data, setData] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    fetchData();
    fetchDataMovie();
    fetchDataCategory();
  }, []);


  const fetchDataMovie = () => {
    axios
      .get("http://localhost:3000/api/movie")
      .then((response) => {
        setDataMovie(response.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const fetchDataCategory = () => {
    axios
      .get("http://localhost:3000/api/category")
      .then((response) => {
        setDataCategory(response.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleChange = (event) => {
    setInput({...input,[name]:value})
  }



  const fetchData = () => {
    axios
      .get("http://localhost:3000/api/movie")
      .then((response) => {
        setData(response.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <>
      <h1>CRUD AXIOS</h1>

      <form >
        <label for="title">Movie Title</label><br/>
        <input type="text" id="title" name="title" onChange={handleChange} placeholder="Movies..."></input><br/>

        <label for="year">year</label><br/>
        <input type="Number" id="year" name="year" onChange={handleChange} placeholder="Movies Realese date..."></input><br/>

      <label for="category">Category</label>
      <select id="category" name="category" onChange={handleChange}>
        {
          dataCategory.map((item, index) =>{
            return<option key={index} value={item.id}>{item.name}</option>

          })
        }
      </select><br/>


      <input type="submit"></input>
      </form>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Tahun</th>
            <th>Kategori</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.CategoryId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CRUDaxios;
