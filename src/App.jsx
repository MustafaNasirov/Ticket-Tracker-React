import './App.scss';

import team from "./assets/data/team";
import EmployeeCard from './components/EmployeeCard/EmployeeCard';
import Nav from './components/Nav/Nav';


const App = ()=> {

    const getEmployeeCards = team.map((employee)=>{
      console.log(employee.ticketCount)
      return(
        <EmployeeCard key={employee.id} name={employee.name} role={employee.role}/>
        
      )
    });
  
    return (
      <div className='app'>
          <Nav/>
          
          <div className="cards-container">
            {getEmployeeCards}
          </div>

      </div>
      
    );
  }
  
  export default App;
