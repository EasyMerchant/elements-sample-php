let elements;
(function () {
    initialize();
    
    async function initialize() {
       const {client_token,amount} = await fetch("./create.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }).then((r) => r.json());
        elements = new lyfPayCheckout(client_token);
        elements.create({
              container: 'payments',
              environment:'local', //sandbox || production
              amount:amount ,
              currency:"usd", 
              showReceipt:false, // true || false
                showTotal:true, // true || false
                showSubmitButton:true, // true || false
                paymentMethods:['card', 'ach','crypto'], //'card', 'ach','crypto',wallet
                fields: {
                billing: [
               
        { name: 'country', required: true, value: 'US' },
        { name: 'state', required: true, value: 'AL' },
        { name: 'city', required: false,value: 'Los Angels' },
        { name: 'postal_code', required: true ,value: '91423' },
     
      ],
      additional: [
      { name: 'name', required: true,value: 'Test LyfPay' },
      { name: 'email_address', required: true ,value: 'test@lyfpay.io'},
      { name: 'phone_number', required: false ,value: '' },
      { name: 'description', required: true ,value: 'Test Payment' }
       
      ]
        },
        apperanceSettings:{
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

    }

    // On Ready Event -  it will trigger once all elements render successfully

    elements.on('ready', (event)=>{
         console.log("Ready",event)
    });


    // On Done Event - it will trigger once payment successfully done
   
    elements.on('done', (event)=>{
         console.log("Done",event)
    });


    // On Donde Event - it will trigger once payment successfully done

    elements.on('error', (event)=>{
         console.log("Error",event)
    });

    elements.on('process', (event)=>{
         console.log("Process",event)
    });

  
  })();
    // If you have your own button , you can call this function
    function formSubmit(){
     elements.submit();
 }