import React, { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from "./supabase.js";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import bcrypt from 'bcryptjs';
import { data } from '/Users/jamespreston/sei-course/classwork/Projects/Project_4/my-project/client/data.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --------------------------------------------------- Home Page 

function HomePage() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    // const { data } = await supabase.from("users").select();
    setData(data[0].name);
  }

  return <div className="home-page">
    {/* {data} */} 
    <h1> Welcome to <em><strong>What the ETF!</strong></em></h1> 
    <p> <strong>We're here to learn about ETF's, do some research and hopefully, get trading! </strong> </p> 
    
    <p className="footerComment"> Created by James Preston</p>
    </div>;

  
}

// --------------------------------------------------- Information Page 

function Information() {
  return (
    <div className="information-page">

      <div className="informationPageTextContainer">
        <h2><em>What is an ETF?</em></h2>
        <p>Good question! An ETF is an investment that's like a basket filled with different kinds of fruits (but instead of fruit they may be stocks, bonds, etc.). 
        Instead of buying each fruit separately, you can buy a share of the basket, and you'll own a small part of all the fruits inside.</p>

        <h2><em>How is that different to a stock?</em></h2>
        <p>A "stock" (aka a "Common Stock") is like buying one specific fruit from the basket. You own that particular piece, and your investment is tied to how well that specific fruit is doing.</p>
        <h2>Okay, so why should I invest in ETF's all of a sudden?</h2>
        <p> Its all about "Passive Investment"! Lets break that down.</p>
        <ol>
    <li><strong>Why Everyone's Talking About ETFs:</strong></li>
    <p>So, there's a lot of buzz about these things called ETFs, especially among everyday folks like us. Let's break down what's making them so popular:</p>
    <ul>
        <li><strong>Easy on the Wallet:</strong> ETFs tend to have lower fees than those fancy managed funds. Less cost = more money for us!</li>
        <li><strong>All-in-One Package:</strong> With one ETF, you can invest in a bunch of stuff at once, making it way less risky.</li>
        <li><strong>No Secrets:</strong> ETFs tell you what they're invested in every day. No shady business here!</li>
        <li><strong>Buy and Sell Anytime:</strong> Just like stocks, you can trade ETFs whenever the stock market's open. Talk about flexibility!</li>
        <li><strong>Less Tax Hassle:</strong> Thanks to how they're set up, ETFs can help you dodge some pesky tax events.</li>
        <li><strong>Anyone Can Dive In:</strong> With all these cool investment apps out now, getting into ETFs has never been easier.</li>
        <li><strong>So Many Choices:</strong> From tech to green energy, there's an ETF for pretty much anything you're into.</li>
    </ul><br/>
    <li><strong>Why ETFs Are the New Cool Kid in Town:</strong></li>
    <ul>
        <li><strong>Change in Thinking:</strong> A lot of folks have realized it's super hard to beat the market all the time. Why try to be a hero when you can just go with the flow?</li>
        <li><strong>Tech to the Rescue:</strong> All these new apps and platforms have made it a breeze to start investing in ETFs.</li>
        <li><strong>Smart & Savvy Investors:</strong> People are getting wiser about where their money's going. And they're loving the clear-cut, budget-friendly nature of ETFs.</li>
        <li><strong>Rollercoaster Markets:</strong> When the financial world gets wild, the safety of spreading out your bets (aka diversifying) is a big win.</li>
    </ul>
    <p>To sum it up, ETFs are all the rage because they're cost-effective, straightforward, and accessible. As the world of money keeps changing, it seems like ETFs are here to stay and continue shining.</p>
</ol>

      </div>

      <div className="informationPageTextContainer">
        <h2><em>Terminology</em></h2>

        <strong><em>Total Assets</em></strong>
        <p>Total Assets in an ETF refers to the total market value of all the assets held by that ETF. It's essentially a measurement of the size or scale of the ETF.</p>

        <strong><em> Tracking Error</em></strong>
        <p>It's the difference between the performance of the ETF and the performance of the index it's trying to mimic.</p>

        <strong><em>Total Return 1YR (1 Year)</em></strong>
        <p>You buy a magic bean plant (an ETF) for $100. After a year, the plant grows and is now worth $110. Also, during that year, it produced beans (like dividends) worth $10. So, your total return for 1 year would be 20% (($110 + $10 - $100) / $100).</p>

        <strong><em>Total Return 3Yr (3 Years)</em></strong>
        <p>The same principle for Total Return 1Yr! Just instead over a 3 year period.</p>
      </div>

      <div className="informationPageTextContainer">
        <h3><em>How can you get started with trading?</em></h3>
        <ul>
          <li>
            <img src="data:image/jpeg;base64,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" alt="CommSec Icon" width="50" />
            <a href="https://www.commsec.com.au/"><strong>CommSec (Commonwealth Securities)</strong></a> - One of Australia's leading online stockbroking firms, operated by the Commonwealth Bank of Australia.
          </li>
          <li>
            <img src="data:image/jpeg;base64,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" alt="NABtrade Icon" width="50" />
            <a href="https://www.nabtrade.com.au/"><strong>NABtrade</strong></a> - The online trading platform provided by the National Australia Bank (NAB). 
          </li>
          <li>
            <img src="data:image/png;base64,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" alt="Stake Icon" width="50" />
            <a href="https://hellostake.com/au"><strong>Stake</strong></a> - Provides Australians with access to the US stock market with a user-friendly interface. 
          </li>
          <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABEVBMVEX///98uQJCTEv+/v7+/vx6uQD///r+/f92tQDy9vU7RkX5+vo3QD57qwD//+621Yf///P//+rr8tJvqwB0sQCmqKmRlJd1qwCXwUE7Q0Sz03VztwDg7r2GtyHx99qOuz5kaGedn561uLjH4JmcwFB7swAwOjnAxMRvtADf4uGTuD5BSEg/Tkt/hoXc6r9xd3dUWVfR09PW6rGaxEy+3I+hyFUnMi82Ojvl5eVNT06ps7JscHRiZWSNj45ZW1s8REgbICArNzN7fX7Kzc3A052oxGKzyHfq+NDQ46Xc7rekzmO71XiItzDN56W714/s+s2LwijJ75KKsyex026RuDD3/9Lq+8HR6p+q1FXt/du11Ih1/DeSAAAWBklEQVR4nO1dC3vaOrYVkSwZTImhpkkw0BAwIU2bBAKFpk1nTnJzyIO0Z8q5c27n//+QuyVbDxvIyasZks/r+yansfyQlre21t7aziCUIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFMsGzLEE91gmpJwYwCg2DIbQvYeFJSnPmhgYgoOwk93pnp6edneyjjh0z3tFnCSNRfxO5jQsL0bl/YONYTufb7fzGwf75e59+z0aZUOMnJmxO6Jh6Q0IY4ZRtvx1uJFb0cjl2+8bI4QIuds7xcgBWoeAfP5jFkdPEGaY3Tr5tMEbcrlPzi8ZyqMBc0Z227srSbzPD49HaPZd33w35Chq8wYnKPtmqJ+xu9ScgJWgnc38DCHRqDa2wd7vdD/FyXuDE4ZGB+Yzlp0T3N3NzSVEdH54DG7xLvfTnLzXnDijT7Fn5JabE9RdZCQh2sd3vN88TvBmfGouNyfO6EZGOClH6A4uZZ4/IWirbdzw/fuVjaXmBH2OrTa5PCAxlfI7D+bki3k7eMBwiTnBaHuoe7uxsd/YPj3dbpzsmvMpt38HOTGXkx1tJvn9crncOM7+qhE9GPD+D/REb+ueZrcONozZs3OHW87hhG4rTtrb8rRlBUbmGzxCDiEEcfkNAutEk7J7Bzc7jxPUUPf6jBgjS63tGSmrSbJxbLw9rju/akP5GrsqildUnBcb4lxO3vwD1IqYhg201IQgHvt+0APYYdjkBHW1CbVj0z8Rw92Fk43y0nPiIEM3ZGNrQczVDLuxJiHinOxoZyebFQZDjMY4J6BgAW/k3MmV1WnLijgnsSbg5INqa5+aTQSRbmNzBeLn9nDjy4etrDnCOCdoh2OkrDHXGIVHlpcTbHCyMWIJqy4P2yHyH7fVBTDfnK0DQ8Pk8it8vWLqjBgnHz7yG2jBw+PidvufZbS0YGhTD+BNIhVk8iMnB2/aPjBFaUjLEWbqqhgnx3NDqfxSc2L0OZQnBifgNlgiXwYj/jCczSqstPflBHr+nOAjtRa/f5/bbYwcwQVRiywzT4fxZr/Mj6HzX7KMRefcgpOj/8pwbwXGDM0Gq2WufdDohtaC5mTfMV5ECVz6xXkhnGC0n+xue2W/3BXLcpIT0HH7eoi5jXi0mPsgmExy0oazNvRs2+UxZv7jEs8drsx+m33lMIqTI24vDo5nHt/o0HD4pXG0dXS8aQi701CPxTjZbgDKm+qk/TI/0Ogu7NJ/HdxfNJKrSPg+22AvRyMUW352VAyd/9JlwtngbZ1AO3BYkpNIzb1R+kQayPLmCsR7/bAoz5bLDze3sUwoOSDw1GCP1R4Oyh58kke5l0hwIhYurWPz5XCCLa9kCznBx3MtJaLl62k0Aoy7Mu+ePxEmEpHSVdZz4Mxq+zgnG5KTJSaF79k5aCu3OCW7234TvliGlULfGCnZyltOpAttd1Fy7oQnmXbyLADDGB23N1YWIb8vXC3LKuM5iRu/CqA33rwYTgQrjU/5Bcayu7EpODmVc6S9HeOEOerMTy+FExT6PKfbOJhJT0cjEdJDJctmUpFqUv2WZS+IkzBztrN1AovwRjKgef8bWIZ2GyubXzZjOJAN7e7L4USokEi1Ai+fhslpdOBg9FXv9q7sauRWNIX5rQV5tmfJCTIjYmen/DU+i4aniHyaEw8nAENmz58THffKrAAR1RW4e2Js/PAENvm08rfINV4CJxKx9HRoL90oryzwBaPdv7eTl8BJd1tiS2VIda7NTAzsOgYnuUVoHz9/ThrtfIR/ns40xioOIMRVq0vuuLEI289fn+gsG6wYM8CaBs7JZ2kn+Ru2Sp8/J9uKk93j2WDVQfu7BifHSrNxm4rls8OMQBQEP3NOdEi7uzJTt4bN3Z9PDt4ygts4J/Jfzkye7RlyklWR3+6wkdybwzirN3E+Izz6hzx3EyU4cUKERZ7PnBNzGzAf97K8tqChplbuDSL4qxwsBDyO5oShnZwm6/lzYlbk5LfNFnj/R0YdRhe0nKpByJ1gAwzLzHV76wVwQrKmOG2fmAvK6ENei7YD7BCS1R63AdcygPCpJ5KE3ZcwdxLFd7n858bpiOO0vL+xsaI4AQPgo2+oICj/YRReD376QB0UxSXPnhOC92OxXi6X5zKuHSVSIk5yX8PFxdF6JTfc3zrtdk/Lm0MdF2dn8/bhc54TJ1zA3yLcHe5Ee8FGmc6KYK9thM/tbTSbow6f87w4wbibW1xFHQ1kW+2PHy1O8Yu6hBfAibCUnU+L89PcHobb0cYXnxjlRaTkP2P2Qjjho82ezPkoQ43r647ajsEQ9W7NZCYF2ifRZ2IvgRMIaxg6/dqeP4HyuTIzt9IZRqPPs+fmd7fYi+JE7AVub4K7TFhA7reDcja+Zyd+2f48jNWjt3cbWaOc0WkPowTER1kidyxzEh8bTz68eyGSo6OtDzA8WIR533kN2mZjBy+o+9wpf87LWreDD6fZsAAhOg9vKTjRVnlXHVnigoIZCMvH2Z3TrXK5fHS03RUVS8yZ2dfFogID/iE+p+zuCFOA6Td3A1j5odj1zwUJewgP3eHimXvp5Er82EM7+ssRfsEFcQs4T1HFhmViCBQuE5h7FSNMXEbCeuG/52SWpEWIHjrvufKM6CQebt1+qLcEI9R1qYT4/ECCEIfIwzTZQWhxo1ZagObHgqN64yr25vBLCrrT7LENj6H/edeKcNikMU6w+7tsap0VEtdVVVPrd/R4nBTPDuVtxzdx0pSnHX6jj80JRucdP5PJWPA/f53iGCf1gDdlLN/vBGNGzOtY37Ys0Wh5ffp4nSq8gqeFtx1HbwgTaaOEKUNeFT3jna48esUTRiVP3f5VAZmcoL1ANXnnKMYJGlhRkxWM8ePZCXASce2VIgIw5tNXNFL2NJzQia9GVzVnAUVgCxnZdkZjnBRqssmvuYQkb3tvKE4ytuSk2DpcD/Gurjj5j/3rOAFzmEpOMt435uoGigaqxbJqLtZDx2gs6bLsAXpcTqJH2iUxWIKLr+WzvJLyKKu/lpOevL3lD4jJyc+arTjJBCVmcnKuTMhr/nJOMk/OSV11I1Mr6LmD8YWX0fDO9ZrHKLqU/QRf+Jid0px0SiTJiV1HT8MJc9cVJ8F3Zhzvm5xYFb3mYddVJmTVCnf8qxc3Yj4n0nSejBN25ct+BNcGJ/RQccXHPtGuFNNS1CXLsqfJqPlWM2mRnL2RE+9GTu76F0luAGEXym3YFUOu1gPLIMVaq0eDhVGzc8WJd43YPTmZN4Ib587fc/JIpBBWDNTIJ4aPvfB8k5NAKhQe3lQUJ0HdMd8P5pzcomfLzQlo11b4TIsLJdVnNW7ZxymVUpvQiTQs663LNCegKCiJQqSFDyQkDKH4T4oTMdzNnJQWcsL3IvnTecj28FUQRho5U+Ckc644Ie9Md5IJwKHgSFfiUqA80Kr5eng4CzGly4lZ2DO+eYjD8A0sLxF1xzlhwoxvYydARPgyEHsETuDJVc+SnFQQZeEGcD3IxEgRCkVcQFBPrkiWVw1vQsRXK/Xe6mXr8LBVWb2ow4AJw8q9iH/BEYbc0nW/MjgEnFW+XY8LUZKCzHBCBXNE+9jgO9fZhFNpckL5ZC01L3lIWOlXC+yW83cxoLNFKdQta51EnLALT7uZ8C2dy3mLrtRKDK8uPEZosXm4ZkdSzl57NbjghoyJ9syckULvMlizI0dlA7ygdV5kzJ3hxK6TcUtIet2PP4TKn5zTGCdgdb3DwLOh+3BLrzb9SR84gfgycqk4WSuKTXFM2e923J/AokSknbyTK5J1KGkq9Cdgbeq4D3QdVsFQTE6Ye13zgkCNEUIbINHv/HlOGaUJTjolPH5tWZYVUwQW3LnTZ/G5Uz8MMrbyiVan1nugtOYW3dSrcTVMshFXqZM/ZH8moY9wSF3Fy3Zf+DfGvr+14zNNGFHfZU7UO24l9ZYXjis+Tj+zNnVxkhPQ9qU1fZL8CZd2moY/sStoPLHVGeExiDduSNLdihM2Vq/OviLhX9mrSze69q9ADjFclAiqduTpXkl82ISuA9/PJAFWd6YiWZhc32uCtzgnliXMZVBgNM6JZ3Bi6f/C+X6ck58/xGFTN/ivzxcP+FZg1J2oW65TUUTNLiQTtZ+Rs7U6ocolRHeoVoAxO+jccD0x1+wN3HCs4LrrtcRkNAaRCSphX0w7wXUvflp0a7uJDU4uL+1EO7/fjyJ7kKyFXk+V0wzgZsRQJ1aLDqTjnIrTibuuhnLGGWTXho378ZnhXUWOwnXPbMmcb3mecLAqcwPmWGdJTljJS9iUz+/u+01j3bEz8q68SV0c9NHDcpLG4prxxoIT8lZS3kTNqO/2hK+CiNVVL3j2jaDvr7R/84La+qSmMh4QEvTCuUN7r6OzLLCei3qhUKxfDyTx3DMl7AT0SenHKw5lhH5N/P4qxkkg7ukBwTB9Vc8yf7qxROo9oL0muCeuwerR6uC//o6qkWuxgzF3DnhPqROepcVuy48ys7DUXNRBsRX2LgPlFCdFYQDaZ0OUAMsMAVnC3Cs1CH8qtFeME1IvFIuF/12TpmL/u+C6xWLRNdYdMfFqlb1SqdRcV4kuODa+XeC1GDpfYFUEJxehjAv8WgHkS9gUeFUu72lfTTQeHtFzz48OBE3KN3xA4qCedNGW3RRP0NLX63PjolwDQOytbKA1ywnfXsKsuCafJ2yY8PysyUlmbbXocmWPaSjIudvO2OcPFbRUqTB74oJMRhVfdhVokDlIa8rL/NxL2ZnOKnS7qGYZRImR+of+9biGyoj5zv0wqqp36NWxFDqEXEub898JOWpyIrbj4rkCMqPtM4F9BVETE1tOhd+Vi4IQ/4ERIVYOxQ5+AifuxA/Ct9yHjn2Tay8PebTqzXg9iOCURfBMSvRm+DsbSE3rCQXV7/h2iHWlMsGiejdxcpu4GPSTy6K7MaYVjXX50FyTliMZu8cIk5ZueXs8gyQbA5AbqKTeeFCHIOdMdiL4yajSZ5TtrUkF3+Kc7PUlenKXhsFZN9rJbTiBucnUU0FhK07eogf6WFhf5TrmTxll8vVZtSIYerHmS8OA55wrxbbuOjz5El14iSDAEXqP9w4X5EU8XuDRgnyW2oKlEOQpETCHk9vlT8Dxy1vzSEz5xclN+YpbccJWO+FTLP9P6LRSJwPKw5SW9C4VsNOKHy0W9iqloCFCv5Hx/pXQ0xW1lFVFAEVEboMYcSErVjw5hvtyYteKJidKPVoP3naibNyRTwmK4E6i1bXT569dbX7Zb13i/iGN1q6CfX1Ti8JlM4brgZJoYnnHESOO2OuENbXUmwaGPnl7TztpmX5Dpj0EJw8sOSCw4inPWYX4J+LEu2C8/kI9CXxGSUmoACI8ZfwQs/gxeEq3ibRPNKMQLf7ca1Zab2ugsiwtse7PySDmS6tKOz2cE4JaahVbRb0wT2BZr+qM/+l1N1AOBVyNdL8DRIkWGDNQoly8SlGwQcfNy1rgBYFt2UK1W0ra3ZuTaSwv8Jh2oudHxjp0I3di2VydgBEpheJXyFTpjKbgZCZFMAN7XXDCaG/9te/Hzn8ETiq/jhP2XS64fvCzFu3t21dinWPoW2SS/sRVObk1WCzZbTixOCeM1FteYMT0IryLIoil5AT6XJzIGC34SzLgVUU9HkZV6W2CfyvRPoGHMtpSIYblL8K6SCjVAk0fD5953nEa6ueHcRL3J4/ICWGRtwROanoJCjmBAckj/6c44Z2hqg4lyKwtwutWAeNCyzAcYGPSmvarBRrGk0vJCThAfC67pwAvOGIMDTJJeFV4+y6SGZ1g7a/iIriMQnimcrX2pFKtF1wQvYxeLK+d8L2qcJE1ObGv1C5X04hDw2cGdbE3IYNkK2gKm2Ia8uZgTq67Jl2JFVzTsG6RK7mqfxdOFu95/RJOIKqcJDkBdSIHpVWJ5GTdhbiFERnvWlZFbsNFUFtyfPdmryPvHTR5OiEUtMDJnezkSTnhtKBKPPXO94Lljg6VORSFzioSf7a6rubEpODobRWxuxVtBlKQdsqcMgNX/WkzMJTzO3GiSiGfjJNePCVscVOQnJCEQ7FA7XJOmMrWhg5Gc0LoaqWyKuBQWlHOZFUXRYCdhGrnlpzYc/Inv5QThIpBTFBZQSXKufP1pRnfAvODsEYSo6ZaiM6o7DKvwEa911HG5E/XQVrpfUMyVwA/65OIfutWnIzlrHsyTujb+F4UCHm17qC9IMaJfShtYvzDELY42u2AWLoaCb+M1wRVL3cafbtCVZUrpX+9tu7AiXfF8BNzQlYTdlLUnBBd/BlyImuuGb1SXnatCZONzyjE3PMfkXAXe0B6aySzXoewkoqyflKXgvlGTtZU1FGr8voY12VPxgm+8Mxx+2/NrAxpxTb6vLHcPqH1mkyoZLz163HBdd16b13eyrb7vP5Zr+Xe1IWFh1JwwdUf+nmLOMHEfaV3boPa4eF67fwJ7aQYmJzYlVhVdd+cO1atIJcAqiJlXqLjebW3k0ngdVRY864AGpmMNd2d9b+qIORKvUpg6aXfWsgJ1bKaxwS+3+k/nY+lxAzoeGmJYSdsL2ZEl1jaCUyEK71giVIBk7y1Kp8qjNS0r4LIj4PXtOtjNoRPZE4+FnAYd3MZ/yk5YaZa5erE5KRuOhS7qaqTeCrxLLGxq8f66pqEG7e9NX25H+5x8hVYpZqttSJawElcIyT20H85J2OTkwk1OSHuwODE+0nkp24EEcedJkiRXvdVX5RuwGpEpzPFGDAVOn/8IcvrxZ5AbL9YLtnuum1uGnP/vrDeviolpCiGfzgnPNeue2zzBJbBiVpfMmJjLP7HzN3m2kxAZFnej5764oj8vExIQnAOncHPgSzRsfcYTEfFif4ugziliW0bUsBuMs2JleREcvVInBDzqwPvGpnrDi81F0u1xdtWUexzHsZofRoXMBm/E1wVICCWrhjR1Rhv4Hhq1y678sIkpG1P+Yd3czmhhbPAVjk5i/uT/0jTSdpJJypFeDxOeusaJWJWK1BW1E3vejOXMjT+9icvn7BEdqkTvPtWp8Q1pC0h42nNgxNsIKBjB4M+CBd28Xb9MPwW5awAJxdb8hn6Oy8eWoy/nQUBL38Di3nVRLSp+vItto+z904ePys8ylpM+G6wRIHEqloo37qOmoouTX4eKAox3dL56vRyMLisrFZLBV6jRjDTcp/nH/ea0wGcMO3vAQPMJZTxDwDDB7o8klbPp9qLhwGlWy9x1OtFvl8gr3KpuVfO30J0/WOVmounK8TrKeFlqU812eyHXfwPMxORMwnlLf8Nk9i2E9/qFiWvPHOHqPDSsE6He4fR8yifQOHTzdeMBaX8JwnPxLIzTqwQlzj8e9awj4/1Z9HV/zfGvNpvo2HuG4jqmVFUgD/nHLVzqlsJIeYDzV9nLo2SLvE+4jmPmNv9++N2nCy4FBnELLx5vPr79pyEPonc3Me7fMacIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFL8S/w8XbCVuppBvyQAAAABJRU5ErkJggg==" alt="SelfWealth Icon" width="50" />
            <a href="https://www.selfwealth.com.au/"><strong>Self Wealth</strong></a> - A flat-fee brokerage without percentage commissions, popular among cost-conscious traders. 
          </li>
        </ul>

        <p>
        <strong>Disclaimer!</strong> Remember, when choosing a brokerage, it's essential to consider fees, platform usability, available assets, customer service, and any other features important to you. It might also be beneficial to consult current reviews or news regarding these platforms, as the industry can change, and new players might emerge or old ones might innovate.
        </p>
        <p className="footerComment"> Created by James Preston</p>
      </div>
    </div>
  );
}


