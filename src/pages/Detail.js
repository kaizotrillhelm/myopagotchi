import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav';
import ConnectPage from "../components/Connect"
import { NonceAccount } from '@solana/web3.js';
import { Component, PropTypes, ReactDOM } from 'react';


export default function Detail() {

    

    const isConnected = useSelector((state) => state.wallet.isConnected)


    const nftData = useSelector((state) => (state.detail.data))

    console.log(nftData);

    let nombre = nftData.name

    /*let leech = nombre.includes("Leech");
    let borg = nombre.includes("Borg");
    let clump = nombre.includes("Clump");
    let phylum = nombre.includes("Phylum");
    let egg = nombre.includes("Egg"); */

    let eggbool = false
    let borgbool = false
    let clumpbool = false
    let leechbool = false


    class App extends React.Component {
  
        buttonClick(){
          console.log("came here")
                  
            eggbool = nombre.includes("Egg");
        
            if (eggbool == true) {
            window.location='https://kaizotrillhelm.github.io/';
            }
        
            clumpbool = nombre.includes("Clump");
        
            if (clumpbool == true) {
            window.location='https://kaizotrillhelm.github.io/';
            }

            borgbool = nombre.includes("Borg");
        
            if (borgbool == true) {
            window.location='https://kaizotrillhelm.github.io/';
            }
        
            leechbool = nombre.includes("Leech");
        
            if (leechbool == true) {
            window.location='https://kaizotrillhelm.github.io/';
            }
          
        }
        
        subComponent() {
          return (<div>Click above to love your Myogotchi!</div>);
        }
        
        render() {
          return ( 
            <div className="patient-container">
                <button onClick={this.buttonClick.bind(this)}>Click me</button>
                {this.subComponent()}
             </div>
           )
        }
        
      
      
      }
      
      
      

/*
class LoadGotchi extends React {
                      
    leechbool = document.getElementById("demo").innerHTML = nombre.includes("leech");



}*/



  
    
    if(!isConnected){
        return (<ConnectPage/>)
    }
    return (
        <div>

            <Nav display={""}/>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-5">
                        <img className="img-fluid" src={nftData.image} />

                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-light">{nftData.name}</h1>

                            </div>
                           


                            <div className="col-12  mt-5">

                                <p className="text-light">{nftData.collection.name}
                                <br/> 
                                {nftData.collection.family}  
                                <br/> 
                                {nombre} 
                                <br/>


                                <App/>
    


                                
                                <br/>
                                {nftData.properties.maxSupply}  
                                                        
                                </p>
                                

                                    


                            </div>


                

                        </div>

                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-12 text-light text-center">
                        {nftData.description}
                                         
                    </div>

                </div>

            </div>


        </div>
        


    )
}




