class Iphone4{
    constructor(ASIN , color , display , camera , bluetooth ){
        this.ASIN = ASIN;
        this.color = color;
        this.display = display;
        this.camera = camera;
        this.bluetooth = bluetooth;

        this.dial = function(){
            console.log("tring.. tring..")
        }

        this.sendMessage = function(){
            console.log("Sending message..")
        }

        this.cameraClick = function(){
            console.log("Camera clicked")
        }

        this.connectBluetooth = function(){
            console.log("Bluetooth connected successfully")
        }
    }
}

let i4 = new Iphone4(
    "B09X67JBQV",
    "Gray",
    "90mm",
    "2.0 MP",
    "Connecting"
  );

  console.log(i4)