// --------------------------------------------------- Search Page 

function SearchPage({ selectedItems, setSelectedItems }) {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [tempSelectedItems, setTempSelectedItems] = useState([]);

  const filterByTicker = () => {
    setFilteredData(data.filter(item => item.Ticker.toLowerCase().includes(filter.toLowerCase())));
  };

  const filterByName = () => {
    setFilteredData(data.filter(item => item.Name.toLowerCase().includes(filter.toLowerCase())));
  };

  const filterByDescription = () => {
    setFilteredData(data.filter(item => item.Description.toLowerCase().includes(filter.toLowerCase())));
  };

  const resetFilter = () => {
    setFilteredData(data);
    setFilter('');
    setTempSelectedItems([]);
  };

  const buildPortfolio = () => {
    setSelectedItems(tempSelectedItems);
    setTempSelectedItems([]);
  };

  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setTempSelectedItems([...tempSelectedItems, item]);
    } else {
      setTempSelectedItems(tempSelectedItems.filter(selectedItem => selectedItem !== item));
    }
  };

  return (
    <div className="search-page">
      <div className="search-filters">
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by..." />
        <button onClick={filterByTicker}>Filter by Ticker</button>
        <button onClick={filterByName}>Filter by Name</button>
        <button onClick={filterByDescription}>Filter by Description</button>
        <button onClick={resetFilter}>Reset</button>
        <button   style={{backgroundColor: tempSelectedItems.length > 0 ? 'green' : 'grey'}} onClick={buildPortfolio}
>
  Build My Portfolio
</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Add to Portfolio</th>
              <th>Ticker</th>
              <th>Name</th>
              <th>Total Assets</th>
              <th>Price</th>
              <th>1 Year Total Return</th>
              <th>3 Year Total Return</th>
              <th>Tracking Error</th>
              <th>Expense Ratio</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={tempSelectedItems.includes(item)}
                    onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                  />
                </td>
                <td>{item.Ticker}</td>
                <td>{item.Name}</td>
                <td>{item['Total Assets']}</td>
                <td>{item.Price}</td>
                <td>{item['1YR TR%']}%</td>
                <td>{item['3YR TR%']}%</td>
                <td>{item['Tracking Error']}</td>
                <td>{item['Expense Ratio']}%</td>
                <td>{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="footerComment"> Created by James Preston</p>
    </div>
  );
}

