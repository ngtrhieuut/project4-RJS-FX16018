import { Form, FormGroup, Label } from 'reactstrap';
import { DEPARTMENTS } from './staffs';
import { useDispatch } from 'react-redux';
// import { addNewStaff } from './staffListSlide';
import {postStaff} from './staffListSlide';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function AddStaff() {

    const dispatch = useDispatch();

    const [inputName, setInputName] = useState('');
    const [inputBirth, setInputBirth] = useState('');
    const [inputStartDate, setInputStartDate] = useState('');
    const [inputDept, setInputDept] = useState('');
    const [inputDept2, setInputDept2] = useState('')
    const [inputSalaryScale, setInputSalaryScale] = useState('');
    const [inputAnualLeave, setInputAnualLeave] = useState('');
    const [inputOvertime, setInputOvertime] = useState('');
    // const [inputImage, setInputImage] = useState('/assets/images/alberto.png');

    const [spanTagText, setSpanTagText] = useState('')
    const [spanTagDoB, setSpanTagDoB] = useState('')
    const [spanTagStartDate, setSpanTagStartDate] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            (spanTagText === '') &&
            (spanTagDoB === '') &&
            (spanTagStartDate === '') &&
            (inputName !== '') &&
            (inputStartDate !== '') &&
            (inputBirth !== '')
        ) {
            const handleAddStaff = () => {
                dispatch(
                    postStaff({
                        id: uuidv4(),
                        name: inputName,
                        doB: inputBirth,
                        salaryScale: inputSalaryScale,
                        startDate: inputStartDate,
                        departmentId: inputDept2,
                        annualLeave: inputAnualLeave,
                        overTime: inputOvertime,
                        image: '/assets/images/alberto.png',
                }))
        
                setInputName('');
                setInputBirth('');
                setInputStartDate('');
                setInputDept('');
                setInputSalaryScale('');
                setInputAnualLeave('');
                setInputOvertime('');
            }
            return handleAddStaff();
        } else alert('Vui l??ng ki???m tra v?? nh???p ?????y ????? th??ng tin')
    } 

    


    const handleSetSpanName = (event) => {

        setInputName(event.target.value)
        if (inputName === "") {
            setSpanTagText('Vui l??ng nh???p H??? v?? T??n');  
        } else if (inputName.length < 2) {
            setSpanTagText('Vui l??ng nh???p tr??n 2 k?? t???');
        } else if (inputName.length > 29) {
            setSpanTagText('Vui l??ng nh???p d?????i 30 k?? t???');
        } else if (2<= inputName.length <= 29) {
            setSpanTagText('');  
        }        
    }

    const handleSetSpanDoB = (event) => {

        setInputBirth(event.target.value)

        if ([event.target.value] !== 0) {
            setSpanTagDoB('');
        } else {
            setSpanTagDoB('Vui l??ng nh???p Ng??y sinh');
        } ;
    }

    const handleSetSpanStartDate = (event) => {
        
        
        if ([event.target.value] !== 0) {
            setSpanTagStartDate('');
        } else {
            setSpanTagStartDate('Vui l??ng nh???p Ng??y v??o c??ng ty');
        }
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
                +
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Th??m nh??n vi??n</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> 
                        <div className="modal-body">
                            <Form id="formStaffInput" action="" method="POST" className="form" onSubmit={e => handleSubmit(e)}>
                                <FormGroup className="form-group">
                                    <Label for="exampleName" style={{width: '100%'}} className='labelInput'>
                                    H??? v?? T??n
                                    </Label>
                                    <input 
                                        id='exampleName'
                                        value={inputName}
                                        onChange={e => handleSetSpanName(e)}
                                        onBlur={e => handleSetSpanName(e)}
                                        placeholder="Nguy???n V??n A"
                                        type={'name'}/>
                                    <span className="form-message">{spanTagText}</span>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="exampleDoB" style={{width: '100%'}} className='labelInput'>
                                    Ng??y/Th??ng/N??m sinh
                                    </Label>
                                    <input
                                        id='exampleDoB'
                                        value={inputBirth}
                                        onChange={(e) => handleSetSpanDoB(e)}
                                        onBlur={(e) => handleSetSpanDoB(e)}
                                        placeholder="15/01/2001"
                                        type={'date'}/>
                                    <span className="form-message">{spanTagDoB}</span>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <Label for="examplestartDate" style={{width: '100%'}} className='labelInput'>
                                    Ng??y v??o c??ng ty
                                    </Label>
                                    <input
                                        id='examplestartDate'
                                        value={inputStartDate}
                                        onChange={e => setInputStartDate(e.target.value)}
                                        onBlur={(e) => handleSetSpanStartDate(e)}
                                        placeholder="15/01/2011"
                                        type={'date'}/>
                                    <span className="form-message">{spanTagStartDate}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDepartment" className='labelInput'>
                                    Ph??ng ban
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
                                    H??? s??? l????ng
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
                                    S??? ng??y ngh??? c??n l???i
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
                                    S??? ng??y ???? l??m th??m
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
                                    ???nh 3x4
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
                                >Th??m nh??n vi??n</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStaff;