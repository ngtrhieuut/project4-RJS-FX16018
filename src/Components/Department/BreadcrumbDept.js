import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle } from 'reactstrap';

function BreadcrumbbarDept() {
  return (
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

        <BreadcrumbItem active>
          <Card>
            <CardBody className='p-1'>
              <CardTitle tag="h6">
                <div className='Breadcrumb' id="changeText">
                  Phòng ban
                </div>
              </CardTitle>
            </CardBody>
          </Card>  
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}
export default BreadcrumbbarDept;