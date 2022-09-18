//rfc
import React from 'react'
import { useState } from 'react'
/*
    this.state = {
        like:1,
        number:1
    }
    this.setState({
        number: 2
    })

*/
export default function DemoChonXe() {
    const [imgSrc, setImgSrc] = useState('./img/products/red-car.jpg');

    const handleChangeColor = (color) => {
        setImgSrc(`./img/products/${color}-car.jpg`);
    }

    return (
        <div>
            <h3>Demo chọn xe</h3>
            <div className='row'>
                <div className='col-6'>
                    <img src={imgSrc} alt='car' className='w-100' />
                </div>
                <div className='col-6'>
                    <button className='btn mx-2' style={{ background: 'red', color: '#fff' }} onClick={()=>{
                        handleChangeColor('red');
                    }}>Red</button>
                    <button className='btn mx-2' style={{ background: 'silver', color: '#fff' }} onClick={()=>{
                        handleChangeColor('silver');
                    }}>Silver</button>
                    <button className='btn mx-2' style={{ background: 'black', color: '#fff' }} onClick={()=>{
                        handleChangeColor('black');
                    }}>Black</button>
                    <button className='btn mx-2' style={{ background: '#EEE', color: '#fff' }} onClick={()=>{
                        handleChangeColor('steel');
                    }}>Steel</button>
                </div>
            </div>
        </div>
    )
}
