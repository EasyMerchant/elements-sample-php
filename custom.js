let elements;
(function () {
     initialize();

     async function initialize() {
          const { client_token, amount } = await fetch("/create.php", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
          }).then((r) => r.json());
          elements = new lyfPayCheckout(client_token);
          elements.create({
               container: 'payments',
               environment: 'sandbox', //sandbox || production
               amount: amount,
               tokenOnly: true,
               currency: "usd",
               saveCard: true,
               saveAccount: true,
               submitButtonText: "Submit",
               showReceipt: false, // true || false
               showTotal: false, // true || false
               showSubmitButton: true, // true || false
               paymentMethods: ['card', "ach"], //'card', 'ach','crypto'

               // Optional
               //  fields: {
               //    billing: [
               //   { name: 'country', required: true, value: '' },
               //   { name: 'state', required: true, value: '' },
               //   { name: 'city', required: false,value: '' },
               //   { name: 'postal_code', required: true ,value: '' },
               // ],
               // additional: [
               // { name: 'name', required: true,value: '' },
               // { name: 'email_address', required: true ,value: ''},
               // { name: 'phone_number', required: false ,value: '' },
               // { name: 'description', required: true ,value: '' }
               // ]
               //   },


               // Optional
               apperanceSettings: {
                    bodyBackgroundColor: "#eeeff2",
                    containerBackgroundColor: "#ffffff",
                    primaryFontColor: "#000000",
                    secondaryFontColor: "#666666",
                    primaryButtonBackgroundColor: "#1757d9",
                    primaryButtonHoverColor: "#3a70df",
                    primaryButtonFontColor: "#ffffff",
                    secondaryButtonBackgroundColor: "#ffffff",
                    secondaryButtonHoverColor: "#1757d9",
                    secondaryButtonFontColor: "#1757d9",
                    borderRadious: "8"
               }
          });

          // On Ready Event -  it will trigger once all elements render successfully
          elements.on('ready', (event) => {
               console.log("Ready", event)
          });

          // On Done Event - it will trigger once payment successfully done
          // or It will trigger once card or ach account token generated successfully
          elements.on('done', (event) => {
               console.log("Done", event)
          });

          // On Error Event - it will trigger once payment successfully done
          elements.on('error', (event) => {
               console.log("Error", event)
          });

          elements.on('process', (event) => {
               console.log("Process", event)
          });
     }
})();

// If you have your own button , you can call this function
function formSubmit() {
     elements.submit();
}