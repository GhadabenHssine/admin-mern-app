import React from 'react'
import "./widghtLg.css"

const WidghtLg = () => {
    const Button = ({ type }) => {
        return <button className={"wedghtLgButton " + type}>{type}</button>
    }
    return (
        <div className='WidghtLg'>
            <h3 className='widghtLgTitle'>Latest transactions</h3>
            <table className='widghtLgTable'>
                <tbody>


                    <tr className='widghtLgTr' >

                        <th className="widghtLgTh">Costomer</th>
                        <th className="widghtLgTh">Date</th>
                        <th className="widghtLgTh">Amount</th>
                        <th className="widghtLgTh">Status</th>

                    </tr>

                    <tr className='widghtLgTr' >
                        <td className="widghtLgUser">
                            <img src="https://media.istockphoto.com/id/915352836/fr/photo/jolie-femme-latino-am%C3%A9ricaine-prenant-un-selfie-chez-souriant-%C3%A0-la-cam%C3%A9ra.jpg?s=170667a&w=0&k=20&c=-TOk3sPS3XategvHxuKYwtTwURL672XdKjtLzupnAWY=" alt="gh" className='wegthLgImg' />
                            <span className='wegthLgName'>Susan Carol</span>
                        </td>

                        <td className='wegthLgDate'>2 Jun 2021</td>
                        <td className='wegthLgAmount'>$122.00</td>
                        <td className='wegthLgStatus'>
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className='widghtLgTr' >
                        <td className="widghtLgUser">
                            <img src="https://media.istockphoto.com/id/915352836/fr/photo/jolie-femme-latino-am%C3%A9ricaine-prenant-un-selfie-chez-souriant-%C3%A0-la-cam%C3%A9ra.jpg?s=170667a&w=0&k=20&c=-TOk3sPS3XategvHxuKYwtTwURL672XdKjtLzupnAWY=" alt="gh" className='wegthLgImg' />
                            <span className='wegthLgName'>Susan Carol</span>
                        </td>

                        <td className='wegthLgDate'>2 Jun 2021</td>
                        <td className='wegthLgAmount'>$122.00</td>
                        <td className='wegthLgStatus'>
                            <Button type="Declined" />
                        </td>
                    </tr>
                    <tr className='widghtLgTr' >
                        <td className="widghtLgUser">
                            <img src="https://media.istockphoto.com/id/915352836/fr/photo/jolie-femme-latino-am%C3%A9ricaine-prenant-un-selfie-chez-souriant-%C3%A0-la-cam%C3%A9ra.jpg?s=170667a&w=0&k=20&c=-TOk3sPS3XategvHxuKYwtTwURL672XdKjtLzupnAWY=" alt="gh" className='wegthLgImg' />
                            <span className='wegthLgName'>Susan Carol</span>
                        </td>

                        <td className='wegthLgDate'>2 Jun 2021</td>
                        <td className='wegthLgAmount'>$122.00</td>
                        <td className='wegthLgStatus'>
                            <Button type=" Pending" />
                        </td>
                    </tr>
                    <tr className='widghtLgTr' >
                        <td className="widghtLgUser">
                            <img src="https://media.istockphoto.com/id/915352836/fr/photo/jolie-femme-latino-am%C3%A9ricaine-prenant-un-selfie-chez-souriant-%C3%A0-la-cam%C3%A9ra.jpg?s=170667a&w=0&k=20&c=-TOk3sPS3XategvHxuKYwtTwURL672XdKjtLzupnAWY=" alt="gh" className='wegthLgImg' />
                            <span className='wegthLgName'>Susan Carol</span>
                        </td>

                        <td className='wegthLgDate'>2 Jun 2021</td>
                        <td className='wegthLgAmount'>$122.00</td>
                        <td className='wegthLgStatus'>
                            <Button type="Approved" />
                        </td>
                    </tr>


                </tbody>

            </table>













        </div>
    )
}

export default WidghtLg