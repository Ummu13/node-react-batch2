const { connectionPool } = require('../config/db')

//creat (mengirim atau menginput data ke database mahasiswa)
const createNilaiMahasiswa = (req, res) => {
    let {nama, mata_kuliah, nilai} = req.body
    
    if (nilai < 0 || nilai > 100){
        return res.json({'message': 'Nilai harus antara 0-100', 'status': 'error'})
    }
    
    let indeks_nilai = "";
    if (nilai >= 80 ) indeks_nilai = "A";
    else if (nilai >= 70 && nilai < 80  ) indeks_nilai =  "B";
    else if (nilai >= 60 && nilai < 70 ) indeks_nilai = "C";
    else if (nilai >= 50 && nilai < 60 ) indeks_nilai = "D";   
    else indeks_nilai = "E";    


    let queryText = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at) VALUES("${nama}", "${mata_kuliah}",${nilai}, "${indeks_nilai}", now(), now())` 
    
    connectionPool.query(queryText, (err, data) => {
        if(err){
              console.log(err)
                    return     
    }
     res.json({'message': 'Data Nilai Mahasiswa Berhasil Ditambahkan', 'status': 'success'})
  })
}

 //read movie (menampilkan semua data)
 const readNilaiMahasiswa= (req, res) => {
   let queryText = "SELECT * FROM nilai_mahasiswa"
   connectionPool.query(queryText, (err, data) => {
     if (err) {
       console.error(err);
       return;
     }
 res.json(data);
 });
 }

//read movie by id (menampilkan data berdasarkan id)
const readNilaiMahasiswaById= (req, res) => {
  let {id} = req.params 
  let queryText= `SELECT * FROM nilai_mahasiswa WHERE id =${id}`
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
res.json(data);
});
}

// //Update data (menampilkan data berdasarkan id)
 const updateNilaiMahasiswa = (req, res) => {
   let {nama, mata_kuliah, nilai} = req.body
   let {id} = req.params 
   
  if (nilai < 0 || nilai > 100){
    return res.json({'message': 'Nilai harus antara 0-100', 'status': 'error'})
  }
    
  let indeks_nilai = "";
  if (nilai >= 80 ) indeks_nilai = "A";
  else if (nilai >= 70 && nilai < 80  ) indeks_nilai =  "B";
  else if (nilai >= 60 && nilai < 70 ) indeks_nilai = "C";
  else if (nilai >= 50 && nilai < 60 ) indeks_nilai = "D";   
  else indeks_nilai = "E";  

   let queryText= `Update nilai_mahasiswa Set nama="${nama}", mata_kuliah="${mata_kuliah}", nilai=${nilai}, indeks_nilai="${indeks_nilai}",updated_at=NOW() WHERE id =${id}`
   connectionPool.query(queryText, (err, data) => {
     if (err) {
       console.error(err);
       return;
     }
     res.json({message: 'Succesfully Updated', status: 'success'})
 res.json(data);
 });
 }

// //Hapus data (menghapus data didatabase berdasarkan id)
const deleteNilaiMahasiswa = (req, res) => {
  let {id} = req.params 
  let queryText= `DELETE FROM nilai_mahasiswa WHERE id =${id}`
  
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({message: 'DELETE Succesfully', status: 'success'})
res.json(data);
});
}

module.exports = {createNilaiMahasiswa, readNilaiMahasiswa, readNilaiMahasiswaById, updateNilaiMahasiswa, deleteNilaiMahasiswa}
//module.exports = {getMoviesByID}