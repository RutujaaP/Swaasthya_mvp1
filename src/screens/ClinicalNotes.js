import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import CNAppBar from "../components/CNAppBar";
import CNSmartPrescriptions from "../components/CNSmartPrescriptions";
import CNCheckboxes from "../components/CNCheckboxes";
import CNPayment from "../components/CNPayment";
import CNPaymentRadio from "../components/CNPaymentRadio";
import CNPatientInfo from "../components/CNPatientInfo";

const ClinicalNotes = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Grid item>
        <CNAppBar />
      </Grid>
      <Grid item>
        <CNPatientInfo />
      </Grid>
      <Grid item>
        <CNCheckboxes />{" "}
      </Grid>
      <Grid item>
        <CNSmartPrescriptions />{" "}
      </Grid>
      {/* <Grid item>
        <CNPayment />{" "}
      </Grid>
      <Grid item>
        <CNPaymentRadio />
      </Grid> */}
    </Grid>
  );
};
export default ClinicalNotes;
