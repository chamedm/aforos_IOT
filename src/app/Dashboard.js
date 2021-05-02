import React, { useEffect } from "react";
import PlaceItem from "./../card/PlaceItem";
import Navbar from "./Navbar";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BE_URL = "https://server2-excellent-dog-jq.mybluemix.net/api/grafica";

function Dashboard() {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [dataAlert, setDataAlert] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState({});

  const handleClickOpen = (data) => {
    setAlertOpen(true);
    setDataAlert(data);
  };

  const handleClose = () => {
    setAlertOpen(false);
  };

  const cafeteriaData = {
    id: "c1",
    name: "Cafeteria central",
    date: "29/04/2021",
    maxCapacity: 50,
    capacityLog: {
      "06:00": 1,
      "07:00": 3,
      "08:00": 10,
      "09:00": 25,
      "10:00": 35,
      "11:00": 38,
      "12:00": 23,
      "13:00": 40,
      "14:00": 35,
      "15:00": 52,
    },
  };

  // const jardinData = {
  //   id: "c2",
  //   name: "Jardín central",
  //   date: "29/04/2021",
  //   maxCapacity: 30,
  //   capacityLog: {
  //     "06:00": 1,
  //     "07:00": 1,
  //     "08:00": 2,
  //     "09:00": 3,
  //     "10:00": 5,
  //     "11:00": 21,
  //     "12:00": 15,
  //     "13:00": 26,
  //     "14:00": 23,
  //     "15:00": 28,
  //   },
  // };

  useEffect(() => {
    fetch(BE_URL, {
      method: "GET",
    })
    .then(res => {
      if(res.status === 200)
       return res.json()
      })
    .then(response => {
      console.log(response);
      setData(response);
      setIsLoading(false);
    }
    ).catch(e => {
      console.log(e)
    })
  },[] )

  return (
    <div className="App">
      <Navbar />
      <p className="title">Dashboard</p>
      {isLoading ? 
        <p>Loading...</p>
      
    :
      <>
            <Dialog
        open={alertOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {`¡Alerta! Aforo excedido en ${dataAlert.name}`  }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {`El aforo permitido en ${dataAlert.name} es de ${dataAlert.maxCapacity} y se ha excedido.
          \n Notifique a la brigada de cuidado de Aforos`}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      <PlaceItem data={cafeteriaData} openDialog={handleClickOpen} />
      <PlaceItem data={data} openDialog={handleClickOpen}  />
      </>    
    }
    </div>
  );
}
export default Dashboard;
