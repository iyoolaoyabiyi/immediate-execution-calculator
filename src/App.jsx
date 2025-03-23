import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="container vh-100 p-5 d-flex flex-column justify-content-center align-items-center">
      <div className='text-center text-capitalize mb-5'>
        <h1>immediate execution Calculator</h1>
        <p>By Iyo</p>
      </div>
      <Calculator />
    </div>
  );
}