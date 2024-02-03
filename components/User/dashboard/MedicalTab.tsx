import React from 'react'
import MedicalTable from './MedicalTable'
import Link from 'next/link'

const MedicalTab = ({data}:{data:{
    id:string,
    date:string,
    description:string,
    attachment:string,
    created:{
        name:string,
        image:string,
        specialization:string
    }
    
}[]}) => {
  return (
    <>
     
     <div id="pat_medical_records" className="tab-pane ">
     <div className="card card-table mb-0">
       <div className="card-body">
         <div className="table-responsive">
           <table className="table table-hover table-center mb-0">
             <thead>
               <tr>
                 <th>ID</th>
                 <th>Date </th>
                 <th>Description</th>
                 <th>Attachment</th>
                 <th>Created</th>
                 <th />
               </tr>
             </thead>
             <tbody>
              {
                data.map((d,i)=>{
                   return <MedicalTable key={i} data={d}/>
                }
                        )
              }
             </tbody>
           </table>
         </div>
       </div>
     </div>
   </div>
  
                         </>
  )
}

export default MedicalTab