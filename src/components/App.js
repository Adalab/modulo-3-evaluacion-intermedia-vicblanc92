import '../styles/App.scss';
import '../service/localStorage';
import adalabers from '../data/adalabers.json';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });

  const [select, setSelect] = useState('');

  const handleChangeSelect = (ev) => {
    setSelect(ev.currentTarget.value);
  };
  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };
  const handleChangeAddName = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      name: ev.currentTarget.value,
    });
  };
  const handleChangeAddCounselor = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      counselor: ev.currentTarget.value,
    });
  };
  const handleChangeAddSpeciality = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      speciality: ev.currentTarget.value,
    });
  };

  const handleClickAdd = () => {
    setData([...data, newAdalaber]);
  };

  const htmlAdalaber = adalabers.results.map((adalaber) => {
    return (
      <tr key={adalaber.id}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
      </tr>
    );
  });

  return (
    <>
      <>
        <header>
          {' '}
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
          <tbody>{htmlAdalaber}</tbody>
        </table>
      </>

      <form onSubmit={(ev) => ev.preventDefault()}>
        <h1>Añadir una nueva adalaber</h1>
        <input onChange={handleChangeAddName} value={newAdalaber.name}></input>

        <input
          onChange={handleChangeAddCounselor}
          value={newAdalaber.counselor}
        ></input>

        <input
          onChange={handleChangeAddSpeciality}
          value={newAdalaber.speciality}
        ></input>

        <button value="Añadir una nueva Adalaber" onClick={handleClickAdd}>
          Añadir una nueva adalaber
        </button>
      </form>
    </>
  );
}

export default App;
