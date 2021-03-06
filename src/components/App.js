import '../styles/App.scss';
import { useState, useEffect } from 'react';

import getAdalabersFromApi from '../services/getAdalabersFromApi';
function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');

  const [select, setSelect] = useState('');

  useEffect(() => {
    getAdalabersFromApi().then((adalabersResponse) => {
      setData(adalabersResponse);
    });
  }, []);

  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };
  const handleChangeAddName = (ev) => {
    setName(ev.currentTarget.value);
  };
  const handleChangeAddCounselor = (ev) => {
    setCounselor(ev.currentTarget.value);
  };
  const handleChangeAddSpeciality = (ev) => {
    setSpeciality(ev.currentTarget.value);
  };
  const handleChangeSelect = (ev) => {
    setSelect(ev.currentTarget.value);
  };

  const handleClickAdd = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      name: name,
      counselor: counselor,
      speciality: speciality,
    };
    setData([...data, newAdalaber]);
  };

  const renderAdalabers = () => {
    return data
      .filter((adalaber) =>
        adalaber.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((adalaber, index) => {
        return (
          <tr key={index}>
            <td>{adalaber.name}</td>
            <td>{adalaber.counselor}</td>
            <td>{adalaber.speciality}</td>
          </tr>
        );
      });
  };

  return (
    <>
      <header>
        <h1>Adalabers</h1>
      </header>
      <form>
        <p>Nombre:</p>
        <input onChange={handleChangeSearch} value={search}></input>
        <p>Escoge una tutora</p>
        <select onChange={handleChangeSelect} value={select}>
          <option>Yanelis</option>
          <option>Iván</option>
          <option>Dayana</option>
        </select>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>{renderAdalabers()}</tbody>
      </table>

      <h1>Añadir una nueva adalaber</h1>
      <input onChange={handleChangeAddName} value={name}></input>

      <input onChange={handleChangeAddCounselor} value={counselor}></input>

      <input onChange={handleChangeAddSpeciality} value={speciality}></input>

      <input
        type="submit"
        value="Añadir una nueva Adalaber"
        onClick={handleClickAdd}
      />
    </>
  );
}

export default App;
