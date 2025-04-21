<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1-3.js</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <script>
        let name = prompt("nhập nameUser:");
        let age = prompt("nhập tuổi user:");
        let role = prompt("nhập vai trò của người dùng");
        const createUser = (name, age = "18", role = "user") => {
            console.log(`username: ${name}`);
            console.log(`userage: ${age}`);
            console.log(`userrole: ${role}`);
        };
        createUser();
    </script>
</body>
</html>
