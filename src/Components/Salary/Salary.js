import BreadcrumbbarSalary from './BreadcrumbSalary';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
// import { addStaffSelector } from '../../redux/selectors';
import { getSalary } from './salarySlice';

function Salary() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSalary())
      }, [dispatch])

    const newSalary = useSelector(state => state.salary.salary);
    
    // function showSalary(scale, time) {
    //     const show = scale*3000000 + time*200000;
    //     return show.toLocaleString('vi-VN')
    // }

    return (
        <div className="dep container">
            <BreadcrumbbarSalary />
            <div className='row conatainer d-flex justify-content-center'>
                {newSalary.map(salary => (
                    <div className="card col-12 col-md-6 col-lg-4 m-1 salary" key={salary.id}>
                        <div className="card-body"> 
                            <h5 className="card-title">{salary.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Mã nhân viên: {salary.id}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Hệ số lương: {salary.salaryScale}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Số giờ làm thêm: {salary.overTime}</h6>
                            <div id='showSalary'>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Lương {showSalary(salary.salaryScale, salary.overTime)} đồng</h6> */}
                                <h6 className="card-subtitle mb-2 text-muted">Lương {salary.salary.toLocaleString('vi-VN')} đồng</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Salary;