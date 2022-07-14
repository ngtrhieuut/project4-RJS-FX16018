import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import BreadcrumbbarStaff from './Breadcrumb';
import AddStaff from './AddStaff';
import style from './closBtn.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { staffRemaining } from '../../redux/selectors';
import filterSlide from './filterSilde';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { delStaff, getStaffs } from './staffListSlide';

function Staff() {
    
    const staffList = useSelector(staffRemaining);

    const [inputSearch, setInputSearch] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStaffs())
      }, [dispatch])
    

    const handleSearch = () => {
        dispatch(filterSlide.actions.searchFilterChange(inputSearch))
    }

    const handleDeleteStaff = (e) => {
        // const parentElement = document.getElementById('parentElement');
        const childElement = e.target.parentElement.parentElement
        dispatch(delStaff(childElement.id))
    }

    return (
        <div>
            <div className='container mt-4'>
                <div className="input-group container" id="searchStaff">
                    <input type="text" className="form-control" placeholder="Nguyễn Văn A" onChange={e => setInputSearch(e.target.value)} ></input>
                    <button className="btn btn-outline-light bg-secondary" type="button" id="button-addon2" onClick={handleSearch}>Tìm Kiếm</button>
                </div>
                <AddStaff />
                <BreadcrumbbarStaff />
            </div>
            <div className='container d-flex justify-content-center'>
                <Card
                    body
                    color="secondary"
                    inverse
                >
                    <CardBody className='row' id='parentElement'>
                        {staffList.map(staff => (

                            <Card className='col-6 col-md-4 col-lg-2 mb-2 p-2 staffview fade-in' key={staff.id} id={staff.id}>
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

export default Staff;