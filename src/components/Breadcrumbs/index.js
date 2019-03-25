import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import Aux from '@/hoc/Auxx';

const breadCrumbs = (props) => {
    let breadcrumbs = [];
    const Breadcrumbs = styled.div`
            width: 100%;
            display: flex;
            position: fixed;
            top: 60px;
            border-top: 1px solid #ebedf2;
            z-index: 100;
            background-color: #FFF;
            height: 50px;
            display: flex;
            left: 0;
            padding: 0 20px;
            align-items: center;
    `;
    const BreadcrumbsH3 = styled.h3`
            margin: 0;
            padding: 0 1.5rem 0 0;
            font-size: 1.2rem;
            font-weight: 500;
            color: #434349;
    `;
    const BreadcrumbsList = styled.div`
        display: flex;
        align-items: center;
    `;
    let BreadItem = styled(Link)`
            padding: 0 0.35rem 0 0;
             font-size: 1rem;
             font-weight: 400;
             color: #959cb6;
            transition: all 0.3s;
            text-decoration: none;
            &:hover{
                color: #5d78ff;
            }
    `;
    const Point = styled.i`
        font-size: 5px;
        padding: 0 0.35rem 0 0;
        color: #959cb6;
        opacity: 0.25;
    `;
    if (props.items && props.items.length > 0) {
         breadcrumbs = props.items.map((item) => {
            return (
                <Aux key={item.to}>
                    <Point className="fas fa-circle"></Point>
                    <BreadItem key={item.to} to={item.to}>{item.title}</BreadItem>
                </Aux>
            );
        });
    }
    return (
        <Breadcrumbs>
            <BreadcrumbsH3>
                {props.current ? props.current : 'Home'}
            </BreadcrumbsH3>
            <BreadcrumbsList>
            <BreadItem to={'/boards'}><i className="fas fa-home"></i></BreadItem>
            {breadcrumbs}
            </BreadcrumbsList>
        </Breadcrumbs>
    );
};

export default breadCrumbs;