import React from 'react';
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({title, cases, active, isRed, total, ...props}) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            {/*Title -----> Corona virus cases*/}
            <Typography className="infoBox_title" color="textSecondary">
                {title}
            </Typography>


            {/*Number of cases*/}
            <h2 className={`infoBox_cases ${!isRed && "InfoBox_cases--green"}`}>{cases}</h2>

            {/*Total Cases*/}
            <Typography className="infoBox_total" color="textSecondary">
                {total} Total
            </Typography>

        </Card>
    )
}
export default InfoBox;