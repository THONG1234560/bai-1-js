<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1-2.js</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <script>
        let n = prompt("hãy nhập 1 số");
        const  checkNumber = (n) =>{
            let checkNumber= parseInt(n);
            if (isNaN(checkNumber)) {
                console.log("n không phải là số");
            }else{
                if(n%2==0){
                    console.log("Số vừa nhập vào là số chẵn");
                }else{
                    console.log("Số vừa nhập vào là số lẻ");
                }
            }
        }
        checkNumber(n);
    </script>
</body>
</html>
