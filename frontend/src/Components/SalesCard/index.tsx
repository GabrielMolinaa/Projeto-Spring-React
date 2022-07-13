import NotificationButton from '../notification-button';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate,setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);


    return (
        <div className="DSMeta-card">
            <h2 className="DSMeta-sales-title">Vendas</h2>
            <div>
                <div className="DSMeta-form-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="DSMeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="DSMeta-form-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="DSMeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="DSMeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#554</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">12</td>
                            <td className="show992">13</td>
                            <td>R$55300.00</td>
                            <td>
                                <div className="DSMeta-redButton-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#553</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">12</td>
                            <td className="show992">13</td>
                            <td>R$55300.00</td>
                            <td>
                                <div className="DSMeta-redButton-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#223</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">12</td>
                            <td className="show992">13</td>
                            <td>R$55300.00</td>
                            <td>
                                <div className="DSMeta-redButton-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default SalesCard;
