import React from 'react'
import {  useDispatch } from 'react-redux'
import { login, setPublicKey } from '../contexts/walletslice'
import logo from "../assets/a.png"

export default function Connect() {


    const dispatch = useDispatch()

    const connectClick = () => {

        const isPhantomInstalled = window.solana && window.solana.isPhantom

        if (isPhantomInstalled) {
            connectWallet() 
        }else{
            window.alert("Please Install Phantom or Register to Phantom")
            window.open("https://phantom.app/", "_blank");
        }
    }

    function connectWallet() {
        window.solana.connect()
            .then(resp => {
                const pbKey = resp.publicKey.toString()
                console.log(resp)
                dispatch(login())
                dispatch(setPublicKey(pbKey))
            })
            .catch(err => {
                window.alert("Error! Please try again later!")
          
            })


    }
    return (
        <div>
            <div className="container">
                <div className="row  d-flex flex-column" style={{ height: "100vh" }}>

                    <div className="col-6 mx-auto my-auto">
                        <div className="d-flex flex-column align-items-center">
                            <img className="img-fluid w-25 mb-2" src={logo} alt="img" />
                            <p className="text-light">Please Connect to Wallet</p>
                            <button onClick={connectClick} className="btn bg-primary w-50">Connect</button>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
