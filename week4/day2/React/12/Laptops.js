import React from 'react'
import Device from '../components/Device'
import { filterDevicesByYear as dvfltr } from '../lib/functions'
const Laptops = (props) => {
    const laptops = [
        {
            device: 'Dell',
            year: 2022
        },
        {
            device: 'HP',
            year: 2019
        },
        {
            device: 'Apple',
            year: 2020
        },
        {
            device: 'Toshiba',
            year: 2010
        }
    ];
    
    const modernDevices = dvfltr(laptops, 2019)

    return (
        <div>
            <h2>Devices</h2>
            {modernDevices.map((laptop, i) => {
                return <Device laptop={laptop} key={i} />
            })}
        </div>
    )
}

export default Laptops