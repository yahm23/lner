import React from 'react'
import './lner.css'

export default function Confirmation() {
    return (
        <div>
            <header class="site-header basket-hidden js-site-header">
                <div class="boot-container">
                    <div class="boot-row">
                        <div class="col-xs-7 col-sm-8 col-md-6 col-lg-6 col-print-12 dice-logo__container">
                                <div class="dice-logo" itemscope="" itemtype="http://schema.org/Organization">
                                    <a class="dice-logo__link" href="/" itemprop="url">
                                        <span class="visuallyhidden">Homepage London North Eastern Railway</span>
                                        <svg role="img" aria-labelledby="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233 95" width="233" height="95">
                                            <title>LNER</title>
                                            <g data-name="Layer 1">
                                                <path id="polygon3827" d="M134.82 41.52h29.43v12.22h-29.43v13.11h33.89v12.22h-47.53V16.64h47.09v12.22h-33.45z"></path>
                                                <path id="polygon3829" d="M7.05 72.56V16.64H0v62.43h42.19v-6.51z"></path>
                                                <path id="path3831" d="M207 48.48c9.36 0 16-4.82 16-12.84v-.18c0-7.67-5.88-12.31-16-12.31h-19.19v25.33zm-26.23-31.84h26.84c7.67 0 13.83 2.32 17.75 6.24a17.28 17.28 0 0 1 4.82 12.31v.18c0 10.35-7.14 16.41-17 18.19l19.18 25.51h-8.65l-18.06-24.26h-17.84v24.26h-7z"></path>
                                                <path id="polygon3833" d="M106.2 16.64H92.64v38.44L50.72 0v79.07h13.56V39.38l41.92 55.03z"></path>
                                            </g>
                                        </svg>
                                    </a>
                        <div class="dice-logo__text">
                            <span>
                                London <strong>North Eastern</strong> Railway
                            </span>
                        </div>
                    </div>
                </div>
                        <div class="col-xs-5 col-sm-4 col-md-6 col-lg-6">
                            <nav class="navigation">

                            <a class="navigation__link" href="/my-account/">
                                <i class="icon-my-account" aria-hidden="true"></i>
                                <span class="visuallyhidden">Account area</span>
                            </a>

                            </nav>

                        </div>
                    </div>
                </div>
            </header>


            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div class="journey-details__summary">
                <div class="fulfilment-itinerary">

            <h2 class="fulfilment-itinerary__title">Your seat reservation(s) are confirmed</h2>
            <p class="fulfilment-itinerary__text fulfilment-itinerary__text--intro">Your email confirmation is on its way to you.</p>
            <div class="fulfilment-itinerary__text"><p>Your seat reservation(s):</p></div>

                            


    <div class="fulfilment-itinerary__details">
        <p class="fulfilment-itinerary__text"><strong>Outbound</strong> Fri 24 Jul 20</p>

        <p class="fulfilment-itinerary__text">
            <strong>Durham (DHM)</strong> to
            <strong>Newcastle (NCL)</strong>
        </p>

        <p class="fulfilment-itinerary__text">08:23 <span aria-hidden="true">&gt;</span><span class="visuallyhidden">to</span> 08:37</p>

                    <p class="fulfilment-itinerary__text">
                    1 Adult
                            </p>


            <span>Reservation Number: <strong>KV579752</strong></span>
    </div>





                        </div>            
            </div>
            </div>
        </div>
    )
}
