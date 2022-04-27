import style from '../Staff/closBtn.module.css';
import { Link, Outlet } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { getStaffs } from '../Staff/staffListSlide';
import { getDept } from './departmentSlide';

function DeptInfomation() {
    const params = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStaffs());
        dispatch(getDept());
      }, [dispatch])

    const newsDept = useSelector(state => state.staffList.staffs);
    const newDept = useSelector(state => state.department.departments);

    const deptInfo = newsDept.filter(dept => dept.departmentId.includes(params.departmentName))
    const deptName = newDept.filter(dept => dept.id.includes(params.departmentName))
   
    console.log(deptName);

    const handleDeleteStaff = (idStaff) => {
        //     const parentElement = document.getElementById('parentElement');
        //     const childElement = idStaff.target.parentElement.parentElement
        //     parentElement.removeChild(childElement);
        //     dispatch(removeStaff(idStaff.target.parentElement.parentElement.id))
        }

    return(
        <div className="container">
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Card>
                            <CardBody className='p-1'>  
                            <CardTitle tag="h6">
                                <Link to="/" className='Breadcrumb' style={{textDecoration: 'none', color: "#212529"}}>
                                Trang chủ
                                </Link>
                            </CardTitle>
                            </CardBody>
                        </Card>          
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Card>
                            <CardBody className='p-1'>  
                            <CardTitle tag="h6">
                                <Link to="/department" className='Breadcrumb' style={{textDecoration: 'none', color: "#212529"}}>
                                Phòng ban
                                </Link>
                            </CardTitle>
                            </CardBody>
                        </Card>          
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Card>
                            <CardBody className='p-1'>  
                            <CardTitle tag="h6">
                                {deptName.map(dept => (
                                    <div className='Breadcrumb' id="changeText">
                                        Nhân viên phòng {dept.name}
                                    </div>
                                ))}                            
                            </CardTitle>
                            </CardBody>
                        </Card>          
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='container d-flex justify-content-center'>
                <Card
                    body
                    color="secondary"
                    inverse
                >
                    <CardBody className='row' id='parentElement'>
                        {deptInfo.map(staff => (

                            <Card className='col-6 col-md-4 col-lg-2 mb-2 p-2 staffview' key={staff.id} id={staff.id}>
                                <div className={style.containerBtn + " " + style.zoomShrink} onClick={e => handleDeleteStaff(e)}>
                                    <div className={style.closeIcon + " " + style.zoomShrink}></div>
                                </div>
                                <Link to={`/staff/${staff.id}`} style={{textDecoration : 'none'}}>
                                    <CardImg
                                    alt={staff.name}
                                    src={staff.image}
                                    top
                                    width="100%"
                                    className='mt-1'
                                    />
                                    <CardBody style={{color: 'black'}} className='p-1'>
                                        <CardTitle >
                                            <div className='staffmain'>
                                                {staff.name}
                                            </div>
                                        </CardTitle>
                                    </CardBody>
                                </Link>                       
                            </Card>
                        ))} 
                    </CardBody>
                </Card>
            </div>
            <Outlet />
        </div>
    )
}
export default DeptInfomation;
