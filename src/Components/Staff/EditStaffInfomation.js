import dateFormat from "dateformat";
import { Form, FormGroup, Label } from 'reactstrap';
import { DEPARTMENTS } from './staffs';
import { useDispatch, useSelector } from 'react-redux';
import {patchStaff, getStaffs} from './staffListSlide';
import { useParams } from "react-router-dom";
import { addStaffSelector } from '../../redux/selectors';
import { useState, useEffect } from 'react';

function EditStaff() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStaffs())
      }, [dispatch])

    const params = useParams()
    const staffList = useSelector(addStaffSelector);
    const staffInfo = staffList.find(staff => staff.id.toString() === params.staffId)

    console.log(staffInfo.departmentId)

    const [inputDept, setInputDept] = useState(staffInfo.departmentId);
    const [inputDept2, setInputDept2] = useState('')
    const [inputSalaryScale, setInputSalaryScale] = useState(staffInfo.salaryScale);
    const [inputAnualLeave, setInputAnualLeave] = useState(staffInfo.annualLeave);
    const [inputOvertime, setInputOvertime] = useState(staffInfo.overTime);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            patchStaff(params.staffId, {
                salaryScale: inputSalaryScale,
                departmentId: inputDept2,
                annualLeave: inputAnualLeave,
                overTime: inputOvertime,
        }))
    } 

    const handleInputDept = (event) => {
        setInputDept(event.target.value);

        if((event.target.value) === "Sale") {
            setInputDept2("Dept01");
        } else if ((event.target.value) === "HR") {
            setInputDept2("Dept02");
        } else if ((event.target.value) === "Marketing") {
            setInputDept2("Dept03");
        } else if ((event.target.value) === "IT") {
            setInputDept2("Dept04");
        } else setInputDept2("Dept05");
    }
    
    return (
        <div id="addButton">
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontWeight:'bolder'}}>
                Điều chỉnh thông tin
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Điều chỉnh thông tin nhân viên</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> 
                        <div className="modal-body">
                            <Form id="formStaffInput" action="" method="PATCH" className="form" onSubmit={e => handleSubmit(e)}>
                                <FormGroup className="form-group">
                                    <Label for="exampleName" style={{width: '100%'}} className='labelInput'>
                                    Họ và Tên
                                    </Label>
                                    <input 
                                        id='exampleName'
                                        value={staffInfo?.name}
                                        type={'name'}/>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="exampleDoB" style={{width: '100%'}} className='labelInput'>
                                    Ngày/Tháng/Năm sinh
                                    </Label>
                                    <input
                                        id='exampleDoB'
                                        value={dateFormat(staffInfo?.doB, "dd/mm/yyyy")}
                                        type={'text'}/>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="examplestartDate" style={{width: '100%'}} className='labelInput'>
                                    Ngày vào công ty
                                    </Label>
                                    <input
                                        id='examplestartDate'   
                                        value={dateFormat(staffInfo?.startDate, "dd/mm/yyyy")}
                                        type={'text'}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDepartment" className='labelInput'>
                                    Phòng ban
                                    </Label>
                                    <select 
                                        id="select exampleDepartment"
                                        value={inputDept}
                                        onChange={e => handleInputDept(e)}
                                        // onBlur={this.handleBlur("department")}
                                        style={{marginLeft: '10px'}}>
                                        {DEPARTMENTS.map(department => (
                                            <option key={department.id} value={department.name}>
                                                {department.name}
                                            </option>
                                        ))}
                                    </select>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplesalaryScale" style={{width: '100%'}} className='labelInput'>
                                    Hệ số lương
                                    </Label>
                                    <input
                                        id='examplesalaryScale'
                                        value={inputSalaryScale}
                                        onChange={e => setInputSalaryScale(e.target.value)}
                                        // onBlur={this.handleBlur("salaryScale")}
                                        placeholder="1.1"
                                        type={'number'} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleannualLeave" style={{width: '100%'}} className='labelInput'>
                                    Số ngày nghỉ còn lại
                                    </Label>
                                    <input 
                                        id='exampleannualLeave' 
                                        value={inputAnualLeave} 
                                        onChange={e => setInputAnualLeave(e.target.value)}
                                        // onBlur={this.handleBlur("annualLeave")}
                                        placeholder="1" 
                                        type={'number'} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleoverTime" style={{width: '100%'}} className='labelInput'>
                                    Số ngày đã làm thêm
                                    </Label>
                                    <input
                                        id='exampleoverTime'
                                        value={inputOvertime}
                                        onChange={e => setInputOvertime(e.target.value)}
                                        // onBlur={this.handleBlur("overTime")}
                                        placeholder="1" 
                                        type={'number'} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleimage" style={{width: '100%'}} className='labelInput'>
                                    Ảnh 3x4
                                    </Label>
                                    <input
                                        id='exampleimage'
                                        placeholder="/assets/images/alberto.png"
                                        type={'file'} />
                                </FormGroup>
                                <button 
                                    type="submit" 
                                    className="btn btn-secondary d-flex justify-content-center" 
                                    id='btnSubmit'
                                >Điều chỉnh</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditStaff;