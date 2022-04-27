import BreadcrumbbarDept from "./BreadcrumbDept";
import { useDispatch, useSelector } from 'react-redux';
import { getDept } from "./departmentSlide";
import { useEffect } from "react";
import { Link } from "react-router-dom";


    
function Department() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDept())
      }, [dispatch])

    const newDept = useSelector(state => state.department.departments);

    return (
        <div className="container">
            <BreadcrumbbarDept />

            <div className='row container d-flex justify-content-center'>
                {newDept.map(dept => (
                    <div className="dept card col-12 col-md-6 col-lg-4 m-1" key={dept.id}>
                        <Link to={`/department/${dept.id}`} id={dept.id} className='deptClass'>                            
                            <div className="card-body">
                                <h5 className="card-title">Phòng ban: {dept.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Số lượng nhân viên: {dept.numberOfStaff}</h6>
                            </div>                             
                        </Link>
                    </div>
                ))}                
            </div>
        </div>
    )
}

export default Department;