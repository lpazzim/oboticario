import React, { useState, useEffect } from 'react';
import './Products.scss';
import BoticarioServices from '../../utils/services';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Fade, Backdrop, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        '@media only screen and (max-width: 600px)': {
            maxWidth: '300px',
        },
    },
    cartItem: {
        display: 'flex',
        width: '100%',
        margin: '24px 0'
    },
    itemDescription: {
        paddingRight: '24px',
        fontSize: '16px',
        minWidth: '350px',
        '@media only screen and (max-width: 600px)': {
            minWidth: '150px',
            fontSize: '12px',
        },
    },
    qtdItem: {
        paddingRight: '24px',
        width: '70px',
        '@media only screen and (max-width: 600px)': {
            width: '30px',
        },
    },
    totalItems: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    priceItem: {
        fontSize: '16px',
        '@media only screen and (max-width: 600px)': {
            fontSize: '14px',
            width: '100px',
            textAlign: 'right',
        },
    },
    continueButton: {
        marginTop: '24px',
    },
    iconRemove: {
        paddingTop: '20px',
        paddingLeft: '10px',
        color: '#3f51b5',
        cursor: 'pointer',
        '@media only screen and (max-width: 600px)': {
            paddingTop: '12px',
            paddingLeft: '10px',
        },
    }
}));

function Products() {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const [qtdTotalCart, setQtdTotalCart] = useState(0);
    const history = useHistory();

    useEffect(() => {
        loadProducts();
    }, []);

    useEffect(() => {
        calculateTotalCart();
    }, [cart]);

    function loadProducts() {
        BoticarioServices.getProducts().then((res) => {
            setProducts(res);
        })
            .catch((error) => {
                return error;
            });
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function addItem(item) {
        if (!cart.find(e => e.id === item.id)) {
            setCart([...cart, { ...item, qtd: 1 }]);
        }
    }

    function setQtd(qtd, idx) {
        cart[idx].qtd = qtd;
        calculateTotalCart();
    }

    function calculateTotalCart() {
        let total = 0;
        let qtdTotal = 0;
        if (cart.length > 0) {
            cart.forEach((el) => {
                total = total + (el.qtd * el.price);
                qtdTotal = parseInt(qtdTotal) + parseInt(el.qtd);
            }
            );
        }
        setQtdTotalCart(qtdTotal);
        setTotalCart(total);
    }

    function postSale() {
        const sale = {
            totalValue: totalCart.toFixed(2),
            qtdItems: qtdTotalCart,
            dtSale: new Date(),
            cashbackPercentage: 0.03,
            status: 'Em validação'
        };
        BoticarioServices.postSales(sale).then(() => {
            history.push('/sales');
        })
            .catch((error) => {
                return error;
            });
    }

    function removeItem(idx) {
        cart.splice(idx, 1);
        setCart([...cart]);
        if (cart.length <= 0) {
            handleClose();
        }
    }

    return (
        <section className="products">
            <div className="products-container">
                {products.map((c) => (
                    <div className="item">
                        <div className="item-image">
                            <img alt="imagem" src={c.image} onClick={() => {
                                addItem(c);
                                handleOpen();
                            }} />
                        </div>
                        <p>{c.description}</p>
                        <p>{`R$ ${c.price}`}</p>
                        <div className="item-button">
                            <Button fullWidth variant="contained"
                                color="primary"
                                onClick={() => {
                                    addItem(c);
                                    handleOpen();
                                }}>
                                COMPRE AGORA
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Sacola</h2>
                        <div key={cart}>
                            {cart.map((c, index) => (
                                <div className={classes.cartItem}>
                                    <p className={classes.itemDescription}>
                                        {c.description}
                                    </p>
                                    <TextField className={classes.qtdItem} id="qtd" defaultValue={c.qtd} label="qtd" onChange={(e) => setQtd(e.target.value, index)} />
                                    <p className={classes.priceItem}>{`R$ ${c.price}`}</p>
                                    <i className={`icon-trash-o ${classes.iconRemove}`} onClick={() => removeItem(index)} />
                                </div>
                            ))}
                        </div>
                        <div className={classes.totalItems}>
                            <h2>Subtotal</h2>
                            <p>{`R$ ${totalCart.toFixed(2)}`}</p>
                        </div>
                        <Button fullWidth variant="contained"
                            color="primary"
                            onClick={() => postSale()}>
                            FINALIZAR COMPRA
                        </Button>
                        <Button className={classes.continueButton} fullWidth variant="contained"
                            color="primary"
                            onClick={() => handleClose()}>
                            CONTINUAR COMPRANDO
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </section >
    );
}

export default Products;
