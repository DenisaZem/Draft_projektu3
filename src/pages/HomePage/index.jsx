import Dotazník from '../../components/Dotazník';
import Menu from '../../components/Menu';
import Sounds from '../../components/Sounds';
import './style.css';


export const HomePage = () => {
  return (
    <div className="container">
      <Dotazník />
      <Sounds />
      <Menu />
     
      
    </div>
  );
};
