import React, { useEffect } from 'react';
import braintree from 'braintree-web';
import axios from 'axios';

const Test = () => {
  useEffect(() => {
    const fetchClientToken = async () => {
      try {
        const response = await axios.get('http://localhost:3000/client_token');
        const clientToken = response.data; // Assuming your server returns clientToken
        createBraintreeInstance(clientToken);
      } catch (error) {
        console.error('Error fetching client token:', error);
      }
    };

    const createBraintreeInstance = (clientToken) => {

      braintree.client.create({
        authorization: clientToken
      }, (clientErr, clientInstance) => {
        if (clientErr) {
          console.error('There was an error creating the Client.');
          throw clientErr;
        }

        createUsBankAccount(clientInstance);
      });
    };

    const createUsBankAccount = (clientInstance) => {
      // Assuming you have the necessary input fields in your JSX
      // const accountNumber = document.getElementById('account-number').value;
      // const routingNumber = document.getElementById('routing-number').value;
      // const accountType = document.querySelector('input[name="account-type"]:checked').value;
      const ownershipType = "personal"
      // const billingAddress = {
      //   streetAddress: document.getElementById('billing-street-address').value,
      //   extendedAddress: document.getElementById('billing-extended-address').value,
      //   locality: document.getElementById('billing-locality').value,
      //   region: document.getElementById('billing-region').value,
      //   postalCode: document.getElementById('billing-postal-code').value
      // };

      const bankDetails = {
        accountNumber: '1000000009', // Example account number
        routingNumber: '011000015', // Example routing number
        accountType: 'personal',
        ownershipType: 'personal',
        billingAddress: {
          streetAddress: '123 Main St',
          extendedAddress: 'Apt 2',
          locality: 'Anytown',
          region: 'NY',
          postalCode: '1000'
        }
      };
      if (ownershipType === 'personal') {
        bankDetails.firstName = "monjur"
        bankDetails.lastName = "alam"
      } else {
        bankDetails.businessName = "businessname"
      }

      // braintree.usBankAccount.create({
      //   client: clientInstance
      // }, (usBankAccountErr, usBankAccountInstance) => {
      //   if (usBankAccountErr) {
      //     console.error('There was an error creating the USBankAccount instance.');
      //     throw usBankAccountErr;
      //   }

      //   // Use the usBankAccountInstance here.
      //   console.log('US Bank Account instance created:', usBankAccountInstance);
      // });


// ...

braintree.usBankAccount.create({
  client: clientInstance
}, function (usBankAccountErr, usBankAccountInstance) {
  // Collect bankDetails.
  if (usBankAccountErr) {
        console.error('There was an error creating the USBankAccount instance.');
       throw usBankAccountErr;
    }

  usBankAccountInstance.tokenize({
    bankDetails: bankDetails,
    mandateText: 'By clicking ["Checkout"], I authorize Braintree, a service of PayPal, on behalf of [your business name here] (i) to verify my bank account information using bank information and consumer reports and (ii) to debit my bank account.'
  }, function (tokenizeErr, tokenizedPayload) {
    if (tokenizeErr) {
      console.error('There was an error tokenizing the bank details.');
      throw tokenizeErr;
    }
    console.log(tokenizedPayload)

    // Submit tokenizedPayload.nonce to your server as you would
    // other payment method nonces.
  });
});

    };

    fetchClientToken();
  }, []);

  return (
    <div>
      <h2>Test Component</h2>
      {/* Add your JSX input fields here */}
    </div>
  );
};

export default Test;
