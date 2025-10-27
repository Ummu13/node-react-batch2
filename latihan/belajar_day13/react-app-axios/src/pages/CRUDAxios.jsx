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

  //data yang disimpan pada variable disimpan pada fungsi useEffect lalu nanti akan disimpan dipanggil dan digunakan pada useState
  useEffect(() => {
    fetchDataMovie();
    fetchDataCategory();
  }, []);

  // mengambil data dari tabel movie lalu menyimpannya pada variable fetchDataMovie
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

  // mengambil data dari tabel category lalu menyimpannya pada variable fetchDataMovie
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

  // Kondisi jika saat button submit pada form diklik update(edit data) atau input data baru
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (UpDate && editId) {
      try {
        let update = await axios.put(
          `http://localhost:3000/api/movie/${editId}`,
          {
            title: title,
            year: Number(year),
            CategoryId: Number(CategoryId),
          }
        );
        setTitle("");
        setYear("");
        setCategoryId("");
        setUpDate(false);
        setEditId(null);
        console.log(update);
        fetchDataMovie();
        fetchDataCategory();
      } catch (err) {
        alert(err);
      }
    } else {
      try {
        let posting = await axios.post("http://localhost:3000/api/movie", {
          title: title,
          year: Number(year),
          CategoryId: Number(CategoryId),
        });
        console.log(posting);
        fetchDataMovie();
        fetchDataCategory();
      } catch (err) {
        alert(err);
      }
    }
  };

  // Saat button edit diklik akan menampilkan data pada bagian form sesuai bagian tombol yang diklik berdasarkan idnya
  const handleUpdate = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/movie/${id}`);
      let result = response.data.info;
      console.log(result);
      setTitle(result.title);
      setYear(result.year);
      setCategoryId(result.CategoryId);
      setEditId(id);
      setUpDate(true);
    } catch (err) {
      alert(err);
    }
  };

  //fungsi proses menghapus data saat button hapus diklik, data yang dihapus sesuai tombol yang diklik, berdasarkan idnya
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/movie/${id}`
      );
      console.log("Item deleted successfully:", response.data);
      fetchDataMovie();
      fetchDataCategory();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {/* Tampilan Form */}
      <div className="navbar bg-primary text-primary-content ">
        <button className="btn btn-ghost text-xl place-items-center">
          Form CRUD Movies
        </button>
      </div>

      {/* <div className="flex w-full flex-col">
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
      <div className="divider">OR</div>
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
    </div> */}

      <div className="flex w-full flex-col">
        <div className="card bg-base-300 rounded-box grid h-100 place-items-center">
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-90 border p-4">
            <form onSubmit={handleSubmit}>
              <label className="label" for="title">
                Movie Title
              </label>
              <input
                className="input"
                type="text"
                id="title"
                name="title"
                onChange={handleTitleChange}
                value={title}
                placeholder="Movies..."></input>

              <label className="label" for="year">
                year
              </label>
              <input
                className="input"
                type="text"
                id="year"
                name="year"
                value={year}
                onChange={handleYearChange}
                placeholder="Movies Realese date..."></input>

              <label for="category">Category</label>
              <select
                value={CategoryId}
                className="select select-neutral"
                id="category"
                name="category"
                onChange={handleCategoryIdChange}>
                {dataCategory.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <br />
              <input
                type="submit"
                value="Send"
                className="btn btn-success mt-4"></input>
            </form>
          </fieldset>
        </div>

        <div className="divider  lg:divider-horizontal"></div>

        {/* Tampilan Tabel */}
        <div className="navbar bg-primary text-primary-content ">
          <button className="btn btn-ghost text-xl place-items-center">
            Tabel CRUD Movies
          </button>
        </div>

        <div className="card bg-base-300 rounded-box grid h-100 place-items-center">
          <div class="overflow-x-auto">
            <table class="table table-xs">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Judul</th>
                  <th>Tahun</th>
                  <th>Kategori</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {dataMovie.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.year}</td>
                      <td>
                        {
                          dataCategory.find((cat) => cat.id === item.CategoryId)
                            ?.name
                        }
                      </td>
                      <td>
                        <submit
                          id="delete"
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-error">
                          Hapus
                        </submit>
                      </td>
                      <td>
                        <submit
                          id="edit"
                          onClick={() => handleUpdate(item.id)}
                          className="btn btn-warning">
                          Edit
                        </submit>
                      </td>
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

export default CRUDaxios;
