import React from 'react'

export default class Employee extends React.Component
{
    render(){

        return< tr>
                      <td>{this.props.index}</td>
                      <td>{this.props.employee.empid}</td>
                      <td>{this.props.employee.name}</td>
                     
        </tr>
        
    }
}