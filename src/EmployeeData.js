import React from 'react';
import Employee from './EmployeeComponents/Employee'

export default class EmployeeData extends React.Component{
    render(){
        return <div>
          <i> <h3 align='center'>EmployeeData</h3> </i> 
             <table align='center' border='1' cellPadding='10' cellSpacing='5'>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Employee ID</th>
                        <th>Name</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
                    {this.props.records.map((emp, index) =>
                        <Employee key={index} employee={emp}
                            index={index + 1} 
                            />
                    )}
                </tbody>
            </table>
        </div>
    }
}