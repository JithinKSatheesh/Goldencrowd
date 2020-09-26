import React,{useState} from 'react'
import VisibilitySensor from "react-visibility-sensor";
import TeamSideBar from './TeamSidebar'



export default function Whatwedoservice() {
    const [visTrigger, setVisTrigger] = useState(true)
    const [visTrigger2, setVisTrigger2] = useState(true)
    const [visTrigger3, setVisTrigger3] = useState(true)
    return (
        <>
            <div className="div d-flex">
                <TeamSideBar height="1000px"/>
            </div>


            <div className="row">
                <div className="col-12 col-md-4 text-center text-md-right">
                    <div className="what-we-do-big text-warning">01</div>
                    <div className="what-we-do-big ">WEBSITES</div>
                </div>
                <div className="col-12 col-md-8">
                    <VisibilitySensor active={visTrigger}
                        onChange={(isVisible) => {(isVisible && setVisTrigger(false))}}
                        > 
                        {(isVisible)=>{
                            return(<>
                                <div className={`wwd-websites-box what-we-do-med p-4 text-secondary text-center text-md-left ${isVisible.isVisible?"wwd-card-translate":""}`}>
                                    <br />
                                    <span className="text-"> WE MAKE</span> <br /> WORLD CLASS <span className="text-warning"> WEBSITES</span>
                                </div>
                            </>)
                        }}   
                    </VisibilitySensor>
                    <div className="space-50"></div>
                    <div className="wwd-websites-show d-flex justify-content-around">
                        <div className="wwd-card-preview">
                            <div className="text-center p-3">
                            <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M22.825 7.477c2.111-4.696.548-7.477-3.221-7.477-1.792 0-4.258.93-6.012 1.797-6.239-.068-9.823 4.349-10.989 8.536 1.833-2.229 4.182-4.3 5.688-4.729-4.814 3.932-8.291 10.322-8.291 14.506 0 2.31 1.027 3.89 3.41 3.89 1.955 0 3.529-.929 4.989-1.586 1.36.733 2.861 1.168 4.396 1.168 5.62 0 9.18-2.9 10.766-7.582h-6.014c-.897 1.623-2.144 2.616-4.292 2.616-2.642 0-4.522-2.239-4.588-4.616h15.311c.014-.324.022-.643.022-.957 0-2.092-.342-3.943-1.175-5.566zm-19.66 9.002c.803 2.173 2.433 4.164 4.464 5.482-5.967 3.016-6.978-1.131-4.464-5.482zm5.567-5.479c.087-1.777 1.882-4.312 4.704-4.312 2.641 0 4.497 2.224 4.562 4.312h-9.266zm8.579-8.438c3.276-1.529 7.314-1.343 5.056 4.117-1.053-1.619-2.676-2.989-5.056-4.117z"/></svg>
                            </div>
                            <div className="small font-weight-bold text-center text-secondary">PROJECTS</div>
                        </div>
                        <div className="wwd-card-preview">
                            <div className="text-center p-3">
                                <svg width="24" height="24" fill="grey" fill-rule="evenodd" clip-rule="evenodd"><path d="M6.178 4c-.914-1.493-2.944-3-6.178-3v-1c4.011 0 6.415 2.11 7.314 4h6.159l10.527 10.625-9.375 9.375-10.625-10.581v-6.242l-.282-.128c-1.043-.476-2.226-1.015-3.718-1.015v-1c1.641 0 2.943.564 4 1.044v-2.078h2.178zm10.944 9.109c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.405-7.109c-.051.445-.215.83-.49 1.114-.387.398-.797.57-1.227.599.008.932.766 1.685 1.699 1.685.938 0 1.699-.761 1.699-1.699 0-.932-.751-1.69-1.681-1.699z"/></svg>
                            </div>
                            <div className="small font-weight-bold text-center text-secondary">PRICING</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================ */}
                <div className="wwd-space"></div>
            {/* ============================ */}
            <div className="row d-flex">
                <div className="col-12 col-md-4 text-center text-md-left order-1 order-md-2">
                    <div className="what-we-do-big text-warning">02</div>
                    <div className="what-we-do-big ">APPS</div>
                </div>
                <div className="col-12 col-md-8 order-2 order-md-1 ">
                    <VisibilitySensor active={visTrigger2}
                        onChange={(isVisible) => { (isVisible && setVisTrigger2(false)) }}
                        >
                        {(isVisible) => {
                            return (<>
                                <div className={`wwd-websites-box what-we-do-med p-4 text-secondary  text-center text-md-right ${isVisible.isVisible?"wwd-card-translate":""}`}>
                                    <br />
                                    <span className="text-"> WE MAKE</span> <br /> STUNNING <span className="text-warning"> APPS</span>
                                </div>
                            </>)
                        }}
                    </VisibilitySensor>
                    <div className="space-50"></div>
                    <div className="wwd-websites-show d-flex justify-content-around">
                        <div className="wwd-card-preview">
                            <div className="text-center p-3">
                            <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M10.6 6.35c0 .193-.156.349-.349.35-.194 0-.351-.157-.351-.35 0-.193.157-.35.35-.35s.35.157.35.35zm3.15-.35c-.193 0-.35.157-.35.35s.156.349.349.35c.194 0 .351-.157.351-.35s-.157-.35-.35-.35zm10.25-1v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-16.9 4.829c0-.563-.487-1.03-1.05-1.029-.564-.001-1.05.466-1.05 1.03v4.274c0 .564.486.996 1.05.996.563 0 1.05-.431 1.05-.996v-4.275zm9.1-1.029h-8.4l.001 6.611c0 .603.487 1.089 1.09 1.089h.309v2.479c0 .563.494 1.021 1.057 1.021.564 0 1.043-.458 1.043-1.021v-2.479h1.4v2.479c0 .563.496 1.021 1.058 1.021.564 0 1.042-.458 1.042-1.021v-2.479h.312c.6 0 1.089-.487 1.089-1.09v-6.61zm0-.702c0-1.579-.843-2.664-2.134-3.387l.658-1.301c.034-.068.012-.154-.053-.193-.064-.037-.143-.012-.178.057l-.663 1.314c-1.071-.516-2.48-.569-3.661 0l-.664-1.315c-.034-.068-.113-.094-.177-.057-.064.039-.087.125-.052.194l.658 1.301c-1.291.723-2.134 1.809-2.134 3.387h8.4zm2.8 1.731c0-.563-.486-1.03-1.05-1.029-.563-.001-1.05.466-1.05 1.03v4.274c0 .564.486.996 1.05.996s1.05-.431 1.05-.996v-4.275z"/></svg>
                            </div>
                            <div className="small font-weight-bold text-center text-secondary">PROJECTS</div>
                        </div>
                        <div className="wwd-card-preview">
                            <div className="text-center p-3">
                            <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
                            </div>
                            <div className="small font-weight-bold text-center text-secondary">DISCUSS</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================ */}
            <div className="wwd-space"></div>
            {/* ============================ */}
            <div className="row">
                <div className="col-12 col-md-4 text-center text-md-right">
                    <div className="what-we-do-big text-warning">03</div>
                    <div className="what-we-do-big ">SOFTWARES</div>
                </div>
                <div className="col-12 col-md-8 ">
                    <VisibilitySensor active={visTrigger3}
                        onChange={(isVisible) => {(isVisible && setVisTrigger3(false))}}
                        > 
                        {(isVisible)=>{
                            return(<>
                                <div className={`wwd-websites-box ${isVisible.isVisible?"wwd-card-translate":""} what-we-do-med p-4 text-secondary  text-center text-md-left `}>
                                    <br />
                                    <span className="text-"> WE MAKE</span> <br /> OPEN SOURCE <span className="text-warning"> SOFTWARES</span>
                                </div>
                            </>)
                        }}   
                    </VisibilitySensor>
                    <div className="space-50"></div>
                    <div className="wwd-websites-show d-flex justify-content-around">
                        <div className="wwd-card-preview">
                            <div className="text-center p-3">
                            <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-12.879 14l-4.707-4.707-1.414 1.414 3.293 3.293-3.293 3.293 1.414 1.414 4.707-4.707zm7.879 3h-7v2h7v-2z"/></svg>
                            </div>
                            <div className="small font-weight-bold text-center text-secondary">PROJECTS</div>
                        </div>
                        <div className="wwd-card-preview">
                            <div className="text-center p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </div>
                            <div className="small font-weight-bold text-center text-secondary">CONTRIBUTE</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
