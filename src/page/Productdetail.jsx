
import Card from 'react-bootstrap/Card';
import Description from '../components/Description';
import IMage from '../components/IMage';
import Name from '../components/Name';
import Price from '../components/Price';

const Productdetail = () => {


  return (
    <>
      <Card className='Card p-2'>
        <IMage />

        <Card.Body className='text-center'>

          <Card.Text as={"div"} className='font-monospace text-xl gap-4 d-flex flex-column' >
            <Name />
            <div className='fs-6 fw-bold flex-column d-flex gap-3'>
              <Price />
              <Description />
            </div>
          </Card.Text>


        </Card.Body>

      </Card>
    </>
  )
}

export default Productdetail