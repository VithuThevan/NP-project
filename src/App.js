//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AddDoctorComponent from './components/AddDoctorComponent';
import AddWard from './components/AddWard';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Hospital from './components/Hospital';
import ListDoctorComponent from './components/ListDoctorComponent';
import AddPatient from './components/patientComponents/AddPatient';
import ListPatient from './components/patientComponents/ListPatient';
import Ward from './components/Ward';

function App() {
  return (
    <div>
      <HeaderComponent />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hospital />} />
        <Route path='/doctor' element={<ListDoctorComponent />} />
        <Route path='/head' element={<HeaderComponent />} />
        <Route path='/add-doctor' element={<AddDoctorComponent />} />
        <Route path='/edit-doctor/:id' element={<AddDoctorComponent />} />
        <Route path='/edit-ward/:id' element={<AddWard />} />
        <Route path='/edit-patient/:id' element={<AddPatient />} />
        <Route path='/patient' element={<ListPatient />} />
        <Route path='/add-patient' element={<AddPatient />} />
        <Route path='/ward' element={<Ward/>} />
        <Route path='/add-ward' element={<AddWard/>} />
      </Routes>
      </BrowserRouter>
      
      
      <FooterComponent />
    </div>
  );
}

export default App;
