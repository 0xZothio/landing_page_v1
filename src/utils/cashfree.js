import axios from "axios";
import { cashfreeSandbox, cashfreeProd } from 'cashfree-pg-sdk-javascript';

export async function cashfreeOrder() {

  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/payment/cashfree',
    headers: {
      'authorization': 'eogneqonre398432985823bn5kj32n5',
      'Cookie': 'next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0.._Rl91Q-3aotN18g5.dHKGNkO1x0x65FK_X_Ay4V1axhmWF9RAOIllyWYMDPEsn-6SgUt9DMuRLTKXL_Ql0RiyASWLc5Gu6RAkMiO4woqwtcfERN2qNC1D24pFMpJS-9akMJOW8YNQXMzUU-JWApsHtFRw4t88iIHzru3LEo4nMZ8NZoBk-QWGVPMyvlXzfj78qE24qg8tpHyTVAGCvTKf0zx-sKHOAg7Iy0g9WJK624fRW_inNGjjkJVGTEwrbHxuWiGi-WbdY7yYB1Dj05Uf6-3eMt2sRS6BeGAngAA_FeSCvbEXz1q6MevqLXUN-43uLaaOX2uevbel5W5lpGONh0-5HZtD2mn70Is_H711sslstkv7i9vceHXrI9k4A1H6La5i.jC3QuAIA3Wi1X2yOMw9DTw'
    }
  };

  axios(config)
    .then(function (response) {
      console.log(response.data)
      // console.log(process.env.APP_ENV)
      // if (response.data.payment_link)
      //   window.open(response.data.payment_link, '_blank')
      const cashfree = new cashfreeSandbox.Cashfree(response.data.payment_session_id);
      cashfree.redirect();
    })
    .catch(function (error) {
      console.log(error);
      window.alert("Payment Failed!!")
    });
}