// --------------------------------------------------- Portfolios Page 

function Portfolios({ selectedItems, setSelectedItems }) {
  const deleteItem = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="portfolios-page">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Remove</th>
              <th>Ticker</th>
              <th>Name</th>
              <th>Total Assets</th>
              <th>Price</th>
              <th>1 Year Total Return</th>
              <th>3 Year Total Return</th>
              <th>Tracking Error</th>
              <th>Expense Ratio</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => deleteItem(index)}>Remove</button> 
                </td>
                <td>{item.Ticker}</td>
                <td>{item.Name}</td>
                <td>{item['Total Assets']}</td>
                <td>{item.Price}</td>
                <td>{item['1YR TR%']}%</td>
                <td>{item['3YR TR%']}%</td>
                <td>{item['Tracking Error']}</td>
                <td>{item['Expense Ratio']}%</td>
                <td>{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="footerComment"> Created by James Preston</p>
    </div>
  );
}

// --------------------------------------------------- Log In Page 


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });

    if (error) {
      console.error("Error logging in:", error.message);
    } else {
      console.log("Logged in as:", user.email);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="signInButton" onClick={handleLogin}>Login</button>
      <p className="footerComment"> Created by James Preston</p>
    </div>
  );
}



// --------------------------------------------------- Log Out Page 
function LogoutPage() {
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogoutConfirmation = () => {
    setConfirmLogout(true);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error.message);
      toast.error('Error logging out. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success('Log out successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Redirecting back to the login page after a successful logout using window.location
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        // Handle the post-sign-out logic here if you want
      }
    });

    // Cleanup the listener on component unmount
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <div className="logout-container">
      {!confirmLogout ? (
        <>
          <h1>Are you sure you want to log out?</h1>
          <button onClick={handleLogoutConfirmation}>Yes, I want to logout</button>
        </>
      ) : (
        <>
          <h1>Logging you out...</h1>
          {handleLogout()}
        </>
      )}
    </div>
  );
}


