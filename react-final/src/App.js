import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { autoFillData } from './redux/actions/middleware-actions';
import Routes from './Routes';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoFillData());
  }, []);

  return (
    <div className="container">
      <Routes />
    </div>
  );
}

export default App;
