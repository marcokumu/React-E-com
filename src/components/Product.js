import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://electronics-details.herokuapp.com/electronics${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        }
        getProduct();
    }, [id]);
    const Loading = () => {
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <NavLink className="text-decoration-none text-dark" to={`/`}>
                            <div className="d-flex align-items-center m-3">
                                <Skeleton height={20} width={50} />
                            </div>
                        </NavLink>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <Skeleton height={300} width={250} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">                                                <Skeleton height={30} width={150} />
                                        </span>
                                            <h5 className="text-uppercase">
                                                <Skeleton height={30} width={200} />
                                            </h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price">
                                                    <Skeleton height={20} width={70} />
                                                    <Skeleton height={30} width={100} />
                                                </span>
                                            </div>
                                        </div>