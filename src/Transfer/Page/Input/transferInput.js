import React, { useState } from "react";
import Axios from "axios";
import { Container, Row, Image } from "react-bootstrap";
import  "./style.css";
import { Link } from "react-router-dom";
import transfer from "../../transfer.js"
import qs from 'qs'

const TransferInput = (props) => {

  const[aboutId] = useState(props.location.state)
  const [data, SetData] = useState({data: [] });
  const [data2, SetData2] = useState({data: [] });
  const [data3, SetData3] = useState({data: [] });
  const [date, SetDate] = useState();
  const [notes, setNotes] = useState("")
  const [amount, setAmount] = useState("")

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_URL_BACKEND}profile/${aboutId}`)
      .then((res) => {
        SetData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_URL_BACKEND}profile/1`)
      .then((res) => {
        SetData2(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const onSubmit = () => {

    Axios({
    method: 'post', 
    url: `${process.env.REACT_APP_URL_BACKEND}transfer`,
    data: qs.stringify({
      id_sender: 1,
      id_receiver: aboutId,
      amount: amount,
      notes: notes,
      date: date,
    }) .then((res) => {
      SetData3(res.data);
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
    .then((res) => {
      alert('Success')
    })
    .catch((err) => console.log(err.message));
  
  }

  console.log(SetData3)

  return (
    
    <>
      <Container className="transfer-color mt-4"> 
        <div className="d-flex flex-column">
          <div className="p-1"> Transfer Money </div>
          <div className="p-1 mb-4">
            <div className="transfer-color-sub p-1 tr-box">
            {data.data.map(item => ( 
              <div className="nav-profile form-inline my-3 my-lg-0 pt-2 pb-2 pl-2">
                <Image
                  className="mr-sm-1"
                  src={require("../../../Assets/picture.png")}
                />
                <ul className="navbar-nav mr-sm-0 text-history ml-3">
                  <li>{item.first_name} {item.last_name}</li>
                  <li>{item.phone}</li>
                </ul>
              </div>
))}
            </div>

            <div className="p-1 mt-4">
              Type the amount you want to transfer and then <br /> press
              continue to the next steps.
            </div>

            <div className="p-1">
              <div className="d-flex justify-content-center">
                <div className="p-1">
                  <input onChange={(e) => setAmount(e.target.value)} 
                    type="text"
                    placeholder="0.00"
                    className="input-money"
                  />
                  {data2.data.map(item => ( 

                  <div className="p-1 text-avail">{item.balance} Available</div>

                  ))}
                  <div>
                    <Image src={require("../../../Assets/pen.png")} />
                    <input onChange={(e) => setNotes(e.target.value)} 
                      className="text text-tr-hs input-notes"
                      placeholder="Add some notes"
                    />
                    <section>
                      <hr size="30px" />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {data2.data.map(item => ( 
        <Container className="d-flex justify-content-end">
          <Link to = {{pathname: "/confirmation", state: item.id}} onClick={() => onSubmit()}>
              <button className="btn-continue-input text-btn-input mr-3">
                Continue
              </button>

          </Link>
        </Container>
        ))}
        </div>
      </Container>
    </>
  )
};

export default TransferInput;
