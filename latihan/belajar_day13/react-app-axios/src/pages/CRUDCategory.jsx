import { useEffect, useState } from "react";
import "../crudaxios.css";
import axios from "axios";


function CRUDCategory() {
  const [UpDate, setUpDate] = useState(false);
  const [editId, setEditId] = useState(null);
  const [dataCategory, setDataCategory] = useState([]);
  const [name, setName] = useState("");
  // const [CategoryId, setCategoryId] = useState("");

//data yang disimpan pada variable disimpan pada fungsi useEffect lalu nanti akan disimpan dipanggil dan digunakan pada useState
  useEffect(() => {
    fetchDataCategory();
  }, []);


// mengambil data dari tabel category lalu menyimpannya pada variable fetchCategory 
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

//mengambil nilai value pada form yang telah diinput lalu disimpan pada data usestate
  const handlenameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };


  // Kondisi jika saat button submit pada form diklik update(edit data) atau input data baru
  const handleSubmit = async (event) => {
    event.preventDefault();
    
      if(UpDate && editId){
        try {
        let update = await axios.put(`http://localhost:3000/api/category/${editId}`, {
          name: (name),
        });
        setName("");
        setUpDate(false);
        setEditId(null);
        console.log(update);
        fetchDataCategory();
        }catch (err) {
          alert(err);
        }
      }else{
        try {
          let posting = await axios.post("http://localhost:3000/api/category", {
            name: (name),
          });
          setName("");
          console.log(posting);
          fetchDataCategory();
        } catch (err) {
          alert(err);
        }
      }
  };

// Saat button edit diklik akan menampilkan data pada bagian form sesuai bagian tombol yang diklik berdasarkan idnya
  const handleUpdate = async(id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/category/${id}`);
        let result = response.data.info;
        console.log(result);
        setName(result.name)
        setEditId(id);
        setUpDate(true);
    } catch (err) {
      alert(err);
    }
  };

//fungsi proses menghapus data saat button hapus diklik, data yang dihapus sesuai tombol yang diklik, berdasarkan idnya
  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/category/${id}`)
      console.log('Item deleted successfully:', response.data);
      fetchDataCategory();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
    {/* Tampilan Form */}
    <div className="navbar bg-primary text-primary-content ">
      <button className="btn btn-ghost text-xl place-items-center">Form CRUD Category Movies</button>
    </div>

    <div className="flex w-full flex-col">
      <div className="card bg-base-300 rounded-box grid h-100 place-items-center">
        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-90 border p-4">
      <form onSubmit={handleSubmit}>
        <label className="label" for="name">Category Movie </label>
        <input className="input"
          type="text"
          id="title"
          name="name"
          onChange={handlenameChange}
          value={name}
          placeholder="Category Movies..."></input>
        <br />
        <input type="submit" value="Send" className ="btn btn-success mt-4"></input>
      </form>
    </fieldset>
      </div>


      <div className="divider  lg:divider-horizontal"></div>
    

    {/* Tampilan Tabel */}
      <div className="navbar bg-primary text-primary-content ">
        <button className="btn btn-ghost text-xl place-items-center">Tabel CRUD Category Movies</button>
      </div>

      <div className="card bg-base-300 rounded-box grid h-100 place-items-center">
      <div class="overflow-x-auto">
      <table class="table table-xs">
        <thead>
          <tr>
            <th>No</th>
            <th>Kategori</th>
            <th >Aksi</th>
          </tr>
        </thead>

        <tbody>
          {dataCategory.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td><submit  id="delete" onClick={() => handleDelete(item.id)} className="btn btn-error">Hapus</submit></td>
                <td><submit  id="edit" onClick={() => handleUpdate(item.id)} className="btn btn-warning">Edit</submit></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      </div>
    </div>


      
    


    </>
  );
}

export default CRUDCategory;
