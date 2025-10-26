import { useEffect, useState } from "react";
import "../crudaxios.css";
import axios from "axios";


function CRUDaxios() {
  const [UpDate, setUpDate] = useState(false);
  const [editId, setEditId] = useState(null);
  const [dataMovie, setDataMovie] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [CategoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetchDataMovie();
    fetchDataCategory();
  }, []);


  // const itemId = 'your_item_id'; 

  // axios.get(`/api/movie/${itemId}`)
  //   .then(response => {
  //     // Store the fetched data in your component's state or a variable
  //     const itemToEdit = response.data;
  //     // Now you can populate your edit form with this data
  //   })
  //   .catch(error => {
  //     console.error('Error fetching item:', error);
  // });

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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    console.log(year);
  };

  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
    console.log(CategoryId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
      if(UpDate && editId){
                try {
      let update = await axios.put(`http://localhost:3000/api/movie/${editId}`, {
        title: (title),
        year: Number(year),
        CategoryId: Number(CategoryId)
      });
      setUpDate(false);
      setEditId(null);
      console.log(update);
      fetchDataMovie();
      fetchDataCategory();
    } catch (err) {
      alert(err);
    }
      }else{
        try {
      let posting = await axios.post("http://localhost:3000/api/movie", {
        title: (title),
        year: Number(year),
        CategoryId: Number(CategoryId)
      });
      console.log(posting);
      fetchDataMovie();
      fetchDataCategory();
    } catch (err) {
      alert(err);
    }}
  };

  const handleUpdate = async(id) => {
    try {
      axios
      .get(`http://localhost:3000/api/movie/${id}`)
      .then((response) => {
        let result = response.data.info;
        console.log(result);
        setTitle(result.title)
        setYear(result.year)
        setCategoryId(result.CategoryId)
        setEditId(id);
        setUpDate(true);
      })
      .catch((err) => {
        console.log(err);
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/movie/${id}`)
      console.log('Item deleted successfully:', response.data);
      fetchDataMovie();
      fetchDataCategory();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h1>CRUD AXIOS</h1>
    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-90 border p-4">
      <form onSubmit={handleSubmit}>
        <label className="label" for="title">Movie Title</label>
        <input className="input"
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
          value={title}
          placeholder="Movies..."></input>

        <label className="label" for="year">year</label>
        <input className="input"
          type="text"
          id="year"
          name="year"
          value={year}
          onChange={handleYearChange}
          placeholder="Movies Realese date..."></input>

        <label for="category">Category</label>
        <select value={CategoryId} className="select select-neutral" id="category" name="category" onChange={handleCategoryIdChange}>
          {dataCategory.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <br />
        <input type="submit" value="Send" className ="btn btn-success mt-4"></input>
      </form>
    </fieldset>

    <div class="overflow-x-auto">
      <table class="table table-xs">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Tahun</th>
            <th>Kategori</th>
            <th >Aksi</th>
          </tr>
        </thead>

        <tbody>
          {dataMovie.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.CategoryId}</td>
                <td><submit  id="delete" onClick={() => handleDelete(item.id)} className="btn btn-error">Delete</submit></td>
                <td><submit  id="edit" onClick={() => handleUpdate(item.id)} className="btn btn-warning">Edit</submit></td>
              </tr>
            );
          })}

        </tbody>
      </table>
      </div>
    </>
  );
}

export default CRUDaxios;
