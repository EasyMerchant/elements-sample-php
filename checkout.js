let elements;
(function() {
    initialize();

    async function initialize() {
        const {
            client_token,
            amount
        } = await fetch("./create.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r) => r.json());
        
        elements = new lyfPayCheckout(client_token);
        elements.create({
            container: 'payments',
            environment: 'sandbox', //sandbox || production
            amount: amount,
            currency: "usd",
            showReceipt: true, // true || false
            showTotal: true, // true || false
            showSubmitButton: true, // true || false
            paymentMethods: ['card'], //'card', 'ach','crypto',wallet
            token_only: false, // when enabled payment is not processed, it will simply return you the card token
            saveCustomerCard: false, // allow card save option
            saveCustomerAccount: false, // allow account save option
            submitButtonText:"Submit",

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
        elements.on('done', (event) => {
            console.log("Done", event)
        });

        // On Donde Event - it will trigger once payment successfully done
        elements.on('error', (event) => {
            console.log("Error", event)
        });

        elements.on('process', (event) => {
            console.log("Process", event)
        });
    }
})();

function formSubmit() {
    elements.submit();
}