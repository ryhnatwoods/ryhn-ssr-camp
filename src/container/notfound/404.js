import React from 'react'
import './404.css'
import { Route } from 'react-router-dom'

function Status({code, children}) {
    return <Route render={({staticContext}) => {
        if(staticContext){
            staticContext.statusCode = code
        }
        return children;
    }} ></Route>

}

export default function Notfound() {
    return (
        <Status code={404} >
            <div className="agileits-main"> 
                <div className="agileinfo-row"> 
                    <div className="w3layouts-errortext"> 
                        <h2>4<span>0</span>4</h2> 
                        <h1>Sorry! The page you were looking for could not be found </h1> 
                        <p className="w3lstext">You have been tricked into click on a link that can not be found. Please check the url or go to <a href="#">main page</a> and see if you can locate what you are looking for </p> 
                    </div> 
                </div> 
            </div> 
        </Status>
    )
}
