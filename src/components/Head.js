import Favicon from 'react-favicon';

const Header = () => {
    return (
        <head>
            <meta charset="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <title>DualLearning</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>

            <Favicon url="./assets/img/favicon.png"/>
            <Favicon url="./assets/img/apple-touch-icon.png"/>

            <link href="https://fonts.googleapis.com" rel="preconnect"/>
            <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
        </head>
    )
}

export default Header;