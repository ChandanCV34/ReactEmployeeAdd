import React from "react";



import EmployeeData from "./EmployeeData";

import {Link , Routes , Route} from 'react-router-dom'

class App extends React.Component
{
  
  
    constructor(){
      super()
     
      this.state = {
        employees : [
          {empid:101,name:'John'},
          {empid:102,name:'Vikas'}
        ]
      }
    }

    anyRedirectMethod = () => {
      this.props.history.push("/demo")
     }

    save = (event)=>{
        var empid = this.idbox.value*1;
        var name = this.namebox.value;
        

        var obj = {empid,name}
        console.log(obj)
        this.setState({employees: [...this.state.employees,obj] })
        
      
        event.preventDefault()

       
      

           
    }

   

    render(){
        return <div>
           <form onSubmit={this.save} >
               <label>Employee ID</label> : <input type="text" ref={(ob) => this.idbox = ob} placeholder="Employee ID" required />&nbsp;<br/>
               <br/>

               <label>Employee Name</label> : <input type="text" ref={(ob) => this.namebox = ob} placeholder="Employee Name" required />&nbsp;
                <br/>
                <br/>


                
             <button type="submit">Save Employee</button> &nbsp; 
             <Link to="demo">
     <button  type="submit" onClick={this.anyRedirectMethod} className="nextBtn">
      Submit
     </button>
    </Link>
            </form>
         

           <hr/> 

          <Routes>
            
              <Route path="/demo" element={<EmployeeData records={this.state.employees}/>}/>

             

          </Routes>          
        </div>
    }
}

export default App