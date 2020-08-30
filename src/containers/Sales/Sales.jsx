import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Sales.scss';
import BoticarioServices from '../../utils/services';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { formatDate } from '../../utils/utils';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Sales() {
    const classes = useStyles();
    const [sales, setSales] = useState([]);
    const [totalCashback, setTotalCashBack] = useState(0);

    useEffect(() => {
        loadSales();
    }, []);


    useEffect(() => {
        calculateTotalCashback();
    }, [sales]);

    function loadSales() {
        BoticarioServices.getSales().then((res) => {
            setSales(res);
        })
            .catch((error) => {
                return error;
            });
    }

    function calculateTotalCashback() {
        let total = 0;
        if (sales.length > 0) {
            sales.forEach((el) => {
                total = total + (el.totalValue * el.cashbackPercentage);
            }
            );
        }
        setTotalCashBack(total);
    }

    return (
        <section className="sales">
            <div className="sales-header">
                <h2> Compras </h2>
            </div>
            <div className="sales-container">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Código</TableCell>
                                <TableCell align="center">Qtd itens</TableCell>
                                <TableCell align="center">Data da venda</TableCell>
                                <TableCell align="center">% Cashback</TableCell>
                                <TableCell align="center">Valor total</TableCell>
                                <TableCell align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sales.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center" component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.qtdItems}</TableCell>
                                    <TableCell align="center">{formatDate(row.dtSale)}</TableCell>
                                    <TableCell align="center">{row.cashbackPercentage ? `${row.cashbackPercentage * 100}%` : ' - '}</TableCell>
                                    <TableCell align="right">{`R$ ${row.totalValue}`}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="sales-cashback-message">
                <p>{`Valor total em cashback: R$ ${totalCashback.toFixed(2)}`}</p>
            </div>
        </section>
    );
}
export default Sales;