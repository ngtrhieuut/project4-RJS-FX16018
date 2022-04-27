import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle } from 'reactstrap';
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { addStaffSelector } from '../../redux/selectors';
import {getStaffs} from './staffListSlide';
import { useEffect } from "react";
import EditStaff from "./EditStaffInfomation";


function StaffInfomation() {
    const params = useParams()
    const staffList = useSelector(addStaffSelector);
    const staffInfo = staffList.find(staff => staff.id.toString() === params.staffId)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStaffs())
      }, [dispatch])

    const handleDeptName = (deptID) => {

        if((deptID) === "Dept01") {
            return "Sale";
        } else if ((deptID) === "Dept02") {
            return "HR";
        } else if ((deptID) === "Dept03") {
            return "Marketing";
        } else if ((deptID) === "Dept04") {
            return "IT";
        } else return "Finance";

    }

    return(
        <div className="container">
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
                        <Link to="/staff" className='Breadcrumb' style={{textDecoration: 'none', color: "#212529"}}>
                        Nhân viên
                        </Link>
                    </CardTitle>
                    </CardBody>
                </Card>          
                </BreadcrumbItem>

                <BreadcrumbItem active>
                <Card>
                    <CardBody className='p-1'>
                    <CardTitle tag="h6">
                        <div className='Breadcrumb' id="changeText">
                        {staffInfo?.name}
                        </div>
                    </CardTitle>
                    </CardBody>
                </Card>  
                </BreadcrumbItem>
            </Breadcrumb>

            <EditStaff />
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <img src={staffInfo?.image} alt={staffInfo?.name} id='imgStaff'/>
                </div>
                <div className='col-12 col-md-8 col-lg-9' id='staffInfomation'>
                    <p><strong>Ngày sinh: </strong>{dateFormat(staffInfo?.doB, "dd/mm/yyyy")}</p>
                    <p><strong>Ngày vào công ty: </strong>{dateFormat(staffInfo?.startDate, "dd/mm/yyyy")}</p>
                    <p><strong>Phòng ban: </strong>{handleDeptName(staffInfo?.departmentId)}</p>
                    <p><strong>Số ngày nghỉ còn lại: </strong>{staffInfo?.annualLeave}</p>
                    <p><strong>Số ngày đã làm thêm: </strong>{staffInfo?.overTime}</p>
                </div>
            </div>
        </div>
    )
}
export default StaffInfomation;
