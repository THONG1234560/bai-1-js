<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1-4.js</title>
    <style>
        *{
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>
<body>
    <script>

    const user = (name = `thông`, compannyname = `thông`) => {
        const text = `Dear ${name}
Thank you for purchasing our product. We hope you enjoy it.
Best regards,
${compannyname}`;
        console.log(text);
    }
    user ();
    </script>
</body>
</html>
