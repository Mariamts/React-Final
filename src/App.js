import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { autoFillData, autoLoginAction } from './redux/actions/middleware-actions';
import Routes from './Routes';
import './App.css';
import Navigation from './components/navigation/navigation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoFillData());
    dispatch(autoLoginAction());
  }, []);

  return (
    <div>
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
