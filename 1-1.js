<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1-1.js</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <script>
        let r = prompt("hãy nhập bán kính của hình tròn");
        function chuvi(r) {
            return 2*r*3.14;
        }
        let result1 = chuvi(r);
        console.log("chu vi của hình tròn là: " + result1)

        function dientich(r) {
            return r * r * 3.14;
        }
        let result2 = dientich(r);
        console.log("diện tích của hình tròn là: " + result2)
    </script>
</body>
</html>
