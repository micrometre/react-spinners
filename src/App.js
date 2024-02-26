import { useState } from 'react'
import { ReactComponent as Loader } from './loader.svg';
import './App.css';

export function Button({ onSubmit, text, loading, disabled }) {
  return (
    <button className="bg-red-700 min-h-80 min-w-80 text-7xl text-white " onClick={onSubmit} disabled={disabled}>
      {!loading ? text : <Loader className="spinner" />}
    </button>
  );
}


export default function Home() {
  const [showLoader, setShowLoader] = useState(false)
  function onSubmit() {
    setShowLoader(true);
    setTimeout(() => {
      return setShowLoader(false);
    }, 4000);
  }
  return (
    <div className="m-40">
      <Button text="Submit" onSubmit={onSubmit} loading={showLoader} disabled={showLoader} ></Button>
      <h1 className="text-3xl font-bold underline">
      </h1>
    </div>
  );
}
