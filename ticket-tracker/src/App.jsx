import './App.scss';

import team from "./assets/data/team";
import EmployeeCard from './components/EmployeeCard/EmployeeCard';


const App = ()=> {

    const getEmployeeCards = team.map((employee)=>{
      return(
        <EmployeeCard key={employee.id} name={employee.name} role={employee.role} ></EmployeeCard>
      )
    });
  
    return (
      <>
        <div className="card-container">
            {getEmployeeCards}
        </div>
      </>
    );
  }
  
  export default App;
