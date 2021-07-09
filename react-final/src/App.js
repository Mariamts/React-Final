import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { autoFillData, autoLoginAction } from './redux/actions/middleware-actions';
import Routes from './Routes';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoFillData());
    dispatch(autoLoginAction());
  }, []);

  return (
    <div className="container">
      <Routes />
    </div>
  );
}

export default App;