// --------------------------------------------------- Sign up Page (Supabase)

function SignUpPage() {
  return (
    <div className="sign-up-page">
      <h1> Sign Up</h1>
      <Auth supabaseClient={supabase} />
      <p className="footerComment"> Created by James Preston</p>
    </div>
  );
}


// --------------------------------------------------- Sign up Page (pre-Supabase)

// function SignUpPage() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState({});

//   const emailOptions = ['@outlook.com', '@gmail.com', '@hotmail.com', '@test.com'];

//   const validate = () => {
//     let isValid = true;
//     let errors = {};

//     if (!form.name || /\d/.test(form.name)) {
//       isValid = false;
//       errors.name = 'Name cannot contain numbers';
//     }

//     if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
//       isValid = false;
//       errors.email = 'Please enter a valid email';
//     }

//     if (!form.password || !/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(form.password)) {
//       isValid = false;
//       errors.password = 'Password must contain at least one letter, one number, and be 8 characters long';
//     }

//     if (form.password !== form.confirmPassword) {
//       isValid = false;
//       errors.confirmPassword = 'Passwords must match';
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       const { user, error } = await supabase.auth.signUp({
//         email: form.email,
//         password: form.password,
//       });

//       if (error) {
//         console.error("Error signing up:", error.message);
//       } else if (user) {
//         const { data, insertError } = await supabase
//           .from('users')
//           .insert([
//             { id: user.id, name: form.name }
//           ]);

//         if (insertError) {
//           console.error("Error storing user data:", insertError.message);
//         } else {
//           console.log('User data stored:', data);
//         }
//       }
//     }
//   };

//   return (
//     <div className="sign-up-page">
//       <h1> Sign Up</h1>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           pattern="[a-zA-Z\s]*"
//           title="Name cannot contain numbers"
//         />
//         {errors.name && <div className="error">{errors.name}</div>}
//       </div>

//       <Auth supabaseClient={supabase} />

//       {/* <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             list="emailOptions"
//           />
//           <datalist id="emailOptions">
//             {emailOptions.map((option, index) => (
//               <option key={index} value={option} />
//             ))}
//           </datalist>
//           {errors.email && <div className="error">{errors.email}</div>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             pattern="^(?=.*[a-zA-Z])(?=.*\d).{8,}$"
//             title="Password must contain at least one letter, one number, and be 8 characters long"
//           />
//           {errors.password && <div className="error">{errors.password}</div>}
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//         </div>
//         <button type="submit">Sign Up</button>
//       </form> */}
//     </div>
//   );
// }

// --------------------------------------------------- Supabase UI   
function AuthComponent() {
  return (
    <div>
      <Auth supabaseCliient={supabase} />
    </div>
  );
}

// --------------------------------------------------- App routing  
function App() {
  const [selectedItems, setSelectedItems] = useState([]); 

  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Home</Link> {' | '}
          <Link to="/Information">Information</Link> {' | '}
          <Link to="/search">Search</Link> {' | '}
          <Link to="/portfolios">Portfolios</Link> {' | '}
          {/* <Link to="/login">Login</Link> {' | '} */} 
          <Link to="/signUp">Login or Sign Up</Link> {' | '}
          <Link to="/logout">Logout</Link> 
          
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/search" element={<SearchPage selectedItems={selectedItems} setSelectedItems={setSelectedItems} />} />
          <Route path="/portfolios" element={<Portfolios selectedItems={selectedItems} setSelectedItems={setSelectedItems} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
