import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { exit, setPublicKey } from "../contexts/walletslice"

export default function Nav({ display }) {

    const dispatch = useDispatch()

    const clickHand = () => {


        window.solana.disconnect()
    
           

            window.solana.on('disconnect', () =>{
                dispatch(exit())
                dispatch(setPublicKey(""))
            } )


    }


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className={`d-${display} text-dark`} to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <button onClick={clickHand} class="btn btn-light" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-closed" viewBox="0 0 16 16">
                                <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                            </svg></button>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
